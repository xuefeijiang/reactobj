import React from 'react';
import './User.css'
import getFailedSnapshotTests from 'jest-util/build/getFailedSnapshotTests';
export default class User extends React.Component{
  render(){
    // let {fans,follow,icon,nikename}=this.props.data;
       console.log(this.props)
    let {data:{fans,follow,icon,nikename}}=this.props;
     console.log(fans,follow,icon,nikename);
    return (
      <div className="user">
        <div className="user__header">
          <h2><img src={icon} alt=""/></h2>
          <div className="user-box">
            <a>{nikename}</a>
            <a href="##">注销</a>
          </div> 
          <ul className="clear">
            <li>
              <span>{follow}</span>
              <p>关注</p>
            </li>
            <li>
              <span>{fans}</span>
              <p className="end">粉丝</p>
            </li>
          </ul>
        </div>
        <div className="docList">
          <ul>
            <li className="gk-text">
              <i></i>
              <p>公开博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="mm-text">
              <i></i>
              <p>秘密博文</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="cg-text">
              <i></i>
              <p>草稿箱</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="sc-text">
              <i></i>
              <p>收藏夹</p>
              <b></b>
              <span>0</span>
            </li>
            <li className="my_cz">
              <i></i>
              <p>收藏夹</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
} 