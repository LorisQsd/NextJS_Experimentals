"use server";
import { getContentById } from "./contentful/getContent";

export default async function ErrorPageAction() {
  const result =  await getContentById("4paiMUzolsqHBIhT52LRlB");
  
  return result;
}
