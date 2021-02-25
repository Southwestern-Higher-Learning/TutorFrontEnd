import axios from 'axios'


export const UpdateDescription = async (description, access_token)=>{

    const response = await axios.patch(`https://tutor.jakegut.com/user/me`,
    
    {
        description
    },
    {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
    
    if(response.status === 200){
        return response.data
    } else {
        return null
    }

}