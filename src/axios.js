import axios from 'axios'

let url_config = ''
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  // console.log("process.env.NODE_ENV",process.env);
  url_config = '/api'
  // url_config = 'http://vip.taolianpay.com'
} else {
  // 生产环境
  // url_config = 'https://cz.taolianpay.com'
  url_config = 'https://duanju.taolianka.com/'
  var domain = window.location.hostname.split(':')[0];
  url_config = 'https://'+domain
}

// var domain = window.location.hostname.split(':')[0]
// var baseURL='https://zhd.taolianpay.com'
// var baseURL = 'https://' + domain                                                                                                                                                                                 
// console.log(url_config);
//创建一个api访问对象
const ax = axios.create({
  // baseURL: '/api', //访问代理接口名字，这个名字是在代理配置里配置的
  baseURL: url_config,
})

export default ax
