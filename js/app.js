
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
new SongList('Bored', 'Baby', 'Pop', 'Justin Bieber', 2010, 'My World 2.0');
new SongList('Bored', 'Said I Loved You...But I Lied', 'Jazz', 'Michael Bolton', 1993, 'The One Thing');
new SongList('Bored', 'Gucci-Gang', 'Rap', 'Lil Pump', 2017, 'Lil Pump');
new SongList('Bored', 'That Don\'t Impress Me Much', 'Country', 'Shania Twain', 1997, 'Come On Over');

new SongList('Lonely', 'Lonely', 'Rap', 'Akon', 2005, 'Trouble');
new SongList('Lonely', 'Tired of Being Alone', 'Soul', 'Al Green', 1971, 'Al Green Gets Next To You');
new SongList('Lonely', 'All by Myself', 'Soft Rock', 'Eric Carmen', 1975, 'Eric Carmen');
new SongList('Lonely', 'Here I Go Again', 'Hard Rock', 'Whitesnake', 1982, 'Saints & Sinners');
new SongList('Lonely', 'Drowning Shadows', 'Soul', 'Sam Smith', 2014, 'In The Lonely Hour');




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