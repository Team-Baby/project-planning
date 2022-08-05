'use strict';

// localStorage.clear();

let myForm = document.getElementById('mood-form');
let myHistory = document.getElementById('historyFromResults');
let buttonThing = document.getElementById('listenButton');
let stringEmotionRecall = JSON.parse(localStorage.getItem('stringEmotionKey'));

function addVariables(sleep, food, mood, activity, job, finance){
  let userResponse = parseInt(sleep) + parseInt(food) + parseInt(mood) + parseInt(activity) + parseInt(job) + parseInt(finance);

  return userResponse;
}

function addHistory (historyAns){
  let questionSeven = parseInt(historyAns);

  return questionSeven;
}

let userResponse;
// let userName;
let questionSeven;

preventResultsIfStorage();

function preventResultsIfStorage(){
  if (localStorage.getItem('stringEmotionKey')){
    let navBarFix = document.getElementById('unique');
    let navBarAElem = document.createElement('a');
    navBarAElem.setAttribute('href', './results.html');
    navBarAElem.innerHTML = 'Mood Playlists';
    navBarFix.appendChild(navBarAElem);

  } else {
    let navBarFix = document.getElementById('unique');
    let navBarAElem = document.createElement('a');
    navBarAElem.innerHTML = 'Mood Playlists';
    navBarFix.appendChild(navBarAElem);
  }
}

console.log(stringEmotionRecall);
// Submit form for use on Results.HTML and stored data of user Score
function handleSubmit(event){
  event.preventDefault();

  // let name = event.target.name.value;

  // let userName = event.target.name.value;
  // let stringUserName = JSON.stringifty(userName);
  // localStorage.setItem ('formName', stringUserName);

  let sleep = event.target.sleep.value;
  let food = event.target.meal.value;
  let mood = event.target.change.value;
  let activity = event.target.active.value;
  let job = event.target.job.value;
  let finance = event.target.finance.value;
  let historyAns = event.target.history.value;

  userResponse = addVariables(sleep, food, mood, activity, job, finance);
  let stringUserResponse = JSON.stringify(userResponse);
  localStorage.setItem ('myStringResponse', stringUserResponse);


  questionSeven = addHistory(historyAns);
  localStorage.setItem('myHistory', historyAns);

  location.replace('results.html');
}


// Submit for button and behavior to show Previous History
function handleSubmit2(event){
  if ( localStorage.getItem('stringEmotionKey')){
    event.preventDefault();

    let songListHisotry = document.createElement('p');
    songListHisotry.textContent = 'Song list from last time you were here:';
    myHistory.appendChild(songListHisotry);

    let mySongArticleUL = document.createElement('ul');
    myHistory.appendChild(mySongArticleUL);

    for (let i = 0; i < 5; i++){
      let mySongLI = document.createElement('li');
      mySongLI.textContent = `${stringEmotionRecall[0][i].title} by ${stringEmotionRecall[0][i].artist}. Released in ${stringEmotionRecall[0][i].releaseDate} on Album: ${stringEmotionRecall[0][i].album}`;
      myHistory.appendChild(mySongLI);
    }

    let movieListHistory = document.createElement('p');
    movieListHistory.textContent = 'Movie list from last time you were here:';
    myHistory.appendChild(movieListHistory);

    let myMovieArticleUL = document.createElement('ul');
    myHistory.appendChild(myMovieArticleUL);

    for (let i = 0; i < 5; i++){
      let myMovieLI = document.createElement('li');
      myMovieLI.textContent = `${stringEmotionRecall[1][i].title} with ${stringEmotionRecall[1][i].artist}. Released in ${stringEmotionRecall[1][i].releaseDate}. Rated: ${stringEmotionRecall[1][i].rating}`;
      myHistory.appendChild(myMovieLI);
    }

    buttonThing.removeEventListener('click', handleSubmit2);
  }
}


// ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);
buttonThing.addEventListener('click', handleSubmit2);
