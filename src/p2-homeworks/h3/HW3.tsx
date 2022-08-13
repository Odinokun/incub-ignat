import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

export type UserType = {
  _id: string
  name: string
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([])

  const addUserCallback = (name: string) => {
    setUsers([]) // need to fix
  }

  return (
    <div className="container">
      <h2 className='subtitle'>homework #3</h2>
      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>
    </div>
  )
}

export default HW3
