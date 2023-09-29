const loadUsers = () =>{
    const url = `https://randomuser.me/api/`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUserData(data))
}


const displayUserData = users =>{
    const GetUserData = document.getElementById('get-user-data');
       console.log(users.results[0]);
      // clear
      GetUserData.textContent = '';



    const div = document.createElement('div');
    div.innerHTML = `
    <div class="whole-div">
    <div class="image"><img src="${users.results[0].picture.large}" alt=""></div><br>
    <h5  class="user-info">Name: ${users.results[0].name.title} ${users.results[0].name.first} ${users.results[0].name.last}</h5>
    <p  class="user-info">Gender: ${users.results[0].gender}</p>  
    <p  class="user-info">Email: ${users.results[0].email}</p>  
    <p  class="user-info">Phone: ${users.results[0].phone}</p>
    <p  class="user-info"> city: ${users.results[0].location.city}, Country: ${users.results[0].location.country}</p>
    </div>
`;
    div.classList.add('user-info');
    div.classList.add('whole-div');
    div.classList.add('image');
     GetUserData.appendChild(div);


}