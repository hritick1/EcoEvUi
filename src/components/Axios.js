import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const serverURLs = [
    'https://eco-ev.onrender.com',
    'https://eco-ev-ng2x.onrender.com',
    'https://eco-ev-w0jm.onrender.com',
    'https://eco-ev-7qor.onrender.com'
    
];


let currentServerIndex = 0;


// Create a new Axios instance with a custom config
const axiosInstance = axios.create({
  timeout: 5000, // Set a timeout of 5 seconds
});

// Set the default URL
axiosInstance.defaults.baseURL = serverURLs[currentServerIndex];


// Define a function to switch to the fallback URL
function switchToFallbackURL() {
    currentServerIndex = (currentServerIndex + 1) % serverURLs.length;
    axiosInstance.defaults.baseURL = serverURLs[currentServerIndex];
}

// Define a function to handle errors
function handleError(error) {
  if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
    // If the request timed out, switch to the fallback URL
    switchToFallbackURL();
  } else if (error.response && error.response.status === 500) {
    // If the server returned a 500 error, switch to the fallback URL
    switchToFallbackURL();
  }
}

// Define a function to make a request
async function makeRequest() {
  try {
    const response = await axiosInstance.get('/getDue/Mohan');
    console.log(response.data);
  } catch (error) {
    handleError(error);
  }
}

// Call the function to make a request
makeRequest();