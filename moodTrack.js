const fetch = require("node-fetch");

const API_KEY = "8b2a414315409ea8c5d6d6a724e695f1";

async function searchTracksByMood(mood) {
  const response = await fetch(
    `https://api.musixmatch.com/ws/1.1/track.search?q=${mood}&page_size=10&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.message.body.track_list;
}

(async () => {
  const mood = prompt("Enter your mood:"); // Get mood input from user
  const tracks = await searchTracksByMood(mood);

  console.log(`Songs for ${mood} mood:`);
  for (let trackData of tracks) {
    const track = trackData.track;
    console.log(`${track.track_name} by ${track.artist_name}`);
  }
})();
