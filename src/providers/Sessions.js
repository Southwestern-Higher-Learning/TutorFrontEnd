import axios from 'axios'

/**
 * takes a user id and returns that users next weeks worth of sessions
 */
export const Sessions = (user_id)=>{
    const date =  new Date
    const endDate = new Date
    endDate.setDate(endDate.getDate()+7)
    return axios({
        method: 'GET',
        url: `https://tutor.jakegut.com/user/${user_id}/schedule?time_min=${date.toISOString()}&time_max=${endDate.toISOString()}`,
    })
    .then(response => {return response.data})
    .catch(err => {return Promise.reject(err.response)})
}
/**
 * add user to tutor session
 * @param {string} sessionID 
 * @param {number} tutorID 
 * @returns 
 */
export const AddToSession = (sessionID, tutorID)=>{

    return axios({
        method: 'POST',
        url: `https://tutor.jakegut.com/session/`,
        data: {
            tutor_id: tutorID,
            event_id: sessionID,
            category_id: 1
        },
        headers: {
            'contentType': 'application/json',
        }
    })
    .then(res => {return res.data})
    .catch(err => {return err.response})
}