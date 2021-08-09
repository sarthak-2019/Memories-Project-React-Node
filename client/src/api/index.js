import axios from "axios";

const url = "http://localhost:9000/posts";

export const fetchPosts = () => axios.get(url);
