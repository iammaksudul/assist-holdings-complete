import api from '../lib/api';

export const galleryService = {
  getAll: async () => {
    const response = await api.get('/api/v1/gallery');
    return response.data;
  },
  
  upload: async (formData: FormData) => {
    const response = await api.post('/api/v1/gallery', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
  
  delete: async (id: string) => {
    const response = await api.delete(`/api/v1/gallery/${id}`);
    return response.data;
  },
};
