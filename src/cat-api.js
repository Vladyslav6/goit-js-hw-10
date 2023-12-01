import axios from 'axios';

export function BreedsCatFet(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notiflix.Notify.failure('Failed to fetch breeds');
      throw error;
    });
}
export function BreedsFet() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      Notiflix.Notify.failure('Failed to fetch breeds');
      throw error;
    });
}
