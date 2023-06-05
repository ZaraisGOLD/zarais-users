import axios from "axios"
import { useState } from "react"

const useUserCrud = () => {

    const [users, setUsers] = useState()

    const url = 'https://zarais-user-crud-academlo.onrender.com/api/v1'

    const getAlUsers = () => {
        axios.get(`${url}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    const postUser = data => {
        axios.post(`${url}/users`, data)
            .then(() => getAlUsers())
            .catch(err => console.log(err))
    }

    const deleteUser = id => {

        const urlDelete = `${url}/users/${id}`

        axios.delete(urlDelete)
            .then(()=> getAlUsers())
            .catch(err => console.log(err))
    }

    const updateUser = (id, data) => {

        const urlUpdate = `${url}/users/${id}`

        axios.patch(urlUpdate, data)
            .then(() => getAlUsers())
            .catch(err => console.log(err))
    }

    return { users, getAlUsers, postUser, deleteUser, updateUser }
}

export default useUserCrud