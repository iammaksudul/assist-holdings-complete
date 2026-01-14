import api from '../lib/api';

export const contactService = {
  submit: async (data: any) => {
    const response = await api.post('/enquiry', data);
    return response.data;
  },
};

export const scheduleService = {
  create: async (data: any) => {
    const response = await api.post('/schedule', data);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/schedule');
    return response.data;
  },
};
