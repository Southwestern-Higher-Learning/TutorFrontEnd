import axios from 'axios'

export const SearchTutor = () => {
    return axios.get('https://tutor.jakegut.com//user/?is_tutor=true&_sort=first_name&_order=asc&_start=0&_end=20')
    .then((response) => {return response.data})
    .catch(error => {return Promise.reject(error)})
}