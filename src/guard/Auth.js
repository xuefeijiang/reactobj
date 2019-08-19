//守卫
import React from 'react';
import {Route, Redirect} from 'react-router-dom';



export default class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasAuth:false,//是否发送请求
            //auth:false,  //是否通过
            data:{}      //数据预载
        }
        // console.log(this.state.auth)
        Auth.axios({
           url:`/mock/user`
        }).then(
               // res=>res.json()
               res=>this.setState({data:res.data,hasAuth:true})
             )
           // .then(
            //     res=>{
            //        // console.log(res.auth); 
            //         this.setState({auth:res.auth,data:res.data,hasAuth:true})}
            // )
        
    }
    render(){
        if(!this.state.hasAuth)return null;
        // 目标组件	Component == User的字面量
        // 延展剩余参数 ...rest
        // 路由信息 ...props User组件需要用到的路由信息

        let {component:Component,...rest} =this.props
        return(
            <Route {...rest} render={(rest)=>(
                this.state.data.err===0 ?
              <Component {...rest} data={this.state.data.data}/>:
              <Redirect to="/login"  />
            )}/>
        )
    }
}