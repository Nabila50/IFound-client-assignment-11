export const myProfilePromise = (email, accessToken) =>{
    
 
    return fetch(`http://localhost:3000/lost/items?email=${email}`, {
    
        headers :{
            authorization: `Bearer ${accessToken}`
        }

    })
    .then(res => res.json());
}