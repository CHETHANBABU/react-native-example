import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.225.53:3001/';
axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjI1MjI4Mzg5MjAsImlhdCI6MTU3Njc1ODkyMCwic3ViIjoiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5Lk1nLmFMTlZia1A3czFyb1lIaS13SEVGQ2hya2o0OGlMWF96Y3BndjJuRUIzanMifQ.m6Xh6i8RwU3AUyhe8RcMk1WfuFzk11kGvbTIUD35QC4`;

const AxiosInterceptor = () => {    
  // Add a request interceptor
  axios.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
      console.log('axios req error', error);
      
    // Do something with request error
    return Promise.reject(error);
  });

  // Add a response interceptor
  axios.interceptors.response.use((response) => {
    return response.data;
  }, (error) => {
    console.log('axios res error', error);
    return Promise.reject(error);
  });
}

export default AxiosInterceptor;