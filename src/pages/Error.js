import React from 'react'
import './Error.css'
export default class Error extends React.Component{
    render(){
        return (
            <div className='Error'>
            <h3>404</h3>
            <h3>404</h3>
            <h3>404</h3>
            <h3>404</h3>
            <h3>404</h3>
            <h3>404</h3>
            <h3>404</h3>
            <h3>404</h3>
            <h3>404</h3>
            <a href="##" className='btn' onClick={()=>this.props.history.go(-1)}>返回</a>
           
            </div>
        )
    }
}