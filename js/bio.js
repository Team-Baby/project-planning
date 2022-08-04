JSON.parse(localStorage.getItem('stringEmotionKey'));

preventResultsIfStoreage();

function preventResultsIfStoreage(){
  if (localStorage.getItem('stringEmotionKey')){
    let navBarFix = document.getElementById('unique2');
    let navBarAElem = document.createElement('a');
    navBarAElem.setAttribute('href', '/results.html');
    navBarAElem.innerHTML = 'Mood Playlists';
    navBarFix.appendChild(navBarAElem);

  } else {
    let navBarFix = document.getElementById('unique2');
    let navBarAElem = document.createElement('a');
    navBarAElem.innerHTML = 'Mood Playlists';
    navBarFix.appendChild(navBarAElem);
  }
}

