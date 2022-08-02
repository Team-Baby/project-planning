'use strict';

let songMasterList = [];
let movieMasterList = [];


// Order of Songs is IMPORTANT and will give incorrect output if changed

function SongList (emotion, title, genre, artist, releaseDate, album){
  this.emotion = emotion;
  this.title = title;
  this.genre = genre;
  this.artist = artist;
  this.releaseDate = releaseDate;
  this.album = album;

  songMasterList.push(this);
}


new SongList ('Happy', 'Good as Hell', 'Soul', 'Lizzo', 2016, 'Cuz I Love You');
new SongList ('Happy', 'Dancing Queen', 'Pop', 'ABBA', 1976, 'Arrival');
new SongList ('Happy', 'Don\'t Stop Believin\'', 'Rock', 'Journey', 1981, 'Escape');
new SongList ('Happy', 'Touch the Sky', 'Rap', 'Kayne West', 2005, 'Late Registration');
new SongList ('Happy', 'This Kiss', 'Country', 'Faith Hill', 1998, 'Faith');
new SongList ('Sad', 'Something In The Way', 'Rock', 'Nirvana', 1993, 'Nevermind');
new SongList ('Sad', 'When the Party\'s Over', 'Pop', 'Billie Elish', 2019, 'When We Fall Asleep, Where Do We Go?');
new SongList ('Sad', 'Un-Break My Heart', 'R&B', 'Toni Braxton', 1996, 'Secrets');
new SongList ('Sad', 'What Hurts the Most', 'Country', 'Rascal Flatts', 2008, 'Rascal Flats');
new SongList ('Sad', 'Balenciaga Challenge', 'Country', '6lack', 2018, 'East Atlanta Love Letter');
new SongList ('Frustrated', 'Way I Am', 'Rap', 'Eminem', 2000, 'The Marshall Mathers LP');
new SongList ('Frustrated', 'We Are Never Getting Back Together', 'Pop', 'Taylor Swift', 2012, 'Red');
new SongList ('Frustrated', 'Smells Like Teen Spirit', 'Rock', 'Nirvana' , 1991, 'Nevermind');
new SongList ('Frustrated', 'Before He Cheats', 'Country', 'Carrie Underwood', 2005, 'Some Hearts');
new SongList ('Frustrated', 'Miss Understanding', 'Jazz', 'Kamasi Washington', 2015, 'The Epic');
new SongList('Bored', 'Always Be My Baby', 'R&B', 'Mariah Carey', 1995, 'Daydream');
new SongList('Bored', 'Baby', 'Pop', 'Justin Bieber', 2010, 'My World 2.0');
new SongList('Bored', 'Said I Loved You...But I Lied', 'Jazz', 'Michael Bolton', 1993, 'The One Thing');
new SongList('Bored', 'Gucci-Gang', 'Rap', 'Lil Pump', 2017, 'Lil Pump');
new SongList('Bored', 'That Don\'t Impress Me Much', 'Country', 'Shania Twain', 1997, 'Come On Over');
new SongList('Lonely', 'Lonely', 'Rap', 'Akon', 2005, 'Trouble');
new SongList('Lonely', 'Tired of Being Alone', 'Soul', 'Al Green', 1971, 'Al Green Gets Next To You');
new SongList('Lonely', 'All by Myself', 'Soft Rock', 'Eric Carmen', 1975, 'Eric Carmen');
new SongList('Lonely', 'Here I Go Again', 'Hard Rock', 'Whitesnake', 1982, 'Saints & Sinners');
new SongList('Lonely', 'Drowning Shadows', 'Soul', 'Sam Smith', 2014, 'In The Lonely Hour');


// Order of Movie is IMPORTANT and will give incorrect output if changed

function MovieList (emotion, title, genre, star, releaseDate, rating){
  this.emotion = emotion;
  this.title = title;
  this.genre = genre;
  this.star = star;
  this.releaseDate = releaseDate;
  this.rating = rating;

  movieMasterList.push(this);
}


new MovieList ('Happy', 'The Jane Austen Book Club', 'Comedy', 'Kathy Baker', 2007, 'PG13');
new MovieList ('Happy', '500 Days of Summer', 'Romance', 'Will Smith', 2005, 'PG13');
new MovieList ('Happy', '50/50', 'Comedy', 'Joseph Gordon-Levitt', 2011, 'R');
new MovieList ('Happy', 'The Perks of Being a Wallflower', 'Romance', 'Emma Watson', 2012, 'PG13');
new MovieList ('Happy', 'Tangled', 'Animation', 'Mandy Moore', 2010, 'PG');
new MovieList ('Sad', 'Her', 'Romance', 'Joaquin Phoenix', 2013, 'R');
new MovieList ('Sad', 'Marriage Story', 'Drama', 'Scarlett Johansson', 2019, 'R');
new MovieList ('Sad', 'Titanic', 'Romance', 'Leonardo DiCaprio', 1997, 'PG13');
new MovieList ('Sad', 'Seven Pounds', 'Drama', 'Will Smith', 2008, 'PG13');
new MovieList ('Sad', 'If Beale Street Could Talk', 'Drama', 'Kiki Layne', 2018, 'R');
new MovieList ('Frustrated', '8-Mile', 'Drama', 'Eminem', 2002, 'R');
new MovieList ('Frustrated', 'Gone Baby Gone', 'Crime', 'Morgan Freeman', 2007, 'R');
new MovieList ('Frustrated', 'Gone Girl', 'Mystery', 'Ben Affleck', 2014, 'R');
new MovieList ('Frustrated', 'Daredevil', 'Action', 'Jennifer Garner', 2003, 'PG13');
new MovieList ('Frustrated', 'Do The Right Thing', 'Drama', 'Spike Lee', 1989, 'R');
new MovieList ('Bored', 'Batman & Robin', 'Action', 'George Clooney', 1997, 'PG13');
new MovieList ('Bored', 'The English Patient', 'Romance', 'Ralph Fiennes', 1996, 'R');
new MovieList ('Bored', 'Meet Joe Black', 'Romance', 'Anthony Hopkins', 1998, 'PG13');
new MovieList ('Bored', 'Vanilla Sky', 'Thriller', 'Tom Cruise', 2001, 'R');
new MovieList ('Bored', 'The Artist', 'Drama', 'Jean Dujardin', 2011, 'PG13');
new MovieList ('Lonely', 'Joker', 'Drama', 'Joaquin Phoenix', 2019, 'R');
new MovieList ('Lonely', 'Where The Wild Things Are', 'Drama', 'Max Records', 2009, 'PG');
new MovieList ('Lonely', 'The Martian', 'Drama', 'Matt Damon', 2015, 'PG13');
new MovieList ('Lonely', 'Taxi Driver', 'Drama', 'Robert De Niro', 1976, 'R');
new MovieList ('Lonely', 'Gravity', 'Drama', 'Sandra Bullock', 2013, 'PG13');


let myForm = document.getElementById('mood-form');
let yourSongsUL = document.getElementById ('yourSongs');
let yourMoviesUL = document.getElementById ('yourMovies');
let theQuoteDiv = document.getElementById ('theQuote');
let theReferencesDiv = document.getElementById ('theReferences');


function renderHappyEmotion (){

  for(let i = 0; i<5; i++) {
    let songLIElem = document.createElement('li');
    songLIElem.textContent = `${songMasterList[i].title} by ${songMasterList[i].artist}. Released in ${songMasterList[i].releaseDate} on Album: ${songMasterList[i].album}`;
    yourSongsUL.appendChild(songLIElem);
  }

  for(let i = 0; i<5; i++) {
    let movieLIElem = document.createElement('li');
    movieLIElem.textContent = `${movieMasterList[i].title} with ${movieMasterList[i].star}. Released in ${movieMasterList[i].releaseDate} Rated: ${movieMasterList[i].rating}`;
    yourMoviesUL.appendChild(movieLIElem);
  }

  let quoteDivPElem = document.createElement('p');
  quoteDivPElem.textContent = 'Happy Happy Joy Joy - fill in more info';
  theQuoteDiv.appendChild(quoteDivPElem);

  let theReferencesDivPElem = document.createElement('p');
  theReferencesDivPElem.textContent = 'These are the additonal resources for the emotion: HAPPY';
  theReferencesDiv.appendChild(theReferencesDivPElem);
}

// renderSadEmotion();

function renderSadEmotion (){

  for(let i = 5; i<10; i++) {
    let songLIElem = document.createElement('li');
    songLIElem.textContent = `${songMasterList[i].title} by ${songMasterList[i].artist}. Released in ${songMasterList[i].releaseDate} on Album: ${songMasterList[i].album}`;
    yourSongsUL.appendChild(songLIElem);
  }

  for(let i = 5; i<10; i++) {
    let movieLIElem = document.createElement('li');
    movieLIElem.textContent = `${movieMasterList[i].title} with ${movieMasterList[i].star}. Released in ${movieMasterList[i].releaseDate} Rated: ${movieMasterList[i].rating}`;
    yourMoviesUL.appendChild(movieLIElem);
  }

  let quoteDivPElem = document.createElement('p');
  quoteDivPElem.textContent = 'Sad Sad Sad Sad - fill in more info';
  theQuoteDiv.appendChild(quoteDivPElem);

  let theReferencesDivPElem = document.createElement('p');
  theReferencesDivPElem.textContent = 'These are the additonal resources for the emotion: SAD ';
  theReferencesDiv.appendChild(theReferencesDivPElem);
}

function renderFrustratedEmotion (){

  for(let i = 10; i<15; i++) {
    let songLIElem = document.createElement('li');
    songLIElem.textContent = `${songMasterList[i].title} by ${songMasterList[i].artist}. Released in ${songMasterList[i].releaseDate} on Album: ${songMasterList[i].album}`;
    yourSongsUL.appendChild(songLIElem);
  }

  for(let i = 10; i<15; i++) {
    let movieLIElem = document.createElement('li');
    movieLIElem.textContent = `${movieMasterList[i].title} with ${movieMasterList[i].star}. Released in ${movieMasterList[i].releaseDate} Rated: ${movieMasterList[i].rating}`;
    yourMoviesUL.appendChild(movieLIElem);
  }

  let quoteDivPElem = document.createElement('p');
  quoteDivPElem.textContent = 'Frustrated Frustrated Frustrated - fill in more info';
  theQuoteDiv.appendChild(quoteDivPElem);

  let theReferencesDivPElem = document.createElement('p');
  theReferencesDivPElem.textContent = 'These are the additonal resources for the emotion: FRUSTRATED ';
  theReferencesDiv.appendChild(theReferencesDivPElem);
}

function renderBoredEmotion (){

  for(let i = 15; i<20; i++) {
    let songLIElem = document.createElement('li');
    songLIElem.textContent = `${songMasterList[i].title} by ${songMasterList[i].artist}. Released in ${songMasterList[i].releaseDate} on Album: ${songMasterList[i].album}`;
    yourSongsUL.appendChild(songLIElem);
  }

  for(let i = 15; i<20; i++) {
    let movieLIElem = document.createElement('li');
    movieLIElem.textContent = `${movieMasterList[i].title} with ${movieMasterList[i].star}. Released in ${movieMasterList[i].releaseDate} Rated: ${movieMasterList[i].rating}`;
    yourMoviesUL.appendChild(movieLIElem);
  }

  let quoteDivPElem = document.createElement('p');
  quoteDivPElem.textContent = 'Bored Bored Bored - fill in more info';
  theQuoteDiv.appendChild(quoteDivPElem);

  let theReferencesDivPElem = document.createElement('p');
  theReferencesDivPElem.textContent = 'These are the additonal resources for the emotion: BORED ';
  theReferencesDiv.appendChild(theReferencesDivPElem);
}

function renderLonelyEmotion (){

  for(let i = 20; i<25; i++) {
    let songLIElem = document.createElement('li');
    songLIElem.textContent = `${songMasterList[i].title} by ${songMasterList[i].artist}. Released in ${songMasterList[i].releaseDate} on Album: ${songMasterList[i].album}`;
    yourSongsUL.appendChild(songLIElem);
  }

  for(let i = 20; i<25; i++) {
    let movieLIElem = document.createElement('li');
    movieLIElem.textContent = `${movieMasterList[i].title} with ${movieMasterList[i].star}. Released in ${movieMasterList[i].releaseDate} Rated: ${movieMasterList[i].rating}`;
    yourMoviesUL.appendChild(movieLIElem);
  }

  let quoteDivPElem = document.createElement('p');
  quoteDivPElem.textContent = 'Lonely Lonely Lonely - fill in more info';
  theQuoteDiv.appendChild(quoteDivPElem);

  let theReferencesDivPElem = document.createElement('p');
  theReferencesDivPElem.textContent = 'These are the additonal resources for the emotion: LONELY ';
  theReferencesDiv.appendChild(theReferencesDivPElem);
}



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
  // let calMood = 0;

  // Sad Scenario
  if (userResponse >= 6 && userResponse < 12){
    // calMood = 1;
    console.log(songMasterList[5]);
    renderSadEmotion();
  }
  // Lonely
  else if(userResponse >= 13 && userResponse < 19){
    // calMood = 2;
    console.log(songMasterList[20]);
    renderLonelyEmotion();
  }
  // Bored
  else if(userResponse >= 20 && userResponse < 26){
    // calMood = 3;
    console.log(songMasterList[15]);
    renderBoredEmotion();
  }
  // Frustrated
  else if(userResponse >= 27 && userResponse < 33){
    // calMood = 4;
    console.log(songMasterList[10]);
    renderFrustratedEmotion();
  }
  // Happy
  else if(userResponse >= 31 && userResponse< 36){
    // calMood = 5;
    console.log(songMasterList[0]);
    renderHappyEmotion();
  }
  // return calMood;
}

// renderHappyEmotion();

// ATTACH MY EVENT LISTENER
myForm.addEventListener('submit', handleSubmit);
