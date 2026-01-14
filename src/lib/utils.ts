export const getImageUrl = (imagePath: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://job-task-2-backend-eight.vercel.app';
  
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it starts with /images, use it directly
  if (imagePath.startsWith('/images')) {
    return `${baseUrl}${imagePath}`;
  }
  
  // If it's just a filename, add /images/ prefix
  return `${baseUrl}/images/${imagePath}`;
};

export const getApiUrl = (endpoint: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://job-task-2-backend-eight.vercel.app';
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
};
