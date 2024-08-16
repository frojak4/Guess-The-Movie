import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;


export const getRandomID = async () => {

  const randomNumber = Math.floor(Math.random() * 30);
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: randomNumber,
      region: 'us',
      sort_by: 'revenue.desc'
    },
    headers: {
      accept: 'application/json',
    }
  };

  try {
    const response = await axios.request(options);
    const randomNumber2 = Math.floor(Math.random() * 20);
    return response.data.results[randomNumber2].id;
    
  } catch (error) {
    console.log(error);
    return 550;
  }
}

export const getRandomCast = async (MOVIE_ID) => {
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${MOVIE_ID}/credits?api_key=${apiKey}`,
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
        }
      };
      
      try {
        const response = await axios.request(options);
        return response.data.cast;
      } catch (error) {
        console.error(error);
        return [];
      }
}

export const getRandomMovie = async (MOVIE_ID) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${apiKey}`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const movieSearch = async (value) => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`,
    params: {query: value, language: 'en-US'},
    headers: {
      accept: 'application/json',
    }
  }

  try {
    const response = await axios.request(options);
    return response.data
  } catch (error){
    console.error(error);
    return [];
  }
}
