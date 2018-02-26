const API_KEY = 'apikey=2cc2e403&';
const URL = 'http://www.omdbapi.com/?';

const get = url => fetch(url)
  .then(res => res.json());

export function searchApi(search, page){
  return get(`${URL}${API_KEY}s=${search}&type=movie&page=${page}`);
}


// get(`${URL}${API_KEY}s=${search}&type=movie&page=${i}`).then


