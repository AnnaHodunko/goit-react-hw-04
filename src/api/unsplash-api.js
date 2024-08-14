import axios from "axios";

const ACCESS_KEY = "yYfZe7KlPIAX4Lyv5CCGlYe3SVnsTjWAGje4yQ7aC0M";

const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: ACCESS_KEY,
        query,
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};

export default fetchImages;
