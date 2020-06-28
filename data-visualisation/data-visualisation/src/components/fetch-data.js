import axios from 'axios';

export const getData = (url, params) => {
  if (!params) {
    return axios.get(url).then(({ data }) => {
      return data;
    });
  } else {
    return axios
      .get(url, {params})
      .then(({ data }) => {
        return data;
      });
  }
};
