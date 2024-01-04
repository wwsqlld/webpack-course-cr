import React, {useState} from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Calendar from '@/assets/calendar.svg';

function TODO(a: number) {
  console.log('TODOFUNCTION')
}

export const App = () => {

  const [count, setCount] = useState<number>(0);
  // TODO(435)
  const increment = () => setCount(prev => prev + 1);

  // if(__PLATFORM__ === 'desktop') {
  //   return <div>ISDESKTOPPLATFORM</div>
  // }


  // if(__PLATFORM__ === 'mobile') {
  //   return <div>ISMOBILEPLATFORM</div>
  // }

  // if(__ENV__ === 'development') {
  //   // add
  // }

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 style={{ color: 'green' }} data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt='' />
        <img width={100} height={100} src={avatarJpg} alt='' />
      </div>
      <div>
        <Calendar style={{ color: 'green' }} width={200} height={200} />
      </div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/shop'>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment} >inc</button>
      <Outlet />
    </div>
  )
}

