'use strict';

let myForm = document.getElementById('mood-form');


function addVariables(sleep, food, mood, activity, job, finance){
  let userResponse = parseInt(sleep) + parseInt(food) + parseInt(mood) + parseInt(activity) + parseInt(job) + parseInt(finance);

  return userResponse;
}


let userResponse ;

function handleSubmit(event){
  event.preventDefault();

  // let name = event.target.Name.value;
  // console.log(name);

  let sleep = event.target.sleep.value;
  console.log(sleep);

  let food = event.target.meal.value;
  console.log(food);

  let mood = event.target.change.value;
  console.log(mood);

  let activity = event.target.active.value;
  console.log(activity);

  let job = event.target.job.value;
  console.log(job);

  let finance = event.target.finance.value;
  console.log(finance);

  userResponse = addVariables(sleep, food, mood, activity, job, finance);

  let stringUserResponse = JSON.stringify(userResponse);
  localStorage.setItem('myString', stringUserResponse);


  location.replace('results.html');

  // let history = event.target.history.value;
  // console.log(history);

  // myForm.reset();
}

// ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);
