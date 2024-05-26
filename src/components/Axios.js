import axios from 'axios';

const serverURLs = [
    'https://ecoev1.onrender.com',
    'https://ecoev1-f6lb.onrender.com',
    'https://ecoev1-l3o4.onrender.com'
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
