import { createClient } from "contentful";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const contentfulClient = createClient({
  space: CONTENTFUL_SPACE_ID as string,
  accessToken: CONTENTFUL_ACCESS_TOKEN as string,
});

export default contentfulClient;