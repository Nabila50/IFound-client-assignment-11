export const myProfilePromise = (email, accessToken) =>{
    
 
    return fetch(`https://lost-found-server-six.vercel.app/lost/items?email=${email}`, {
    
        headers :{
            authorization: `Bearer ${accessToken}`
        }

    })
    .then(res => res.json());
}