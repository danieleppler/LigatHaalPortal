const Axios = require('axios');
const { setupCache } = require('axios-cache-interceptor');

const instance = Axios.create(); 
const axios = setupCache(instance);


module.exports = axios