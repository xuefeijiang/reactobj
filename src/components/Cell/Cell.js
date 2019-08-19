import React from 'react'
import './Cell.css'

import propTypes from 'prop-types'
import {Link} from 'react-router-dom'
import querystring from 'query-string'


export default class Cell extends React.Component{
  clickHandler=()=>{
      if(this.props.linkApi){
        //    
        //   编程式跳转
         // this.props.history.push('/detail/'+this.props.item.id ) 
          this.props.history.push({
            //   pathname:"xx",
              pathname:`/detail/${this.props.item.id}`,
              search:querystring.stringify({
                  dataName:this.props.dataName
              })
            }) 
      }

  }

    render(){
        let {item,dataName}=this.props
        return (
            <div className='Cell' >
                { this.props.link?
                    //条件渲染，根据页面传过来的Link值判断
                 <Link to={`/detail/${item.id}?dataName=${dataName}`}>
                {/* <Link to={{pathname:`detail/`+id,search:querystring.stringify({dataName})}> */}
                {this.props.noindex?
                  <h2>{item.title}</h2>:
                  <h2>{item.id}.{item.title}</h2>
                 }
                 <p>{item.des}</p>  
               </Link> :
                 <div onClick={this.clickHandler}>
                    {this.props.noindex?
                      <h2>{item.title}</h2>:
                      <h2>{item.id}.{item.title}</h2>
                    }
                    <p>{item.des}</p>  
                 </div>
                }
  
            </div>
        )
    }
}
//接收类的默认属性 
Cell.defaultProps={
    noindex:false,
    id:null,
    link:false,
    linkApi:false
};
//接收的id必须是数字
Cell.propTypes={
    // id:propTypes.number,
    link:propTypes.bool ,
    linkApi:propTypes.bool ,
    noindex:propTypes.bool ,
    item:propTypes.object.isRequired,
     dataName:propTypes.string
}