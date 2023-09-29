const loadPlayes = () =>{
const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Danny%20Welbeck`
fetch(url)
.then(res => res.json())
.then(data => displayPlayers(data));
}

const displayPlayers = players =>{
    const PlayerDtails = document.getElementById('player-detail');
    PlayerDtails.textContent = '';
    console.log(players);
   const div = document.createElement('div');
   div.innerHTML = `
   <h4>Name: ${players.player[0].strPlayer
   }</h4>
   <h4>Player Number: ${players.player[0].strNumber
   }</h4>
   <h4>Nationality: ${players.player[0].strNationality

   }</h4>
   <h4>Position: ${players.player[0].strPosition
   }</h4>
   <h4>Wright: ${players.player[0].strWeight
   }</h4>
   
   `;
   PlayerDtails.appendChild(div);
 
}
