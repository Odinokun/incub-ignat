import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = (
  {users, addUserCallback}) => {
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedName = e.currentTarget.value.trim();

    if (trimmedName) {
      setName(trimmedName)
      error && setError('')
    }
  }

  const addUser = () => {
    if (name) {
      alert(`Hello ${name} !`);
      addUserCallback(name);
      setName('');
    } else {
      setError('Name fiesd is required!!!')
    }
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && name) addUser()
    else setError('Name fiesd is required!!!')
  }

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onEnter={onEnter}
    />
  )
}

export default GreetingContainer
