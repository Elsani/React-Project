import { handleResponse } from "../handleResponse"

export const updateUser = async (userId, payload) => {
    const response = await fetch(`https://dummyjson.com/users/${userId}` {
        method: 'PUT',
        body: JSON.stringify(payload),
      })
}

export const deleteUser = async (userId) => {
    try {
        
        const response = await fetch(`https://dummyjson.com/users/${userId}`, 
        {
        mtheod: 'DELETE',
        }
    )


    return await handleResponse(response)
    } catch (error) {

        return error
    }
}