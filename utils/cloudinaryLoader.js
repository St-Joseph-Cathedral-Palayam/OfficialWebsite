export default function cloudinaryLoader({ src, width, quality }) {
  if (src.startsWith('http')) {
    return src;
  }

  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  
  // Use the environment variable for cloud name
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dfpw44vf8';
  
  // Just use the src as the publicId. 
  // It should match exactly the public_id in Cloudinary (e.g. 'church-gallery/image_name' or just 'image_name')
  let publicId = src.startsWith('/') ? src.substring(1) : src;
  
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(',')}/${publicId}`;
}
