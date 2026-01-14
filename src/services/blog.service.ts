import api from '../lib/api';

export const blogService = {
  getAll: async () => {
    const response = await api.get('/blogs');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  },
  
  create: async (data: any) => {
    const response = await api.post('/blogs', data);
    return response.data;
  },
  
  update: async (id: string, data: any) => {
    const response = await api.put(`/blogs/${id}`, data);
    return response.data;
  },
  
  delete: async (id: string) => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  },
};
