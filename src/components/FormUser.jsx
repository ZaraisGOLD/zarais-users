import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import './styles/formUser.css'

const FormUser = ({ postUser, updateInfo, updateUser, setUpdateInfo, setFormClose, formClose, setConfirm, confirm }) => {
  
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])

  const submit = data => {
    if (updateInfo) {
      updateUser(updateInfo.id, data)
      setUpdateInfo()
      setFormClose(true)
      setConfirm(false)
    } else {
      postUser(data)
      setFormClose(true)
      setConfirm(false)
    }
    reset(defaultValues)
  }

  const handleFormClose = () => {
    reset(defaultValues)
    setUpdateInfo()
    setFormClose(true)
  }

  const handleConfirm = e => {
    e.preventDefault()
    setConfirm(true)
  }

  const handleConfirmClose = () => {
    setConfirm(false)
  }

  return (
    <div className={`form__container ${formClose ? 'form__container--close' : ''}`}>
      <form className='form' onSubmit={handleConfirm}>
        <h3 className='form__title'>{updateInfo ? 'Update User' : 'Create New User'}</h3>
        <i onClick={handleFormClose} className='bx bx-x'></i>
        <div className='form__item'>
          <label className='form__label' htmlFor="email">Email
            <span className='form__label--req'> *</span>
          </label>
          <input className='form__input' {...register('email')} type="email" id='email' placeholder='e.g: email@example.com' required />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="password">Password
            <span className='form__label--req'> *</span>
          </label>
          <input className='form__input' {...register('password')} type="password" id='password' placeholder='e.g: User2000*' pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$%&*_=+-]).{8,16}$" required />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="first_name">First Name
            <span className='form__label--req'> *</span>
          </label>
          <input className='form__input' {...register('first_name')} type="text" id='first_name' placeholder='e.g: John' required />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="last_name">Last Name
            <span className='form__label--req'> *</span>
          </label>
          <input className='form__input last_name' {...register('last_name')} type="text" id='last_name' placeholder='e.g: Smith' required />
        </div>
        <div className='form__item'>
          <label className='form__label' htmlFor="birthday">Birthday
            <span className='form__label--req'> *</span>
          </label>
          <input className='form__input' {...register('birthday')} type="date" id='birthday' required />
        </div>
        <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        <p className='form__req'>
          <span className='form__req--sym'> *</span>All fields are required
        </p>
      </form>
      {confirm && (
        <div className='form__confirm--container' >
          <div className='form__confirm'>
            <p className='form__confirm--alert'>Are you sure want to {updateInfo ? 'update' : 'create'}?</p>
            <div className='form__confirm--icons'>
              <i onClick={handleConfirmClose} className='bx bx-x-circle'></i>
              <i onClick={handleSubmit(submit)} className='bx bx-check-circle'></i>
            </div>
          </div>
        </div>
      )}
      {/* {msg && (
        <div className='form__msg'>
          <div className='form__msg--CU'>User {updateInfo ? 'updated' : 'created'} successfully
            <img className='form__msg--okey' src="https://upload.wikimedia.org/wikipedia/commons/5/50/Yes_Check_Circle.svg" alt="" />
          </div>
        </div>
      )} */}
    </div>
  )
}

export default FormUser
