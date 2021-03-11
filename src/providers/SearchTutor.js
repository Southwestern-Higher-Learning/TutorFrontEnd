import axios from 'axios'
import { useState } from 'react'
import {FlatList} from 'react-native'

export const SearchTutor = () => {
    return axios.get('https://tutor.jakegut.com//user/?is_tutor=true&_sort=first_name&_order=asc&_start=0&_end=20')
    .then((response) => {return response.data})
    .catch(error => console.log(error + ": Search Tutor" + axios.defaults.headers.common['Authorization']))



    
    
    // loads all tutors
    // if "name == tutorName" --> need to consider Caps 
    // loading icon
    // loads -> tutor || tutorNotFound

//    return
//     return axios(


//     )
}