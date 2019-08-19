import React from 'react';

//配置axios
import axios from 'axios';
//拦截器loading
// Add a request interceptor
import PubSub from 'pubsub-js'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //通知App修改bLoading数据
    PubSub.publish('VIEW_LOADING',true);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    //通知App修改bLoading数据
    PubSub.publish('VIEW_LOADING',false);
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

//将axios直接添加到类属性上
React.Component.axios=axios;
//暴露到全局
window.axios=axios;

export default axios;