import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serverURLs = [
    'https://eco-ev-ng2x.onrender.com',
    'https://eco-ev-w0jm.onrender.com',
    'https://eco-ev-7qor.onrender.com',
    'https://eco-ev.onrender.com'
];

let currentServerIndex = 0;

// Function to switch to the next server URL
function switchToNextServer() {
    currentServerIndex = (currentServerIndex + 1) % serverURLs.length;
    axios.defaults.baseURL = serverURLs[currentServerIndex];
}

// Set the default base URL to the first server
axios.defaults.baseURL = serverURLs[currentServerIndex];

// Function to get data from the /getDue/Mohan endpoint
async function getData() {
    try {
        const response = await axios.get('/getDue/Mohan');
        return response.data; // Return data if successful
    } catch (error) {
        // If the error indicates a server failure or connection refused, switch to the next server and retry the request
        if (error.response && (error.response.status === 503 || error.code === 'ECONNREFUSED')) {
            switchToNextServer();
            return getData(); // Retry with the next server
        }
        throw error;
    }
}

// Function to handle getting data from servers
async function fetchDataFromServers() {
    for (const server of serverURLs) {
        axios.defaults.baseURL = server;
        try {
            const data = await getData();
            return data;
        } catch (error) {
            console.error(`Error fetching data from ${server}:`, error);
        }
    }
    throw new Error('All servers are unavailable');
}

// Usage
fetchDataFromServers()
    .then(data => {
        // Process data here
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);
        toast.error('All servers are down');
        // Handle the error accordingly
    });
