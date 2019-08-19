import React from 'react'
import './Follow.css'
import Cell from '../components/Cell/Cell'

export default class Follow extends React.Component{
    state={
        list:[]
      }
      //挂载完成钩子函数
      componentDidMount(){
      //  console.log(Home.axios )
        Follow.axios({
          url:'/mock/follow',
          params:{_page:1,_limit:8}
        }).then(
          // res=>console.log(res)
          res=>this.setState({list:res.data.data})
        )
      }
    
    render(){
        let {list}=this.state;
        return (
            <div className='Follow'>
            {
              list.map((item,index)=>( 
              <Cell key={index} linkApi item={item} history={this.props.history} dataName="follow"/> ))
           }
            </div>
        )
    }
}