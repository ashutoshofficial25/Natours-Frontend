import Axios from "axios";

// Next we make an 'instance' of it
const instance = Axios.create({
  // .. where we make our configurations
  baseURL: "http://localhost:5000/api/v1",
});

instance.defaults.headers.post["Content-Type"] = "application/json";
//instance.defaults.withCredentials = true;

// Also add/ configure interceptors && all the other cool stuff
export default instance;
