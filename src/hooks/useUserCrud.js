import axios from "axios"
import { useState } from "react"

const useUserCrud = () => {

    const [users, setUsers] = useState()

    const url = `https://users-crud.academlo.tech/users/`

    const getAlUsers = () => {
        axios.get(url)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    const postUser = data => {
        axios.post(url, data)
            .then(() => getAlUsers())
            .catch(err => console.log(err))
    }

    const deleteUser = id => {

        const urlDelete = `${url}${id}/`

        axios.delete(urlDelete)
            .then(()=> getAlUsers())
            .catch(err => console.log(err))
    }

    const updateUser = (id, data) => {

        const urlUpdate = `${url}${id}/`

        axios.patch(urlUpdate, data)
            .then(() => getAlUsers())
            .catch(err => console.log(err))
    }

    return { users, getAlUsers, postUser, deleteUser, updateUser }
}

export default useUserCrud