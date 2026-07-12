import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProjects = async () => {
    const response = await api.get('/projects');
    return response.data;
};

export const getGithubStats = async () => {
    const response = await api.get('/github');
    return response.data;
};

export const sendContactMessage = async (data) => {
    const response = await api.post('/contact', data);
    return response.data;
};

export default api;
