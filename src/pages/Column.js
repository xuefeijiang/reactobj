import React from 'react'
import './Column.css'
import Cell from '../components/Cell/Cell';

import {Link} from 'react-router-dom'

export default class Column extends React.Component{
  state={
    list:[]
  }
  //挂载完成钩子函数
  componentDidMount(){
  //  console.log(Home.axios )
    Column.axios({
      url:'/mock/Column',
      params:{_page:1,_limit:8}
    }).then(
      // res=>console.log(res)
      res=>this.setState({list:res.data.data})
    )
  }
    render(){
      let {list}=this.state
        return (
            <div className='Column'>
            {
              list.map(item=>( 
                //声明式跳转
                <Link key={item.id} to={`/detail/${item.id}?dataName=column`}> 
                 <Cell noindex item={item} /> 
                </Link>
              ))
           }
            </div>
        )
    }
}