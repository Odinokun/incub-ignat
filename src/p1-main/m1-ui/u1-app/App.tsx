import s from './App.module.css'

import React from 'react'

import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from '../../../p2-homeworks/h2/HW2';
import HW3 from '../../../p2-homeworks/h3/HW3';

function App() {
  return (
    <div className={s.App}>
      <h1 className='title'>react homeworks:</h1>
      <HW3/>
      <HW2/>
      <HW1/>
      {/*<HW4/>*/}
      {/*<HW5/>*/}

    </div>
  )
}

export default App
