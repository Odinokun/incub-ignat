import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: boolean
  totalUsers: number
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler}
) => {

  const inputClass = error ? s.error : s.input;

  return (
    <div>
      <input value={name}
             onKeyDown={onKeyPressHandler}
             onChange={setNameCallback}
             className={inputClass}/>
      <span>{error}</span>
      <button onClick={addUser} className={s.btn}>add</button>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
