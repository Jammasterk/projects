
const div = document.querySelector('#response-container')
const API_KEY = "570a4a103a9fa511b252c7fac1bbc995";
const con = 0

search.addEventListener('click', function(e){
  e.preventDefault()
  const song = document.querySelector('#song').value
  const artist = document.querySelector('#artist').value

  // const total = song + artist;
  // axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${song}&artist=${artist}&app_id=${API_KEY}`)
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${song}&app_id=${API_KEY}`
    )
    .then((res) => {
      console.log(res.data);
      for (let index = 24; index < [con].length; index++) {
        div.innerHTML += `
        <div class="body">
        <img class="album-cover"src=${res.data.data[con].album.cover_medium} alt="album cover"/>
       <div class="info">
       <h2>Song: ${res.data.data[con].title}</h2>
       <h5>Artist: ${res.data.data[con].artist.name}<h5>
       <audio controls src=${res.data.data[con].preview}></audio>
       <br/>
       <a class="listen" href=${res.data.data[con].link} target="_blank">Play on Deezer</a>
       <a class="share" href=${res.data.data[con].share} target="_blank">Share with friends</a>
       <p>Album: ${res.data.data[con].album.title}</p>
       </div>
       </div>
       `;
        con = con+1;
      }
    })
    .catch((err) => {});
  })
  
  // <p>${res.data.data[con].id}</p>

