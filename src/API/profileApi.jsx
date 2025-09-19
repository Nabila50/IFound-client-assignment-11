export const myProfilePromise = email =>{
    return fetch(`http://localhost:3000/lost?email=${email}`).then(res => res.json())
}