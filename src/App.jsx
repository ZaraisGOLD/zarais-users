import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const [confirm, setConfirm] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const { users, getAlUsers, postUser, deleteUser, updateUser } = useUserCrud()

  useEffect(() => {
    getAlUsers()
  }, [])

  const handleFormOpen = () => {
    setFormClose(false)
  }

  return (
    <div className="app">
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button onClick={handleFormOpen} className='app__btn'>Create New User</button>
      </header>
      <FormUser
        postUser={postUser}
        updateInfo={updateInfo}
        updateUser={updateUser}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}
        setConfirm={setConfirm}
        confirm={confirm}
      />
      <div className='app__user--container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUpdateInfo={setUpdateInfo}
              setFormClose={setFormClose}
              setConfirmDelete={setConfirmDelete}
              confirmDelete={confirmDelete}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
