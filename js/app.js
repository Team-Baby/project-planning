'use strict';

let userResponse;
let myForm = document.getElementById('mood-form');

function addVariables(sleep, food, mood, activity, job, finance){
  let userResponse = parseInt(sleep) + parseInt(food) + parseInt(mood) + parseInt(activity) + parseInt(job) + parseInt(finance);

  return userResponse;
}


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

// ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);

// Recall from history of form completion. Contains array of songs and movies for display.

let stringEmotionRecall = JSON.parse(localStorage.getItem('stringEmotionKey'));

console.log(stringEmotionRecall);

console.log(stringEmotionRecall[0]);

console.log(stringEmotionRecall[0][0]);

console.log(stringEmotionRecall[0][0].artist);
