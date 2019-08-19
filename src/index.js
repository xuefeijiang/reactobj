import React from 'react';
import ReactDom from 'react-dom'
import App from './layouts/App'

import './assets/css/base.css';
import './assets/js/font';

//引入路由
import {BrowserRouter, Route} from 'react-router-dom';

import './pulgins/axios'

//配置utils
import * as utils from  './utils';
//也是过滤器
// for (var key in utils){
//     React.Component[key]=utils[key]
// }
//返回数组[key1.key2,等等]    过滤器
Object.keys(utils).forEach(key=>React.Component[key]=utils[key]);

ReactDom.render(
    <BrowserRouter>
    {/* 路由守卫 */}
    <Route component={App} />
   
    </BrowserRouter>,
    document.getElementById('root')
)

