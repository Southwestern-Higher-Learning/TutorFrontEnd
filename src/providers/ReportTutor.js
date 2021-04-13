import axios from 'axios'

export const ReportTutor = async (reason, tutor, userState) => {
    const data = {
        type: 0,
        reference_id: tutor.id,
        reason: reason,
        description: reason === 'Inappropriate Profile Picture' ? 'User Profile Picture' : tutor.description,
        user_id: userState.user.id
    }
        return axios({
            method: 'POST',
            url: 'https://tutor.jakegut.com/reports/',
            data: JSON.stringify(data),
            headers: {
                'contentType': 'application/json'
            }
        })
        .then((response) => {return response})
        .catch((error) => {
            return Promise.reject(error)})
}