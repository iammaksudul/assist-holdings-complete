import api from '../lib/api';

export const propertyService = {
  getAll: async () => {
    const response = await api.get('/perfections');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/perfections/${id}`);
    return response.data;
  },
  
  create: async (data: any) => {
    const response = await api.post('/perfections', data);
    return response.data;
  },
  
  update: async (id: string, data: any) => {
    const response = await api.put(`/perfections/${id}`, data);
    return response.data;
  },
  
  delete: async (id: string) => {
    const response = await api.delete(`/perfections/${id}`);
    return response.data;
  },
};
