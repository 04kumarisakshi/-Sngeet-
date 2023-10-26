const authEndpoint = "https://accounts.spotify.com/authorize";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
const clientId = "8d8f58a2783c4d77b304cc7f1df3df59";
const redirectUri = "http://localhost:5173/";
const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
function Login() {
  return (
    <div className="login">
        <img src="scr/logo.png" alt="" />
<a href={accessUrl }>Login with Spotify</a>
    </div>

  )
}

export default Login