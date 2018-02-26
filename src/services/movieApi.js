const API_KEY = 'apikey=2cc2e403&';
const URL = 'http://www.omdbapi.com/?';

const get = url => fetch(url)
  .then(res => res.json());

export function searchApi(search){
  return get(`${URL}${API_KEY}s=${search}&type=movie`);
}


// let movieResults = [];
// export function searchApi(search){
//   do {
//   for(let i = 1; i < 100; i++) {
//     get(`${URL}${API_KEY}s=${search}&type=movie&page=${i}`).then(result => movieResults.push(result));
//     console.log(movieResults);
//   }
//   } while(results);
// }


