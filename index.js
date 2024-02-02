import axios from 'axios'
const form=document.getElementById("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const name = form['name'].value
    const email = form['email'].value
    const password = form['password'].value

    const userData = {
        name: name,
        email: email,
        password: password
    }

    axios.post('http://localhost:3000/sign-up',userData)
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })


})