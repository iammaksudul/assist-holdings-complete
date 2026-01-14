import api from '../lib/api';

export const contactService = {
  submit: async (data: any) => {
    const response = await api.post('/api/v1/enquiry', data);
    return response.data;
  },
};

export const scheduleService = {
  create: async (data: any) => {
    const response = await api.post('/api/v1/schedule', data);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/api/v1/schedule');
    return response.data;
  },
};
