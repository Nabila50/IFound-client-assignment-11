import React from 'react';
import AxiosSecurity from '../hook/AxiosSecurity';

const useApplicationApi = () => {
    const axiosSecure = AxiosSecurity();

    const myProfilePromise = email =>{
        return axiosSecure.get(`/lost/items?email=${email}`)
        .then(res => res.data);
    }
  return {
     myProfilePromise

  };
};

export default useApplicationApi;