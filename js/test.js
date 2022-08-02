'use strict';

// List of Emotions and Score 
// let Sad = (6-12)
// let Lonely = (13-19)
// let Bored = (20-26)
// let Frustrated = (27-33)
// let Happy = (34-42)



// let userResponse = total amount chosen  
// Simple Loop to match the response: After they click submit:



// Grab the element I want to listen to

let myForm = document.getElementById('mood-form');



function handleSubmit(event){
  event.preventDefault();

  let name = event.target.Name.value;
  console.log(name);

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

  // let history = event.target.history.value;
  // console.log(history);

  // Call the adding function
  addVariables(sleep, food, mood, activity, job, finance);

  myForm.reset();
}

// Function that adds all of the values:
function addVariables(sleep, food, mood, activity, job, finance)
{
  let userResponse = parseInt(sleep) + parseInt(food) + parseInt(mood) + parseInt(activity) + parseInt(job) + parseInt(finance);

  console.log(userResponse);
  let calMood = 0;

  // Sad Scenario
  if (userResponse >= 6 && userResponse < 12){
    calMood = 1;
  }
  // Lonely
  else if(userResponse >= 13 && userResponse < 19){
    calMood = 2;
  }
  // Bored
  else if(userResponse >= 20 && userResponse < 26){
    calMood = 3;
  }
  // Frustrated
  else if(userResponse >= 27 && userResponse < 33){
    calMood = 4;
  }
  // Happy
  else if(userResponse >= 31 && userResponse< 36){
    calMood = 5;
  }
  return calMood;
}



// ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);
