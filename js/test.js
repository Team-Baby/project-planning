'use strict';





// Grab the element I want to listen to

let myForm = document.getElementById('mood-form');



function handleSubmit(event){
  event.preventDefault();

  let name = event.target.userName.value;
  console.log(name);

  let sleep = event.target.userSleep.value;
  console.log(sleep);

  let food = event.target.userFood.value;
  console.log(food);

  let mood = event.target.userMood.value;
  console.log(mood);

  let activity = event.target.userActivity.value;
  console.log(activity);

  let job = event.target.userJob.value;
  console.log(job);

  let finance = event.target.userFinance.value;
  console.log(finance);

  let history = event.target.userHistory;
  console.log(history);

  myForm.reset();
}



// ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);
