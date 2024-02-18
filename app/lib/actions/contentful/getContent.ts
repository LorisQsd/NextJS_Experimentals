import contentfulClient from "./client";

export async function getContentById(entryId: string) {
  try {
    const content = await contentfulClient.getEntry(entryId);

    return content;
  } catch (e) {
    console.error(e);

    throw new Error("An error has occured");
  }
}

export async function getContentByType(typeId: string) {
    try {
      const content = await contentfulClient.getContentType(typeId);
  
      return content;
    } catch (e) {
      console.error(e);
  
      throw new Error("An error has occured");
    }
  }
  