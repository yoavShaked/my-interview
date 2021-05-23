import {API_KEY, API_URL} from './constants';

export const debounce = (func, timeout = 300) =>{
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export const fetchSerachResult = async (query) => {
  const results = await fetch(
    `${API_URL}?api_key=${API_KEY}&q=${query}&limit=9`
  );
  const data = await results.json();

  return data;
};
