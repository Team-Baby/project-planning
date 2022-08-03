'use strict';

let myForm = document.getElementById('mood-form');



function addVariables(sleep, food, mood, activity, job, finance){
  let userResponse = parseInt(sleep) + parseInt(food) + parseInt(mood) + parseInt(activity) + parseInt(job) + parseInt(finance);

  return userResponse;
}
let userResponse;

function handleSubmit(event){
  event.preventDefault();

  // let name = event.target.Name.value;

  let sleep = event.target.sleep.value;
  let food = event.target.meal.value;
  let mood = event.target.change.value;
  let activity = event.target.active.value;
  let job = event.target.job.value;
  let finance = event.target.finance.value;

  userResponse = addVariables(sleep, food, mood, activity, job, finance);

  let stringUserResponse = JSON.stringify(userResponse);
  localStorage.setItem ('myStringResponse', stringUserResponse);

  location.replace('results.html');
}


let stringEmotionRecall = JSON.parse(localStorage.getItem('stringEmotionKey'));


let myHistory = document.getElementById('historyFromResults');


function handleSubmit2(event){
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


// ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);


let buttonThing = document.getElementById('listenButton');

buttonThing.addEventListener('click', handleSubmit2);



// buttonThing.addEventListener('click', function handleSubmit2(event){
//   event.preventDefault();

//   let songListHisotry = document.createElement('p');
//   songListHisotry.textContent = 'Song list from last time you were here:';
//   myHistory.appendChild(songListHisotry);

//   let mySongArticleUL = document.createElement('ul');
//   myHistory.appendChild(mySongArticleUL);

//   for (let i = 0; i < 5; i++){
//     let mySongLI = document.createElement('li');
//     mySongLI.textContent = `${stringEmotionRecall[0][i].title} by ${stringEmotionRecall[0][i].artist}. Released in ${stringEmotionRecall[0][i].releaseDate} on Album: ${stringEmotionRecall[0][i].album}`;
//     myHistory.appendChild(mySongLI);
//   }

//   let movieListHistory = document.createElement('p');
//   movieListHistory.textContent = 'Movie list from last time you were here:';
//   myHistory.appendChild(movieListHistory);

//   let myMovieArticleUL = document.createElement('ul');
//   myHistory.appendChild(myMovieArticleUL);

//   for (let i = 0; i < 5; i++){
//     let myMovieLI = document.createElement('li');
//     myMovieLI.textContent = `${stringEmotionRecall[1][i].title} with ${stringEmotionRecall[1][i].artist}. Released in ${stringEmotionRecall[1][i].releaseDate}. Rated: ${stringEmotionRecall[1][i].rating}`;
//     myHistory.appendChild(myMovieLI);
//   }

// }, {once: true});



console.log(stringEmotionRecall);

console.log(stringEmotionRecall[0]);

console.log(stringEmotionRecall[0][0]);

console.log(stringEmotionRecall[0][1].title);

