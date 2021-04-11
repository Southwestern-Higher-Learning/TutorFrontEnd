import axios from 'axios'

export const ReportTutor = (reason, tutor, userState) => {
    const data = {
        type: 0,
        reference_id: tutor.id,
        reason: reason,
        description: reason === 'Inappropriate Profile Picture' ? 'User Profile Picture' : tutor.description,
        user_id: userState.user.id
    }
    console.log(data)
        return axios.post(
            'https://tutor.jakegut.com/reports/',{
                type: 0,
                reference_id: tutor.id,
                reason: reason,
                description: reason === 'Inappropriate Profile Picture' ? 'User Profile Picture' : tutor.description,
                user_id: userState.user.id
            }
        )
        .then((response) => {return response.status})
        .catch((error) => {
            console.log(error)
            return Promise.reject(error)})
}