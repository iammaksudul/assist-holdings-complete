import api from '../lib/api';

export const blogService = {
  getAll: async () => {
    const response = await api.get('/api/v1/blogs');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/api/v1/blogs/${id}`);
    return response.data;
  },
  
  create: async (data: any) => {
    const response = await api.post('/api/v1/blogs', data);
    return response.data;
  },
  
  update: async (id: string, data: any) => {
    const response = await api.put(`/api/v1/blogs/${id}`, data);
    return response.data;
  },
  
  delete: async (id: string) => {
    const response = await api.delete(`/api/v1/blogs/${id}`);
    return response.data;
  },
};
