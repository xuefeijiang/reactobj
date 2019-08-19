import React from 'react'
import './Home.css'
import Cell from '../components/Cell/Cell'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router-dom'
import { Carousel } from 'antd-mobile';

export default class Home extends React.Component{
  state={
    list:[],
    banner:[],
    imgHeight:200,
  }
  //挂载完成钩子函数
  componentDidMount(){
  //  console.log(Home.axios )
    Home.axios({
      url:'/mock/home',
      params:{_page:1,_limit:9}
    }).then(
      // res=>console.log(res)
      res=>this.setState({list:res.data.data})
    )
    Home.axios({
      url:'/mock/banner',
      params:{_page:1,_limit:4}
    }).then(
      // res=>console.log(res)
      res=>this.setState({banner:res.data.data})
    )
  }
   clickHander=(id,dataName,ev)=>{
    this.props.history.push({
      pathname:'/detail/'+id,
      search:'?dataName='+dataName
    })
   };

    render(){
      let {list,banner}=this.state;
        return (
         <div className='Home'>
          <Carousel
          autoplay={false}
          infinite
         
        >
          {banner.map(item => (
            <a
              key={item.id}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              onClick={this.clickHander.bind(null,item.id,'banner')}
            >
              <img
                src={item.banner}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
              <div className="home-swiper__item__title">
                <div>{item.title}</div>
                <div>{item.sub_title}</div>
              </div>
            </a>
            
          ))} 
        </Carousel>
           {
            
              list.map(item=>( 
              //声明式跳转  dataName确立传过去的名字
              <Cell key={item.id} link item={item} dataName="home"/> ))
              //解决KEY的报错 
             
           }
        
         </div>
        )
    }
}