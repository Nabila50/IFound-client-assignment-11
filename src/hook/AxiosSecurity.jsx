import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://lost-found-server-six.vercel.app'
})

const AxiosSecurity = () => {

    const {user, signOutUser} = use(AuthContext);

    axiosInstance.interceptors.request.use(config =>{
          const token =  user.getIdToken();
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    });

    // response Interceptor

    axiosInstance.interceptors.response.use(response =>{
        return response;
    }, error => {
        if(error.status === 401 || error.status === 403){
            signOutUser()
            .then(()=>{
                console.log('sign out user for 401 status code')
            })
        }
        return Promise.reject(error)
    })

  return axiosInstance;
};

export default AxiosSecurity;