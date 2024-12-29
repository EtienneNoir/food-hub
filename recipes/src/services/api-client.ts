import axios from "axios";

export default axios.create({
  baseURL:
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=72f000d2399d43a6ab19469049be3e91",
});
