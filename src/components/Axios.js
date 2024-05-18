import axios from 'axios';

const serverURLs = [
    'https://eco-ev.onrender.com',
    'https://eco-ev-ng2x.onrender.com',
    'https://eco-ev-w0jm.onrender.com',
    'https://eco-ev-7qor.onrender.com'
  ];
  
  let currentServerIndex = 0;
  
  // Function to switch to the next server URL
  function switchToNextServer() {
    currentServerIndex = (currentServerIndex + 1) % serverURLs.length;
    axios.defaults.baseURL = serverURLs[currentServerIndex];
  }
  
  // Set the default base URL to the first server
  axios.defaults.baseURL = serverURLs[currentServerIndex];
  
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      // Modify config here, such as adding headers
      return config;
    },
    function (error) {
      // Handle request error
      return Promise.reject(error);
    }
  );
  
  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Modify response data here
      return response;
    },
    function (error) {
      // Handle response error
      // If the error indicates a server failure, switch to the next server and retry the request
      if (error.response && error.response.status >= 500) {
        switchToNextServer();
        return axios.request(error.config);
      }
      return Promise.reject(error);
    }
  );
  
  // Now you can make requests using axios.get(), axios.post(), etc., and they will use the base URL
  
