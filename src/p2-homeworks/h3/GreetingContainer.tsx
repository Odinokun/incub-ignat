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
  const [error, setError] = useState<boolean>(false)

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const addUser = () => {
    setName('');
    alert(`Hello ${name} !`);
    addUserCallback(name);
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addUser();
  }

  const totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onKeyPressHandler={onKeyPressHandler}
    />
  )
}

export default GreetingContainer
