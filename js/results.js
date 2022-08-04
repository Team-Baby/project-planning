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


let yourSongsUL = document.getElementById ('yourSongs');
let yourMoviesUL = document.getElementById ('yourMovies');
let theQuoteDiv = document.getElementById ('theQuote');
let theReferencesDiv = document.getElementById ('theReferences');


function renderHappyEmotion (){

  // let storedUserName = JSON.parse(localStorage.getItem('formName'));

  let moodOverAll = document.getElementById('moodHeader');
  let moodHeadE = document.createElement('h1');

  moodHeadE.textContent = 'Happy??';
  moodOverAll.appendChild(moodHeadE);

  let moodContentP = document.createElement('p');
  moodContentP.textContent = 'Based on your choices, you are in a happy state of mind! Everyone wants to be happy, and it\'s important to maintain that mindset. Keep making that big smile as you take a look at our recommended list of songs and movies list. You will also see some references, check them out as well!';
  moodOverAll.appendChild(moodContentP);


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
  quoteDivPElem.textContent = '"Don\'t worry. Be happy." Bobby Mcferrin';
  theQuoteDiv.appendChild(quoteDivPElem);

  //****************** added for loop to setAttribute and apply innerHTML hyper link desription */
  for(let i = 0; i < happyArray1.length; i++){
    let theReferencesDivPElem = document.createElement('a');
    theReferencesDivPElem.setAttribute('href', happyArray1[i]);
    theReferencesDivPElem.innerHTML = happyArray2[i];
    theReferencesDiv.appendChild(theReferencesDivPElem);

  }

  let happySongList = songMasterList.filter(song => song.emotion === 'Happy');
  let happyMovieList = movieMasterList.filter(movie => movie.emotion === 'Happy');
  let happyEmotionRecall = [];
  happyEmotionRecall.push(happySongList);
  happyEmotionRecall.push(happyMovieList);

  console.log(happyEmotionRecall);

  let stringEmotion = JSON.stringify(happyEmotionRecall);
  localStorage.setItem ('stringEmotionKey', stringEmotion);
}



function renderSadEmotion (){

  let moodOverAll = document.getElementById('moodHeader');
  let moodHeadE = document.createElement('h1');
  moodHeadE.textContent = 'Sad?';
  moodOverAll.appendChild(moodHeadE);
  let moodContentP = document.createElement('p');
  moodContentP.textContent = 'Based on your choices, you are in a sad state of mind! This is one of the 5 most common feelings, and it happens to everyone along with letting yourself experience that emotion. Take a deep breath and check out our recommended list of songs and movies. You will also see some references, check them out as well!';
  moodOverAll.appendChild(moodContentP);

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
  quoteDivPElem.textContent = '“Sadness gives depth. Happiness gives height. Sadness gives roots. Happiness gives branches. Happiness is like a tree going into the sky, and sadness is like the roots going down into the womb of the earth. Both are needed, and the higher a tree goes, the deeper it goes, simultaneously. The bigger the tree, the bigger will be its roots. In fact, it is always in proportion. That\'s its balance.”- Osho';
  theQuoteDiv.appendChild(quoteDivPElem);

  for(let i = 0; i < sadArray1.length; i++){
    let theReferencesDivPElem = document.createElement('a');
    theReferencesDivPElem.setAttribute('href', sadArray1[i]);
    theReferencesDivPElem.innerHTML = sadArray2[i];
    theReferencesDiv.appendChild(theReferencesDivPElem);
  }

  let sadSongList = songMasterList.filter(song => song.emotion === 'Sad');
  let sadMovieList = movieMasterList.filter(movie => movie.emotion === 'Sad');
  let sadEmotionRecall = [];
  sadEmotionRecall.push(sadSongList);
  sadEmotionRecall.push(sadMovieList);

  let stringEmotion = JSON.stringify(sadEmotionRecall);
  localStorage.setItem ('stringEmotionKey', stringEmotion);
}



function renderFrustratedEmotion (){

  let moodOverAll = document.getElementById('moodHeader');
  let moodHeadE = document.createElement('h1');
  moodHeadE.textContent = 'Frustrated?';
  moodOverAll.appendChild(moodHeadE);
  let moodContentP = document.createElement('p');
  moodContentP.textContent = 'Based on your choices, you are in a frustrated state of mind! You may be angry, like you\'re ready to run through a brick wall! As it is a very common mood, it is one of the only moods that can be changed quickly. Embrace that emotion and take a look at our recommended list of songs and movies. You will also see some references, check them out as well!';
  moodOverAll.appendChild(moodContentP);


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
  quoteDivPElem.textContent = '“Explain your anger instead of expressing it, and you\'ll find solutions instead of arguments.” - Anonymous';
  theQuoteDiv.appendChild(quoteDivPElem);

  for(let i = 0; i < frustratedArray1.length; i++){
    let theReferencesDivPElem = document.createElement('a');
    theReferencesDivPElem.setAttribute('href', frustratedArray1[i]);
    theReferencesDivPElem.innerHTML = frustratedArray2[i];
    theReferencesDiv.appendChild(theReferencesDivPElem);
  }

  let frustratedSongList = songMasterList.filter(song => song.emotion === 'Frustrated');
  let frustratedMovieList = movieMasterList.filter(movie => movie.emotion === 'Frustrated');
  let frustratedEmotionRecall = [];
  frustratedEmotionRecall.push(frustratedSongList);
  frustratedEmotionRecall.push(frustratedMovieList);

  console.log(frustratedEmotionRecall);

  let stringEmotion = JSON.stringify(frustratedEmotionRecall);
  localStorage.setItem ('stringEmotionKey', stringEmotion);
}

function renderBoredEmotion (){

  let moodOverAll = document.getElementById('moodHeader');
  let moodHeadE = document.createElement('h1');
  moodHeadE.textContent = 'Bored?';
  moodOverAll.appendChild(moodHeadE);
  let moodContentP = document.createElement('p');
  moodContentP.textContent = 'Based on your choices, you are in a bored state of mind! You are someone who may be active and enjoying things in life, but missing some fun! Take a look at our list of our recommended songs and movies. You will also see some references, check them out as well!';
  moodOverAll.appendChild(moodContentP);

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
  quoteDivPElem.textContent = '"Bored of being bored because being bored is boring." - Anonymous';
  theQuoteDiv.appendChild(quoteDivPElem);

  for(let i = 0; i < boredArray1.length; i++){
    let theReferencesDivPElem = document.createElement('a');
    theReferencesDivPElem.setAttribute('href', boredArray1[i]);
    theReferencesDivPElem.innerHTML = boredArray2[i];
    theReferencesDiv.appendChild(theReferencesDivPElem);
  }

  let boredSongList = songMasterList.filter(song => song.emotion === 'Bored');
  let boredMovieList = movieMasterList.filter(movie => movie.emotion === 'Bored');
  let boredEmotionRecall = [];
  boredEmotionRecall.push(boredSongList);
  boredEmotionRecall.push(boredMovieList);

  console.log(boredEmotionRecall);

  let stringEmotion = JSON.stringify(boredEmotionRecall);
  localStorage.setItem ('stringEmotionKey', stringEmotion);
}


function renderLonelyEmotion (){

  let moodOverAll = document.getElementById('moodHeader');
  let moodHeadE = document.createElement('h1');
  moodHeadE.textContent = 'Lonely';
  moodOverAll.appendChild(moodHeadE);
  let moodContentP = document.createElement('p');
  moodContentP.textContent = 'Based on your choices, you are in a lonely state of mind! Everyone feels lonely, even when you\'re surrounded by many others. We\'ve got your back, take a look at our list of songs and movies. You will also see some references, check them out as well!';
  moodOverAll.appendChild(moodContentP);

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
  quoteDivPElem.textContent = '“Sometimes you need to be alone. Not to be lonely, but to enjoy your free time being yourself.” —Anonymous';
  theQuoteDiv.appendChild(quoteDivPElem);

  for(let i = 0; i < lonelyArray1.length; i++){
    let theReferencesDivPElem = document.createElement('a');
    theReferencesDivPElem.setAttribute('href', lonelyArray1[i]);
    theReferencesDivPElem.innerHTML = lonelyArray2[i];
    theReferencesDiv.appendChild(theReferencesDivPElem);
  }

  let lonelySongList = songMasterList.filter(song => song.emotion === 'Lonely');
  let lonelyMovieList = movieMasterList.filter(movie => movie.emotion === 'Lonely');
  let lonelyEmotionRecall = [];
  lonelyEmotionRecall.push(lonelySongList);
  lonelyEmotionRecall.push(lonelyMovieList);

  console.log(lonelyEmotionRecall);

  let stringEmotion = JSON.stringify(lonelyEmotionRecall);
  localStorage.setItem ('stringEmotionKey', stringEmotion);
}

//**************************************** (emotion)Array1 stores link (emotion)Array2 stores hyper link description see for loop in render emotion function****************************************************/

let lonelyArray1 = ['https://psychiatry.uchicago.edu/news/17-easy-things-do-when-youre-feeling-lonely', 'https://www.verywellmind.com/loneliness-causes-effects-and-treatments-2795749', 'https://www.countryliving.com/uk/wellbeing/a32850447/virtual-groups-loneliness/'];
let lonelyArray2 = ['“17 Easy Things to Do When You’re Feeling Lonely”', '“Loneliness, causes and Health Consequences ”', '“6 virtual groups to join if you want to make friends”'];
let boredArray1 = ['https://lifeonvirginiastreet.com/50-things-to-do-when-bored-at-home/', 'https://www.futurelearn.com/info/blog/why-we-get-bored-and-what-to-do-about-it#:~:text=Boredom%20can%20be%20caused%20by,in%20line%20at%20the%20supermarket', 'https://www.newyorker.com/culture/annals-of-inquiry/what-does-boredom-do-to-us-and-for-us'];
let boredArray2 = ['“50 Things to do When Bored at Home”', '“Why we Get Bored and What to do About it”', '“What Does Boredom Do to Us—and for Us?”'];
let happyArray1 = ['https://www.theatlantic.com/health/archive/2011/06/the-pursuit-of-happiness-how-do-communities-make-us-happy/241201/', 'https://bookriot.com/books-that-make-you-happy/', 'https://getzelos.com/volunteer-opportunities/', 'https://novoslabs.com/the-best-tips-to-improve-happiness/?gclid=Cj0KCQjwuaiXBhCCARIsAKZLt3lF_t0CNIC-AoYsBU3pm6PnPDjaGGWbHyj6gdmIaveVQkeJHXPBKjoaAjPLEALw_wcB'];
let happyArray2 = ['“The Pursuit of Happiness”', '“29 Books That Make You Happy Long After The Last Page”', '“Want to Give Your Time? Check These 20 Websites for Volunteer Opportunities”', '“33 Best Tips For Maximum Happiness”'];
let sadArray1 = ['https://www.headspace.com/meditation/happiness', 'https://www.helpguide.org/articles/mental-health/cultivating-happiness.htm', 'https://www.betterhealth.vic.gov.au/health/healthyliving/its-okay-to-feel-sad'];
let sadArray2 = ['“Meditation for Happiness”', '“Cultivating Happiness”', '“it’s okay to feel sad”'];
let frustratedArray1 = ['https://www.headspace.com/meditation/how-to-relax', 'https://psychcentral.com/blog/feel-like-venting-to-a-complete-stranger-try-blahtherapy-com', 'https://mhanational.org/18-ways-cope-frustration', 'https://www.makeuseof.com/tag/7-sites-vent-anger-recover-bad-day/'];
let frustratedArray2 = ['“How to Relax”', '“Anonymous Venting: Where to Do It and How It Helps”', '“18 Ways To Cope With Frustration”', '“7 Sites To Help You Recover From A Bad Day”'];


// carries storedUserResponse from app.js page for use to determine which Emotion to render and what is saved in storage to and sent to index.html

let storedUserResponse = JSON.parse(localStorage.getItem('myStringResponse'));
let storedHistoryAns = JSON.parse(localStorage.getItem('myHistory'));

function addReferences (){

  if (storedHistoryAns >= 1){
    let divAddReferences = document.getElementById ('additionalReferences');
    let addReferencesHElem = document.createElement ('h3');
    addReferencesHElem.textContent = 'Quick Read on Paranoia and links to help: ';
    divAddReferences.appendChild(addReferencesHElem);

    let addReferencesPElem = document.createElement('a');
    addReferencesPElem.setAttribute('href', 'https://www.betterhelp.com/advice/how-to/how-to-stop-paranoia-and-anxiety/');
    addReferencesPElem.innerHTML = 'How to Stop Paranoia and Anxiety';
    // addReferencesPElem.textContent = 'P tag of REFERENCE';
    divAddReferences.appendChild(addReferencesPElem);

  } else if (storedHistoryAns >= 2){
    let divAddReferences = document.getElementById ('additionalReferences');
    let addReferencesHElem = document.createElement ('h3');
    addReferencesHElem.textContent = 'NAMI is the National Alliance on Mental Illness, the nation’s largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness.';
    divAddReferences.appendChild(addReferencesHElem);

    let addReferencesPElem = document.createElement('a');
    addReferencesPElem.setAttribute('href', 'https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Bipolar-Disorder/Overview');
    addReferencesPElem.innerHTML = 'Bi Polar Disorder Overview';
    // addReferencesPElem.textContent = 'P tag of REFERENCE';
    divAddReferences.appendChild(addReferencesPElem);

  } else if (storedHistoryAns >= 3){
    let divAddReferences = document.getElementById ('additionalReferences');
    let addReferencesHElem = document.createElement ('h3');
    addReferencesHElem.textContent = 'PTSD and CPTSD self-help guide, PTSD: National Center for PTSD Veteran';
    divAddReferences.appendChild(addReferencesHElem);

    let addReferencesPElem = document.createElement('a');
    addReferencesPElem.setAttribute('href', 'https://www.nhsinform.scot/illnesses-and-conditions/mental-health/mental-health-self-help-guides/ptsd-and-cptsd-self-help-guide');
    addReferencesPElem.innerHTML = 'PTSD and CPTSD Self Help Guides';
    // addReferencesPElem.textContent = 'P tag of REFERENCE';
    divAddReferences.appendChild(addReferencesPElem);

  } else if (storedHistoryAns >= 4){
    let divAddReferences = document.getElementById ('additionalReferences');
    let addReferencesHElem = document.createElement ('h3');
    addReferencesHElem.textContent = 'The Anxiety and Depression Association of America (ADAA) works to prevent, treat, and cure anxiety disorders and depression';
    divAddReferences.appendChild(addReferencesHElem);
    let addReferencesPElem = document.createElement('a');
    addReferencesPElem.setAttribute('href', 'https://adaa.org/');
    addReferencesPElem.innerHTML = 'ADAA Link';
    // addReferencesPElem.textContent = 'P tag of REFERENCE';
    divAddReferences.appendChild(addReferencesPElem);

  } else if (storedHistoryAns >= 5){
    let divAddReferences = document.getElementById ('additionalReferences');
    let addReferencesHElem = document.createElement ('h3');
    addReferencesHElem.textContent = 'How Can I Get Help for Depression?';
    divAddReferences.appendChild(addReferencesHElem);

    let addReferencesPElem = document.createElement('a');
    addReferencesPElem.setAttribute('href', 'https://www.healthline.com/health/depression/help-for-depression');
    addReferencesPElem.innerHTML = 'Get Help with Depression';
    // addReferencesPElem.textContent = 'P tag of REFERENCE';
    divAddReferences.appendChild(addReferencesPElem);
  }
}

if (storedUserResponse >= 6 && storedUserResponse < 12){
  renderSadEmotion();
  addReferences();
}

else if(storedUserResponse >= 12 && storedUserResponse < 19){

  renderLonelyEmotion();
  addReferences();
}
else if(storedUserResponse >= 19 && storedUserResponse < 26){
  renderBoredEmotion();
  addReferences();
}
else if(storedUserResponse >= 26 && storedUserResponse < 33){
  renderFrustratedEmotion();
  addReferences();
}
else if(storedUserResponse >= 33 && storedUserResponse< 45){
  renderHappyEmotion();
  addReferences();
}

