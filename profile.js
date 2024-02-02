import axios from 'axios';

const userslist=document.getElementById('userslist')
axios.get('http://localhost:3000/users')
.then(response =>{
    const users= (response.data)
    for(let i=0;i<users.length;i++){
        console.log(users[i])
        const li=document.createElement('li')
        li.classList.add('user')
        
        li.innerHTML = `
           <img src="https://sp-images.summitpost.org/947006.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=d877834568578388ef13b78e3cd7ba2b" alt=""/>
           <a href="/profiles.html?id=${users[i]._id}"><h2>${users[i].name}</h2></a>
        `
        userslist.append(li)


    }
})
.catch(error =>{
    console.log(error)
})