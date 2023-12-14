// //引入接口访问
// import axios from '@/axios'
// import { ref } from 'vue'
// // 支付
// let a = window.location.href
// export function apiGetTypes() {
//   return axios.get('/get_pay_types', { params:{type: 1 , source_url:a,}})
// }
// // 金额
// export function apiGetArticles(category_id) {
//   return axios.get('/user/articles', {params:{ category_id: category_id }})
// }
// // 客服
// export function apiGetServiceLink() {
//   return axios.get('/service_link')
// }
// // 规则
// export async function apiGetGuize() {
//   const res = await axios.get('/user/articles', {params:{ category_id: 10 }})
//   console.log('res:', res)
//   const articles = res.data.data.data || []
//   articles.forEach((article) => {
//     if (article.article_category_id == 10) {
//       window.swap_value = article.profile.content || ''
//       // console.log("console.log(window.swap_value);",window.swap_value);
//     }
//   })
//   return window.swap_value
// }
// // 使用说明
// export async function apiGetShuoMing() {
//   const res = await axios.get('/user/articles', {params:{ category_id: 11 }})
//   // console.log('res:', res)
//   const articles = res.data.data.data || []
//   try {
//     articles.forEach((article) => {
//       if (article.article_category_id == 11) {
//         window.swap_value = article.profile.content || ''
//         throw new Error()
//       }
//     })
//   } catch (error) {
//     // console.log(window.swap_value)
//   } finally {
//     return window.swap_value
//   }
// }

// export async function apiGetDibu() {
//   // return axios.get('/user/articles', {params:{ category_id: 7 }})
//   const res = await axios.get('/user/articles', {params:{ category_id: 12 }})
//   const articlesa = res.data.data.data || []
//   try {
//     articlesa.forEach((article) => {
//       if (article.article_category_id == 12) {
//         window.swap_value = article.profile.content || ''
//         throw new Error()
//       }
//     })
//   } catch (error) {
//     console.log(window.swap_value)
//   } finally {
//     return window.swap_value
//   }
// }
// export function apiPostCreateOrder(data) {
//   return axios.post('/coupon_pay', data)
// }
// let source_url = window.location.href
// export async function apiGetPrice() {
//   return await axios.get('/coupon_price',{params:{type: 1, source_url: source_url}})
// }

// // 用户来源
// export async function apiGetuser() {
//   return await axios.post('/source_url',{url:a})
// }
// // 隐私政策
// export async function apiGetyinsi() {
//   return await axios.get('/user/articles',{params:{category_id:14}})
// }
// // 用户协议
// export async function apiGetyonghu() {
//   return await axios.get('/user/articles',{params:{category_id:15}})
// }
// // 弹窗
// // export async function apiSiteConfig() {
// //   return await axios.get('/site_config')
// // }
// // 支付降价弹窗
// const search = window.location.hash.split("?")[1];
// let params = new URLSearchParams(search);
// let [payType,source_code,order_id] =[params.get('pay_Type'),params.get('source_code'),params.get('order_id')]
// // console.log("1",payType,source_code,order_id);
// const payTypea = String(payType,source_code,order_id)
// const b =source_code
// const c=order_id
// export async function apiNotification() {
//   return await axios.get('api/notification',{params:{source_code:b}})
// }
// // console.log("order_id",c);

// // axios.interceptors.request.use(config => {
// //   // 添加一个延迟函数，延迟2秒返回
// //   return new Promise(resolve => setTimeout(() => resolve(config), 4000));
// // }, error => {
// //   return Promise.reject(error);
// // });
// // 是否支付
// export async function apiCheckOrder() {
//   // console.log("apiCheckOrder",c);
//   return await axios.post('api/checkOrder',{order_id:c})
  
// }
// // 中转页
// export async function apiGetUrl() {
//   return await axios.post('/api/getUrl',{order_id:c})
// }
// // 配置跳转链接
// export async function apiSuccessUrl() {
//   return await axios.get('/api/successUrl')
// }
// // 背景图
// export async function apiBanner() {
//   return await axios.get('/api/banner')
// }
// //员工登录
// export function apiLogin(name, code) {
//   return axios.post('/admin/login', {
//     username: name,
//     password: code,
//   })
// }
