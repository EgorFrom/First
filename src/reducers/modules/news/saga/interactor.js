import axios from 'react-native-axios';
const url = 'https://newsapi.org/v2/top-headlines';

export const fetchNewsRequest = () =>
  axios
    .get(url, {
      params: {
        country: 'ru',
        apiKey: '48f1c58083ef41e88b7a46bdb2f7d738',
      },
    })
    .then(function(response) {
      console.log('responseresponse', response);
    });
