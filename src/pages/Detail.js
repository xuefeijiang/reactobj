import React from 'react';
import './Detail.css'
import zan from '../assets/img/zan.png'
import xing from '../assets/img/xing.png'
import fx from '../assets/img/fx.png'

import querystring from 'query-string'
export default class Detail extends React.Component{
  state={
    data:{}
  }
  componentDidMount(){
    let id = this.props.match.params.id-0;
    let dataName= querystring.parse(this.props.location.search).dataName;
    Detail.axios({
      url:`/mock/${dataName}/${id}`,
    }).then(
      // res=>console.log(res.data),
      res=>this.setState({data:res.data.data})
    )
  }
  render(){
    //拿到后台数据，开始页面根据数据内容拼接页面
    // let {data}=this.state;
    //  console.log(this.state.data)
    let {title,time,detail}=this.state.data;
     
    return (
      <div className="Detail">
        <div className="nav">
          <ul>
            {/* 编程式跳转 */}
            <li className="l-btn" onClick={()=>this.props.history.go(-1)}></li>
          </ul>
        </div>
        {
          detail &&(
            <div className="content">
          <div className="header clear"><h2><img src={detail.auth_icon ? detail.auth_icon: detail.icon} alt=""/></h2><p>{detail.auth}</p></div>
          <div className="cont">
            <h3>{title}</h3>
            <div className="time"><p>{Detail.date(time)}/{Detail.fillzero(8)} <span><img src={zan} alt=""/></span></p>
            </div>
            <div className="text-box" dangerouslySetInnerHTML={{__html:detail.content}}>
            </div>
          </div>
        </div>
          )
        }
        
        <div className="foot-btn">
          <ul>
            <li className="say"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="zan"><a href="">
              <i></i><span>0</span>
            </a></li>
            <li className="xing"><a href="">
              <i><img src={xing} alt=""/></i>
            </a></li>
            <li className="fx"><a href="">
              <i><img src={fx} alt=""/></i>
            </a></li>
          </ul>
        </div>
      </div>
    )
  }
}