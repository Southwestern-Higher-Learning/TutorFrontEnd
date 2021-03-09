import axios from 'axios'


export const UpdateDescription = async (description, access_token)=>{

    try {
        const response = await axios.patch(`https://tutor.jakegut.com/user/me`,
        
        {
            description
        }
        )
        
        if(response.status === 200){
            return response.data
        } else {
            return null
        }
    } catch (error) {
        // Error handling TBD
        console.log(error)
    }

}