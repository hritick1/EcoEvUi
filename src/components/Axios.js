import axios from 'axios';

const serverURLs = [
    'https://ecoevapp.onrender.com',
    'https://ecoevapp-l42j.onrender.com',
    'https://ecoevapp-0yzh.onrender.com'
];

let currentServerIndex = 0;

axios.defaults.baseURL = serverURLs[currentServerIndex];


async function tryfxn() {
    for (let i = 0; i < serverURLs.length; i++) {
        try {
            axios.defaults.baseURL = serverURLs[i];
            const response = await axios.get('/getDue/Mohan');
            if (response.status === 200) {
                return response.data; // Return the response data if request is successful
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }
    // If no server responded successfully, return null or handle appropriately
    return null;
}

export default tryfxn;
