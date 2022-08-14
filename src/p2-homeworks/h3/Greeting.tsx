import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onEnter}
) => {

  const inputClass = error ? s.error : s.input;

  return (
    <div className={s.greeting}>
      <div className={s.inputWrap}>
        <input value={name}
               onKeyDown={onEnter}
               onChange={setNameCallback}
               className={inputClass}/>
        <div>{error}</div>
      </div>
      <button onClick={addUser} className={s.btn}>add</button>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
