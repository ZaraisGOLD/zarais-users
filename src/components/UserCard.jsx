import React, { useState } from 'react'
import './styles/userCard.css'

const UserCard = ({ user, deleteUser, setUpdateInfo, setFormClose, setConfirmDelete, confirmDelete }) => {

  const [msgDelete, setMsgDelete] = useState(false)

  const handleDelete = () => {
    deleteUser(confirmDelete.id)
    setConfirmDelete(false)
    setMsgDelete(true)
    setTimeout(() => {
      setMsgDelete(false)
    }, 5000);
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    setFormClose(false)
  }

  const handleConfirmDelete = (e) => {
    e.preventDefault()
    setConfirmDelete(user)
  }

  const handleDeleteClose = () => {
    setConfirmDelete(false)
  }

  return (
    <div className='user'>
      <div className='user__nameIcon'>
        <i className='bx bx-user'></i>
        <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
      </div>
      <ul className='user__list'>
        <li className='user__item'>
          <span className='user__label'>Email: </span>
          <div className='user__info'>
            <i className='bx bx-envelope'></i>
            <span className='user__value'>{user.email}</span>
          </div>
        </li>
        <li className='user__item'>
          <span className='user__label'>Birthday: </span>
          <div className='user__info'>
            <i className='bx bx-gift'></i>
            <span className='user__value'>{user.birthday}</span>
          </div>
        </li>
      </ul>
      <footer className='user__footer'>
        <button className='user__btn user__delete' onClick={handleConfirmDelete}>
          <i className='bx bxs-trash user__icon'></i>
        </button>
        <button className='user__btn user__update' onClick={handleUpdate}>
          <i className='bx bx-edit user__icon'></i>
        </button>
      </footer>
      {confirmDelete && (
        <div className='form__confirm--container' >
          <div className='form__confirm'>
            <p className='form__confirm--alert'>Are you sure want to delete <span className='user__confirm--alert'>{confirmDelete.first_name} {confirmDelete.last_name}</span>?
            </p>
            <div className='form__confirm--icons'>
              <i onClick={handleDeleteClose} className='bx bx-x-circle'></i>
              <i onClick={handleDelete} className='bx bx-check-circle'></i>
            </div>
          </div>
        </div>
      )}
      {msgDelete && (
        <div className='msg'>
          <div className='msg__delete'>User deleted successfully</div>
        </div>
      )}
    </div>
  )
}

export default UserCard