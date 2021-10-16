import axios from "axios";

let URL;
if (process.env.NODE_ENV === "production") {
    URL = "https://uncle-park.herokuapp.com/api";
} else {
    URL = "http://localhost:5000/api/";
}

export default axios.create({
    baseURL: URL,
});