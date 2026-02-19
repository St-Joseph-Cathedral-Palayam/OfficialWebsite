import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from '../styles/MediaCarousel.module.css';

interface MediaItem {
    id: string;
    publicId: string;
    url: string;
    secureUrl: string;
    type: 'image' | 'video';
    format: string;
    width: number;
    height: number;
    bytes: number;
    createdAt: string;
    thumbnail?: string;
}

interface MediaCarouselProps {
    autoplay?: boolean;
    autoplayDelay?: number;
    showThumbnails?: boolean;
    folder?: string;
    title?: string;
    localImages?: string[];
}

const EMPTY_ARRAY: string[] = [];

const MediaCarousel: React.FC<MediaCarouselProps> = ({
    autoplay = true,
    autoplayDelay = 5000,
    showThumbnails = false,
    folder,
    title,
    localImages = EMPTY_ARRAY,
}) => {
    const [media, setMedia] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (localImages && localImages.length > 0) {
            // Use local images
            // Use local images
            const localMediaItems: MediaItem[] = localImages.map((url, index) => {
                // Construct next/image URL to leverage optimization and ensure loading
                // User confirmed /_next/image?url=%2Fpublic... works
                const secureUrl = `/_next/image?url=${encodeURIComponent(url)}&w=1200&q=75`;

                return {
                    id: `local-${index}`,
                    publicId: `local-${index}`,
                    url: url,
                    secureUrl: secureUrl,
                    type: 'image',
                    format: 'jpg', // Assumed
                    width: 800, // Placeholder
                    height: 600, // Placeholder
                    bytes: 0,
                    createdAt: new Date().toISOString(),
                };
            });
            setMedia(localMediaItems);
            setLoading(false);
            setError(null);
            setActiveIndex(0);
        } else {
            // Fetch from Cloudinary
            fetchMedia();
        }
    }, [folder, localImages]);

    const fetchMedia = async () => {
        try {
            setLoading(true);
            const queryParams = folder ? `?folder=${encodeURIComponent(folder)}` : '';
            const response = await fetch(`/api/cloudinary/media${queryParams}`);
            const data = await response.json();

            if (data.success) {
                setMedia(data.media);
                setActiveIndex(0); // Reset to first slide on new data
            } else {
                setError(data.error || 'Failed to load media');
            }
        } catch (err) {
            setError('Failed to connect to media server');
            console.error('Error fetching media:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSlideChange = (swiper: SwiperType) => {
        // Pause all videos when changing slides
        Object.values(videoRefs.current).forEach((video) => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
        setActiveIndex(swiper.activeIndex);
    };

    const toggleVideoPlayback = (videoId: string) => {
        const video = videoRefs.current[videoId];
        if (video) {
            if (video.paused) {
                video.play();
                // Pause autoplay when video is playing
                if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.stop();
                }
            } else {
                video.pause();
                // Resume autoplay when video is paused
                if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.start();
                }
            }
        }
    };

    if (loading) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.loadingState}>
                    <div className={styles.spinner}></div>
                    <p>Loading media gallery...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.errorState}>
                    <p>⚠️ {error}</p>
                    <button onClick={fetchMedia} className={styles.retryButton}>
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (media.length === 0) {
        return (
            <div className={styles.carouselContainer}>
                <div className={styles.emptyState}>
                    <p>No media found. Upload photos or videos to your Cloudinary folder.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.carouselContainer}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={media.length > 1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                className={styles.swiper}
            >
                {media.map((item) => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        {item.type === 'image' ? (
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.secureUrl}
                                    alt={`Gallery image ${item.id}`}
                                    className={styles.media}
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <div className={styles.videoWrapper}>
                                <video
                                    ref={(el) => {
                                        videoRefs.current[item.id] = el;
                                    }}
                                    className={styles.media}
                                    controls
                                    preload="metadata"
                                    poster={item.thumbnail}
                                    onClick={() => toggleVideoPlayback(item.id)}
                                >
                                    <source src={item.secureUrl} type={`video/${item.format}`} />
                                    Your browser does not support the video tag.
                                </video>
                                <div className={styles.videoOverlay}>
                                    <button
                                        className={styles.playButton}
                                        onClick={() => toggleVideoPlayback(item.id)}
                                        aria-label="Play video"
                                    >
                                        ▶
                                    </button>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {showThumbnails && media.length > 1 && (
                <div className={styles.thumbnailStrip}>
                    {media.map((item, index) => (
                        <button
                            key={item.id}
                            className={`${styles.thumbnail} ${index === activeIndex ? styles.activeThumbnail : ''}`}
                            onClick={() => swiperRef.current?.slideTo(index)}
                        >
                            <img
                                src={item.type === 'image' ? item.secureUrl : item.thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                            />
                            {item.type === 'video' && (
                                <span className={styles.videoIcon}>▶</span>
                            )}
                        </button>
                    ))}
                </div>
            )}

            <div className={styles.mediaCounter}>
                {activeIndex + 1} / {media.length}
            </div>
        </div>
    );
};

export default MediaCarousel;
