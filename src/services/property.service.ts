import api from '../lib/api';

export const propertyService = {
  getAll: async () => {
    const response = await api.get('/api/v1/perfections');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/api/v1/perfections/${id}`);
    return response.data;
  },
  
  create: async (data: any) => {
    const response = await api.post('/api/v1/perfections', data);
    return response.data;
  },
  
  update: async (id: string, data: any) => {
    const response = await api.put(`/api/v1/perfections/${id}`, data);
    return response.data;
  },
  
  delete: async (id: string) => {
    const response = await api.delete(`/api/v1/perfections/${id}`);
    return response.data;
  },
};
