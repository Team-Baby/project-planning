
let emotionMasterList = [];
let songMasterList = [];

function emotionResult (){
  if (questionListResult > 15){
    return emotionMasterList[0];
  } if else (questionListResult > 10){
    return emotionMasterList[1];
  } if else (questionListResult > 7){
    return emotionMasterList[2];
  } if else (questionListResult > 4){
    return emotionMasterList[3];
  } else {
    return emotionMasterList[4];
  }
}

function EmotionMasterList (emotion, songList, movieList, quote, additionalResources){
  this.emotion = emotion;
  this.songList = [];
  this.movieList = [];

  
  this.quote = quote;
  this.additionalResources = additionalResources;
}



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
new SongList ('Happy', 'Don\'t Stop Believin\'', 'Rock', 'Journey', 1981, 'Escape')
new SongList ('Happy', 'Touch the Sky', 'Rap', 'Kayne West', 2005, 'Late Registration');
new SongList ('Happy', 'This Kiss', 'Country', 'Faith Hill', 1998, 'Faith');

new SongList ('Sad', 'Something In The Way', 'Rock', 'Nirvana' 1993, 'Nevermind');
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


function MovieList (title, genre, artist, releaseDate, album){
  this.title = title;
  this.genre = genre;
  this.artist = artist;
  this.releaseDate = releaseDate;
  this.album = album;

  movieMasterList.push(this);
}

