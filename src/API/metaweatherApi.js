import axios from 'axios';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/'
export default axios.create(
  {
        // metaweather api do not support cors , the api url below from heroku is used as work around the cros errors
    baseURL:BASE_URL
  }
);