import axios, { Axios } from 'axios';

const queryString= (window.location.search)
const urlParms= new URLSearchParams(queryString);
const userId= urlParms.get('id')
console.log(userId)

axios.get('http://localhost:3000/users/'+userId)
.then(response=>{
    const user= (response.data)

    const name=document.getElementById('name')
    const email=document.getElementById('email')

    name.innerHTML=user.name
    email.innerHTML=user.email
})
.catch(error=>{
    console.log(error)
})