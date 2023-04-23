import React from 'react'
import './styles/userCard.css'

const UserCard = ({ user, deleteUser, setUpdateInfo, setFormClose, setConfirmDelete, confirmDelete }) => {

  const handleDelete = () => {
    deleteUser(user.id)
    setConfirmDelete(false)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    setFormClose(false)
  }

  const handleConfirmDelete = e => {
    e.preventDefault()
    setConfirmDelete(true)
  }

  const handleConfirmDeleteClose = () => {
    setConfirmDelete(false)
  }

  return (
    <div className='user'>
      <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
      <ul className='user__list'>
        <li className='user__item'>
          <span className='user__label'>Email: </span>
          <span className='user__value'>{user.email}</span>
        </li>
        <li className='user__item'>
          <span className='user__label'>Birthday: </span>
          <span className='user__value'>{user.birthday}</span>
        </li>
      </ul>
      <footer className='user__footer'>
        <button className='user__btn user__delete' onClick={handleConfirmDelete}>
          <i className='bx bxs-trash user__icon'></i>
        </button>
        <button className='user__btn user__update' onClick={handleUpdate}>
          <i className='bx bx-edit user__icon'></i>
        </button>
        {confirmDelete && (
          <div className='form__confirm--container' >
            <div className='form__confirm'>
              <p className='form__confirm--alert'>Are you sure want to delete the user {user.first_name} {user.last_name}?</p>
              <div className='form__confirm--icons'>
                <i onClick={handleConfirmDeleteClose} className='bx bx-x-circle'></i>
                <i onClick={handleDelete} className='bx bx-check-circle'></i>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  )
}

export default UserCard