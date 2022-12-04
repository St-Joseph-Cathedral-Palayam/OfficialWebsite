import React from 'react'
import { Gallery } from 'react-grid-gallery'
import Banner from '../components/Banner';

const images = [
  { src: "/011.JPG", thumbnail: "/011.JPG" },
  { src: "/DSC00595.jpg", thumbnail: "/DSC00595.jpg" },
  { src: "/DSC00854.JPG", thumbnail: "/DSC00854.JPG" },
  { src: "/DSC08889.JPG", thumbnail: "/DSC08889.JPG" },
  { src: "/DSC01943.JPG", thumbnail: "/DSC01943.JPG" },
  { src: "/DSC00886.JPG", thumbnail: "/DSC00886.JPG" },
  { src: "/image7.jpg", thumbnail: "/image7.jpg" },
  { src: "/image9.jpg", thumbnail: "/image9.jpg" },
  { src: "/image8.jpg", thumbnail: "/image8.jpg" },
  { src: "/image10.jpg", thumbnail: "/image10.jpg" },
];

const gallery = () => {
  return (
    <>
      <Banner title="Gallery" subtitle="This is the word of jesus and thou you shall heal" />
      <div>
        <Gallery images={images} onClick={images} />
      </div>
    </>
  )
}

export default gallery  