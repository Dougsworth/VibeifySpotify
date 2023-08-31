import requests

API_KEY = "8b2a414315409ea8c5d6d6a724e695f1"
BASE_URL = "https://api.musixmatch.com/ws/1.1/"


def search_tracks_by_mood(mood):
    endpoint = f"{BASE_URL}track.search"
    params = {
        "q": mood,
        "page_size": 100,  # Set to 100 to retrieve maximum songs
        "apikey": API_KEY
    }
    response = requests.get(endpoint, params=params)
    data = response.json()
    return data['message']['body']['track_list']


def main():
    mood = input("Enter your mood: ")
    tracks = search_tracks_by_mood(mood)

    print(f"Songs for {mood} mood:")
    for track_data in tracks:
        track = track_data['track']
        print(f"{track['track_name']} by {track['artist_name']}")


if __name__ == "__main__":
    main()
