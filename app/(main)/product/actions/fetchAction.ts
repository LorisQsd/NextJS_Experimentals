"use server";
import axios from "axios";

// When we need to make POST API call but with a server aspect into a client component, we should create a server action
export default async function fetchAction() {
  const result = await axios.post("https://jsonplaceholder.typicode.com/posts");
  console.log("action");
  console.log(result.data);

  return result.data;
}
