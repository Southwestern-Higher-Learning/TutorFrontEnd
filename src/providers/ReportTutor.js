import axios from 'axios'

export const ReportTutor = (reason, tutor) => {
        return axios.post(
            'https://tutor.jakegut.com/reports/',{
                type: 1,
                reference_id: 1,
                reason: reason,
                description: reason === 'Inappropriate Profile Picture' ? 'User Profile Picture' : tutor.description,
                user_id: tutor.id
            }
        )
        .then((response) => {
            console.log(response)
        }, (error) => {
            console.log(error)
        })
    
}