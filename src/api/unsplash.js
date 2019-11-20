import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID b0d6a6868459f72c5d88ba99fe3d25fb4e8c831fec2fb57952dd56284dcb1682'
    }
});