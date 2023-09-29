const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=12')
.then(res => res.json())
.then(data => displayBuddies(data))
}
loadBuddies();


const displayBuddies = data => {
    const buddieS = data.results;
    const buddiesDiv = document.getElementById('buddiesdiv');
   for(const buddy of buddieS){
    const p = document.createElement('p');
     p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} `;
     buddiesDiv.appendChild(p);
   }
}