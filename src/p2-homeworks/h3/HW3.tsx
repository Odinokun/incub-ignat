import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

export type UserType = {
  _id: string
  name: string
}

function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([])

  const addUserCallback = (name: string) => {
    const newUser = {_id: v1(), name};
    setUsers([...users, newUser]);
  }

  return (
    <div className="container">
      <h2 className='subtitle'>homework #3</h2>
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>
      <ul>
        {users.map(u => <li>{u.name} - {u._id}</li>)}
      </ul>
    </div>
  )
}

export default HW3
