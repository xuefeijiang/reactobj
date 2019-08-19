import React from 'react';
import './App.css'
 import Header from './Header'
 import Footer from './Footer'
  import Home from '../pages/Home';
  import Follow from '../pages/Follow'
 import Column from '../pages/Column'
 import User from '../pages/User'
 import Login from '../pages/Login'
 import Reg from '../pages/Reg'
 import  Detail from '../pages/Detail'
 import  Error from '../pages/Error'
import Autn from '../guard/Auth'
import PubSub from 'pubsub-js'
//引入路由模块,路由匹配
 import {Route,Switch,Redirect} from 'react-router-dom'
import Loading from '../components/Loading/Loading';

export default class App extends React.Component{
   
  state={
    bNav:true,
    bFoot:true,
    bLoading:true,
  }

   constructor(){
     super()

     //订阅
    this.token=PubSub.subscribe('VIEW_LOADING',(msg,data)=>{
      //msg ~~ VIEW_LOADING
      //data ~~ 发布方传递过来的数据
      // console.log('VIEW_LOADING',msg, data);
      this.setState({bLoading:data})
    })
   }
   componentWillUnmount(){
    PubSub.unsubscribe(this.token) //取消订阅
  }

  componentWillReceiveProps(nextProps){
      let path =nextProps.location.pathname;
      // console.log('app',path)
      this.checkParh(path)
  }
  componentDidMount(){
    let path=this.props.location.pathname
    // console.log('app',path)
    this.checkParh(path)
  }
   
  checkParh=(path)=>{
     if(/home|follow|column/.test(path)){
       //头脚都有的
      this.setState({bNav:true,bFoot:true})
     }
     if(/user|login|detail/.test(path)){
      //头脚都没有的
      this.setState({bNav:false,bFoot:false})
     }
     if(/user/.test(path)){
       //只有脚部的
      this.setState({bNav:false,bFoot:true})
     }
  }

  render(){
    let {bNav, bFoot, bLoading} =this.state;
    return (
       <div className="App">

       {bNav && <Header/>}
       {bLoading && <Loading/>}

      {/* <h3>APP</h3> */}
        
        {/* <Home/> */}
        {/* <Follow/> */}
        {/* <Column/> */}
         {/* <User/> */}
         {/* <Login/> */}
         {/* <Reg/> */}
         {/* <Detail/> */}
       

        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/follow' component={Follow}/>
          <Route path='/column' component={Column}/>
          {/* <Route path='/user' component={User}/> */}
          <Autn path='/user' component={User}/>
          <Route path='/reg' component={Reg}/>
          <Route path='/login' component={Login}/>
          <Route path='/detail/:id' component={Detail}/>

           <Redirect exact from="/" to='/home'/> 
          <Route component={Error} />



        </Switch>
        {bFoot ? <Footer/>:null}
        
        </div>
    )
  }
} 
