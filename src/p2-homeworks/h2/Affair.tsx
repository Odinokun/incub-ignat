import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from './HW2';

type AffairPropsType = {
  affair: AffairType
  deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }

  return (
    <div>
      <button onClick={deleteCallback}>X</button>
      <span className={s.affairSpan}>{props.affair.name}</span>
      <span className={s.affairSpan}>{props.affair.priority}</span>
    </div>
  )
}

export default Affair
