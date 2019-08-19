import React from 'react';
import style from './Footer.module.css';

import {NavLink} from 'react-router-dom'
export default class Footer extends React.Component{
  render(){
    return (
      <div className={style['foot-btn']}>
        <ul>
          <li className={style['home']}>
            <NavLink to='/home' activeClassName={style['home--active']}></NavLink></li>
          <li className={style['write']}>
          <NavLink to='/buycar' activeClassName={style['write--active']}></NavLink>
          </li>
          <li className={style['my']}>
          <NavLink to='/user' activeClassName={style['user--active']}></NavLink>
          </li>
        </ul>
      </div>
    )
  }
}