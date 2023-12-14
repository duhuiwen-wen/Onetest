<script setup>

import { ref } from 'vue'
import { showToast } from 'vant'

// import { apiGetyonghu,apiGetUrl,apiGetDibu,apiNotification, apiCheckOrder,apiBanner,
//   apiGetyinsi,apiGetuser,apiGetArticles, apiGetTypes,
//   apiGetServiceLink, apiGetGuize, apiPostCreateOrder, 
//   apiGetShuoMing, apiGetPrice } from '@/api/common'
import { reactive } from 'vue';
import { computed } from 'vue';
import router from '@/router';
import { jsx } from 'vue/jsx-runtime';
import { CountDown } from 'vant';

// defineProps({
//   msg: String,
// })
// //是否显示规则
// const showGz = ref(false)
// const gz_content = ref('')
// //使用说明
// const shuoming = ref('')
// const checked = ref('wxpay');
// const dibu = ref('')
// //提交表单的数据
// const formData = reactive({
//   phone: '',
//   source_code: '',
//   goods_title: '短剧会员',
//   amount: 50,
//   pay_type: '',
//   source_url: '',
//   pay_channel_id: '',
//   source_code: "APP",
// })

// // formData.
// formData.source_url = window.location.href

// // formData.pay_type = computed(() => {
// //   return isWxpay.value ? 'wxpay' : 'alipay'
// // })
// // 支付方式
// const radioshow = reactive({
// radio_wx:'',
// radio_zfb:'',
// radio_all:'display:none'
// })
// // 二次改价
// const pricea = reactive({
//   price:'',
//   show:'',
//   success:'display:none',
//   primarya:'display:none',
//   text:'',
//   display:'',
//   blue:'',
//   red:'',
//   wancheng:''
// })
// const tanchaung=()=>{
//   const search = window.location.hash.split("?")[1];
//   let params = new URLSearchParams(search);
//   let [payStatus,source_code] =[params.get('pay_status'),params.get('source_code')]
//   const payTypea = String(payStatus,source_code)
//   // router.push({ 'path': '/webview', params: JSON.stringify(res.data) })
//   apiNotification().then((res)=>{
//         // pricea.price = res.data.data.price
//         if (payStatus=='success') {
//           pricea.text = "支付成功"
//           pricea.show=true
//           pricea.blue="未完成"
//           pricea.red="完成支付"
//           pricea.success='display.block'

//         }if(payStatus=='primarya'){
//           pricea.price = res.data.data.price
//           pricea.text = "限时降价"
//           pricea.blue="立即抢购"
//           pricea.red="我已付款"
//           pricea.show=true
//           pricea.primarya='display.block'

//         }
//       })
// }
// tanchaung()
// // setTimeout(() => {
// //   fivemin()
// //   console.log("失败",pricea.primarya);
// //   }, "10000");
// // const fivemin = ()=>{
// //   pricea.show=false
// // }
// const primarya_fangqi = ()=>{
//   pricea.show=false
// }
// const primarya_qianggou =()=>{
//     loadingshow.value=true
//     const data = {
      
//       "phone": formData.phone,
//       "source_code":formData.source_code,
//       "goods_title": formData.goods_title,
//       "amount": pricea.price,
//       "pay_type": checked.value,
//       "source_url": formData.source_url,
//       "pay_channel_id": formData.pay_channel_id,
   
//     };
//     apiPostCreateOrder(data).then((res) => {
//       if(res.data.code==400){
//         showToast(res.data.msg)
//         return false
//       }else{
//         console.log(res.data.source_url);
//         const returnUrl = res.data.source_url
//         const aa = returnUrl.split("?")[1]
//       const orderId = {
//         "Oid":res.data.order_id,
//         "sourcode":formData.source_code,
//         "type":"hongbao"
//       }
//       // router.push({ path: 'webview', query: { order_id:orderId.Oid,source_code:orderId.sourcode,type:orderId.type,pay_type:checked.value}})
//       // router.push({ path: 'webview', query: { source_code:orderId.sourcode,order_id:orderId.Oid,type:orderId.type,radio_type:checked.value}})
//       // router.push({ path: 'webview/', query: { url:testUrl,order_id:orderId.Oid,type:orderId.type,radio_type:checked.value}})
//       console.log("aa",aa);
//       const url = 'webview/?'+aa+'&order_id='+orderId.Oid+'&type='+orderId.type+'&radio_type='+checked.value
//       router.push(url)
//       if (res.data.code == 1 || res.data.code == 200) {
//         // 在移动端时，window.open()会失效，在这里判断一下，如果在移动端时，是ios系统，将window.open()替换成location.href
//         let system = navigator.userAgent
//       let isAndroid = system.indexOf('Android') > -1 || system.indexOf('Adr') > -1 // android终端
//       let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
//             if (isAndroid) {              
//               window.open(res.data.qrcode, '_blank');
//             } else if (isiOS) {              
//                 window.location.href = res.data.qrcode
//             }else{
//               window.open(res.data.qrcode,'_blank');
               
//             }
        
//       } else {
//         showToast(res.data.msg)
//       }
//       }

//     });
  

// }
// apiGetTypes().then((res) => {
//   radioshow.radio_all='display:block'
//   // isWxpay.value = res.data.data.wxpay.is_show || ''
//   // isWxpay.value = res.data.data.alipay.is_show || ''
//   console.log(res.data.data);
//   if(res.data.data.alipay.is_show==0){
//     radioshow.radio_all='display:block'
//     radioshow.radio_zfb="display:none"
//     checked.value = 'wxpay'
//   }
//   if(res.data.data.wxpay.is_show==0){
//     radioshow.radio_all='display:block'
//     radioshow.radio_wx="display:none"
//     checked.value = 'alipay'
//   }
// }) 
// computed(async () => {
//   let source_url = window.location.href

//   let price = await apiGetPrice({ type: 1, source_url: source_url })
//   let prices = price.data.data;
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i].is_buy) {
//       formData.amount = prices[i].amount
//       break
//     }
//   }
// })

// const loadShouMing = async () => {
//   shuoming.value = await apiGetShuoMing();
// }
// const loaddibu = async () => {
//   dibu.value = await apiGetDibu();
// }
// loadShouMing()
// loaddibu()
// //展示规则窗口的函数
// const showGzPopup = async () => {
//   //展示规则内容
//   showGz.value = true
//   gz_content.value = ''
//   const guize = await apiGetGuize()
//   console.log("guize",guize);
//   gz_content.value = guize
// }
// const redirectKf = async () => {
//   //跳转到客服
//   //获取客服链接。
//   const res = await apiGetServiceLink()
//   // showToast('跳转到客服')
//   const link = res.data.data.link
//   window.location.href = link
// }
// // 退款
// const refundBtn=()=>{
// 		window.location.href = 'https://duanju.taolianka.com/tuikuan'
// 		// uni.reLaunch({
// 		//   url: '/pages/submit/submits'
// 		// });
// 	}
// const search = window.location.hash.split("?")[1];
//           let params = new URLSearchParams(search);
//           let [source_code] =[params.get('source_code')]
//           formData.source_code = String(source_code)
//           const testUrl = String(search)
// const loadingshow = ref(false);
// //跳转去支付
// const goPay = () => {

//   loadingshow.value=true
//   const data = {
//       "phone": formData.phone,
//       "goods_title": formData.goods_title,
//       "amount": formData.amount,
//       "pay_type": checked.value,
//       "source_url": formData.source_url,
//       "pay_channel_id": formData.pay_channel_id,
//       "source_code":formData.source_code,
//     };
//     apiPostCreateOrder(data).then((res) => {
//       if(res.data.code==400){
//         showToast(res.data.msg)
//         return false
//       }else{
//         const returnUrl = res.data.source_url
//         const aa = returnUrl.split("?")[1]
//       const orderId = {
//         "Oid":res.data.order_id,
//         "sourcode":formData.source_code,
//         "type":"hongbao"
//       }
      
//       // router.push({ path: 'webview', query: { source_code:orderId.sourcode,order_id:orderId.Oid,type:orderId.type,radio_type:checked.value}})
//       const url = 'webview/?'+aa+'&order_id='+orderId.Oid+'&type='+orderId.type+'&radio_type='+checked.value
//       router.push(url)
//       // router.push({ path:'webview/',query:{url:url}})
//       // router.push({ path: `/webview/${url}` })
//       if (res.data.code == 1 || res.data.code == 200) {
//         // 在移动端时，window.open()会失效，在这里判断一下，如果在移动端时，是ios系统，将window.open()替换成location.href
//         let system = navigator.userAgent
//       let isAndroid = system.indexOf('Android') > -1 || system.indexOf('Adr') > -1 // android终端
//       let isiOS = !!system.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
//             if (isAndroid) {              
//               window.open(res.data.qrcode, '_blank');
//             } else if (isiOS) {
//                 window.location.href = res.data.qrcode
//             }else{
//               window.open(res.data.qrcode,'_blank');
               
//             }
        
//       } else {
//         showToast(res.data.msg)
//       }
//       }

//     });
// }
// const gotoHongbao = (params) => {
//   //跳转到红包页面
//   showToast('去红包页面')
//   // window.location.href = ''

// }
// const closeHongbao = (params) => {
//   showToast('关闭红包')
//   noPayCount.value = 1
// }

// //不支付的次数
// let noPayCount = ref(0)
// let payCode = ref('success')

// let isWxpay = ref('')
// //判断来源是否支付宝或者微信
// const referrerIsPayPage = () => {
//   // localStorage.setItem('noPayCount', noPayCount.value)
//   //本地缓存未支付次数
//   let storageNoPayCount = localStorage.getItem('noPayCount') || 0
//   noPayCount.value = storageNoPayCount
//   if (document.referrer == 'alipay') {
//     //判断支付成功否
//     if (payCode != 'success') {
//       noPayCount.value++
//     }
//   }
//   localStorage.setItem('noPayCount', noPayCount.value)
//   return noPayCount
// }
// const time = ref( 180 * 60 * 60);
// const list = ref('')
// 倒计时
const time = ref(1 * 10 * 60 * 1000);
const timeTwo = ref(1 * 10 * 60 * 1000);
// const productdata = reactive({
// list:[]  
// })
// 盲盒商品展示
let productdata = ref()
productdata=[
  {img: 'http://localhost:5173/src/assets/icon/legend.png',text:'0.001%'},
  {img: 'http://localhost:5173/src/assets/icon/epic.png',text:'0.01%'},
  {img: 'http://localhost:5173/src/assets/icon/rare.png',text:'2.5%'},
  {img: 'http://localhost:5173/src/assets/icon/advanced.png',text:'20%'},
  {img: 'http://localhost:5173/src/assets/icon/general.png',text:'40%'}
]
console.log(productdata);
let productlist = ref()
productlist=[
  {img: 'http://localhost:5173/src/assets/img/08685f5588c24384bcf03fa87cf54d51.png',icon:'http://localhost:5173/src/assets/icon/bc2628d68ce541e6b31af80b92e838f5.png'},
  {img: 'http://localhost:5173/src/assets/img/261c363dc71d4d5fb2ec3dfd058bba54.png',icon:'http://localhost:5173/src/assets/icon/bc2628d68ce541e6b31af80b92e838f5.png'},
  {img: 'http://localhost:5173/src/assets/img/bc9968bbcede42e3b6ddbe402ff61833.png',icon:'http://localhost:5173/src/assets/icon/bc2628d68ce541e6b31af80b92e838f5.png'},

]
// 规则
let guize = ref()
guize = '支付成功后请留意手机短信，并尽快下载[玲珑魔盒App] 填写收货地址。*盲盒抽取具有随机性，开出商品以实物为准，抽取概率均与盒子公示概率保持一致。*18岁以下未成年人禁止购买玲珑魔盒任意盲盒产品.'
// 说明
let shuoming = ref()
shuoming = 
  '客服热线:400-897-8878沪ICP备2023012644号上海沂果网络科技有限公司'
  // 滚动弹出提交按钮
let stickyStyle = ref()
const scrollChage = ()=>{
      let target = document.getElementById('li30');
      console.log(target);
        // let parent = document.getElementById('ul');
    	// parent.scrollTop = target.offsetTop - parent.offsetTop;
  stickyStyle.value = 'sticky_button'
}
scrollChage()
// 点击弹出商品展示
const show = ref(false);
// 商品列表
// 常规款
let generalTestData =[
  {img:'http://localhost:5173/src/assets/img/9028ab15bcb44b6ca4dfdbd384ac8f66.jpg',title:'仙人掌车载加濕器小型家用静音雾化机',text:'120'},
{img:'http://localhost:5173/src/assets/img/781b652ed76d419784d3001b854bf470.png',title:'小米米家声波电动牙刷T100',text:'185'},
{img:'http://localhost:5173/src/assets/img/cdd87e3315f04e81849e6749a9b15959.png',title:'创意usb充电拍拍灯 led床头可爱护眼小夜灯',text:'145'},
{img:'http://localhost:5173/src/assets/img/e802cb3bd4244deda4bff77feafb3326.png',title:'南极人毛球修剪器智能数显充电式修剃毛器',text:'189'},
{img:'http://localhost:5173/src/assets/img/15d2063c9ebb4b81bce4fdf1c3d9c932.jpg',title:'智能牙刷消毒器壁挂便携UVC紫外线',text:'188'},
]
// 高级款
let advancedTestData =[
  {img:'http://localhost:5173/src/assets/img/1ec058093d704002aaa73a50a1cc440f.png',title:'自动u型刷头儿童电动牙刷',text:'520'},
{img:'http://localhost:5173/src/assets/img/b071d3350d7942169f94ce96625f979e.png',title:'智能扫地机器人 拖地机扫拖一体自动家用',text:'285'},
{img:'http://localhost:5173/src/assets/img/78f280a4c40f424dbd622a89fbec422a.jpg',title:'天鹅天气预报瓶创意玻璃工艺品摆件',text:'145'},
{img:'http://localhost:5173/src/assets/img/52c199e1a3ea4f7094849a0ebd7afad4.png',title:'家居两用扬子除螨仪无线床上车载',text:'189'},
]
// 稀有款
let rareTestData =[
  {img:'http://localhost:5173/src/assets/img/e05bd8e6817e4bcd9e4ec95c4df61fbf.png',title:'飞科智能感应剃须刀电动男士刮胡刀',text:'520'},
{img:'http://localhost:5173/src/assets/img/9239a821163f46679aa47f0eae652e1f.png',title:'无线迷你蓝牙音箱便携户外桌面原子复古黑胶唱机',text:'285'},
{img:'http://localhost:5173/src/assets/img/044fa72e4928484ba443f1576196e8ff.png',title:'911保时捷积木拼装遥控车机械',text:'145'},
{img:'http://localhost:5173/src/assets/img/52c199e1a3ea4f7094849a0ebd7afad4.png',title:'家居两用扬子除螨仪无线床上车载',text:'189'},
]
// 史诗款
let epicTestData =[
  {img:'http://localhost:5173/src/assets/img/5d83091ad6404c96af02c6f7d9663b33.png',title:'科沃斯N9+智能扫地机器人全自动扫拖一体风干洗抹布吸尘器',text:'520'},
{img:'http://localhost:5173/src/assets/img/9239a821163f46679aa47f0eae652e1f.png',title:'无线迷你蓝牙音箱便携户外桌面原子复古黑胶唱机',text:'285'},
{img:'http://localhost:5173/src/assets/img/044fa72e4928484ba443f1576196e8ff.png',title:'911保时捷积木拼装遥控车机械',text:'145'},
{img:'http://localhost:5173/src/assets/img/52c199e1a3ea4f7094849a0ebd7afad4.png',title:'家居两用扬子除螨仪无线床上车载',text:'189'},
]
// 传说款
let legendData =[
  {img:'http://localhost:5173/src/assets/img/5d83091ad6404c96af02c6f7d9663b33.png',title:'科沃斯N9+智能扫地机器人全自动扫拖一体风干洗抹布吸尘器',text:'520'},
{img:'http://localhost:5173/src/assets/img/9239a821163f46679aa47f0eae652e1f.png',title:'无线迷你蓝牙音箱便携户外桌面原子复古黑胶唱机',text:'285'},
{img:'http://localhost:5173/src/assets/img/044fa72e4928484ba443f1576196e8ff.png',title:'911保时捷积木拼装遥控车机械',text:'145'},
{img:'http://localhost:5173/src/assets/img/52c199e1a3ea4f7094849a0ebd7afad4.png',title:'家居两用扬子除螨仪无线床上车载',text:'189'},
]
    // 常规款
    let generalTestDataicon =[]
        generalTestData.map((item)=>{
        generalTestDataicon.push(Object.assign(item,{icon:'http://localhost:5173/src/assets/icon/5724806f482547e28f6f91c5c5e5009a.png'}))
      })
      // 高级款
    let advancedTestDataicon =[]
    advancedTestData.map((item)=>{
        advancedTestDataicon.push(Object.assign(item,{icon:'http://localhost:5173/src/assets/icon/06d6eee7810e4bc391abc45cd8dc49f0.png'}))
      })
    // 稀有款
    let rareTestDataicon =[]
    rareTestData.map((item)=>{
        rareTestDataicon.push(Object.assign(item,{icon:'http://localhost:5173/src/assets/icon/4aabd5a6f56940efa7dfd7bcfada02e2.png'}))
      })
          // 史诗款
    let epicTestDataicon =[]
    epicTestData.map((item)=>{
        epicTestDataicon.push(Object.assign(item,{icon:'http://localhost:5173/src/assets/icon/c2b214fbf4614e95a7aec72a2e994793.png'}))
      })
          // 传说款
    let legendTestDataicon =[]
    legendData.map((item)=>{
        legendTestDataicon.push(Object.assign(item,{icon:'http://localhost:5173/src/assets/icon/bc2628d68ce541e6b31af80b92e838f5.png'}))
      })
// 所有商品
let alldata = [...legendTestDataicon,...epicTestDataicon,...rareTestDataicon,...advancedTestDataicon,...generalTestDataicon,  ]
// tab栏列表 
let commodityListData = reactive({
  actionListData : [
  {img: 'http://localhost:5173/src/assets/icon/bc2628d68ce541e6b31af80b92e838f5.png',text:'0.001%',id:1},
  {img: 'http://localhost:5173/src/assets/icon/c2b214fbf4614e95a7aec72a2e994793.png',text:'0.01%',id:2},
  {img: 'http://localhost:5173/src/assets/icon/4aabd5a6f56940efa7dfd7bcfada02e2.png',text:'2.5%',id:3},
  {img: 'http://localhost:5173/src/assets/icon/06d6eee7810e4bc391abc45cd8dc49f0.png',text:'20%',id:4},
  {img: 'http://localhost:5173/src/assets/icon/5724806f482547e28f6f91c5c5e5009a.png',text:'40%',id:5}
    ],
    ListData:alldata
    

 })
      const clickItem = (key)=> {
       if(key.id==1){
         commodityListData.ListData = legendTestDataicon;
       }
       if(key.id==2){
         commodityListData.ListData = epicTestDataicon;
       }
       if(key.id==3){
         commodityListData.ListData = rareTestDataicon;
       }
       if(key.id==4){
         commodityListData.ListData = advancedTestDataicon;
       }
       if(key.id==5){
         commodityListData.ListData = generalTestDataicon;
       }
     }
     const click = ()=>{
       commodityListData.ListData = alldata;
     }
</script>
<template>
  <div>
    <div class="page_body">
    <div class="header_bg">
    </div>
    <div class="content">
      <div class="content_title">
        <div class="content_title_img"> </div>
        <p class="content_title_text">【盲盒福利购】 HUAWEI P50 Pocket折叠手机创新双屏操作8GB+256GB</p>
        <div class="content_list">
        <p class="content_list_text">开盒价 <span style="font-size:25px">￥99</span> </p>
        <div class="content_list_img"></div>
        <div class="content_list_CountdownTime">
          <div class="timer">
            <!-- <van-count-down millisecond :time="time" format="mm:ss:SS" /> -->
              <van-count-down :time="time" millisecond format="mm:ss:SS">
                  <template #default="timeData">
                    <!-- <span class="block">{{ timeData.hours }}</span> -->
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.milliseconds}}</span>
                  </template>
                </van-count-down>
                <!-- <div v-if="remainingTime > 0">
                  {{ minutes }}:{{ seconds }}:{{ milliseconds }}
                </div> -->
          </div>
      </div>
        </div>
        <div class="content_list_input">
          <p class="content_listInput_text">请输入手机号</p><input type="text" placeholder="请输入提货手机号" id="inputText" class="input">
        </div>
        <div class="content_BGlist">
          <div class="content_bg_price">
            <div class="content_price_text">
              <p class="price_text">
                到手价 <span class="price_text_span">￥99</span> 
              </p>
              <button class="price_button">提交订单</button>
            </div>
          </div>
          <div class="content_bg_zhengpin"></div>
        </div>
      </div>
    </div>
    <div class="bottom_bg">
      <div class="bottom_bg_one"></div>
      <div class="bottom_bg_two"></div>
    </div>
    <div class="bottom_list_bg">
      <div class="bottom_title">
      <p class="bottom_list_title">  
        该盲盒可能抽到的商品：
      </p>
      <p class="bottom_list_title_show"  @click="show = true">
        点击查看可能抽到的商品 》
      </p>
    </div>
    <div class="bottom_product_list">
      <div class="bottom_product" v-for="item in productdata" :key="item">
        <img :src='item.img' alt="" class="bottom_product_bg">
        <p class="bottom_product_ratio">{{item.text}}</p>
      </div>
    </div>
    <div class="bottom_product_content">
      <div class="product_content_one">
        <img src="../assets/bg/icon_license.png" alt="">
      </div>
      <div class="product_content_two" v-for="item in productlist" :key="item">
        <img :src='item.img' alt="" class="content_two_one">
        <img :src='item.icon' alt="" class="content_two_two">
      </div>
    </div>
    </div>
    <div class="bottom_all">
    <div class="bottom_guize">
        <div style="padding: 10px;" ></div>
        <p v-text="guize"></p>
    </div>
    <div class="bottom_button">
      <button>立即下载</button>
    </div>
    <div class="bottom_xieyi">
      <p>购买前请您仔细阅读 <span>《隐私政策》</span> 
        <span>《用户协议》</span>
        <span>《玩法规则》</span>
      </p>
    </div>
    <div class="bottom_shuoming">
      <div style="padding: 10px;" ></div>
      <p v-text="shuoming"></p>
  </div>
  </div>
  <div :class="stickyStyle" id="li30">
  <!-- <van-sticky :offset-bottom="-75" position="bottom" @scroll="scrollChage"> -->
    <div class="sticky_bg"></div>
    <div class="sticky_text">
      <p class="sticky_text_one">开盒价 <span style="font-size:20px">￥99</span> </p>
      <p class="sticky_text_two">提交订单
      </p>
      <span class="sticky_text_three">
        <van-count-down millisecond :time="timeTwo" format="mm:ss:SS 后福利失效" style="color:#fff;font-size:10px"/>
      </span>
    </div>
  <!-- </van-sticky> -->
  </div>
  <div class="Two_buttoon">
  <div class="rule">
    <p>规</p>
    <p>则</p>
  </div>
  <div class="kefu">
    <p>客</p>
    <p>服</p>
  </div>
  </div>
  <div class="action_list" >
    <!-- <van-action-sheet show=true title="开盒必出以下宝贝之一"  > -->
    <van-action-sheet v-model:show="show" title="开盒必出以下宝贝之一">
      <div class="action_listContent">
        <!-- <van-sticky type="primary" offset-top="190vm"> -->
        <div class="action_product_list">
          <div class="allBG" @click="click()"></div>
          <div class="action_product" @click="clickItem(item)" v-for="(item) in commodityListData.actionListData" :key="item">
            <img :src='item.img' alt="" class="action_product_bg">
            <p class="action_product_ratio">{{item.text}}</p>
          </div>
        </div>
      <!-- </van-sticky> -->
        <div class="action_commodity">
          <div class="commodity_list" v-for="item in commodityListData.ListData" :key="item">
            <img :src="item.icon" alt="" class="commodity_listImgOne">
            <img :src="item.img" alt="" class="commodity_listImgTwo">
            <p class="commodity_listTitle">{{item.title}}</p>
            <p class="commodity_listText">参考价 <span style="font-size:20px">￥{{item.text}}</span> </p>
          </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</div>
  </div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  /* 点击弹出商品列表 */
  .action_commodity{
    width: 375px;
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: row;
    flex-wrap:wrap ;
    overflow: scroll;
  }
  .action_commodity div:nth-child(1){
margin-top: 70px;
  }
  .action_commodity div:nth-child(2){
    margin-top: 70px;
      }
  .commodity_list{
    width: 4.4rem;
    margin:5px 5px 5px 5px;
    border-radius: 10px;
    padding: 10px 5px;
    background-color: #fff;
  }
.action_listContent{
  min-height: 1000px;

  background-color: #fff3f5;
}
.action_product_list{
  width:100%;
  height: 55px;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
    /* 设置项目主轴方向上的对齐方式 */
   justify-content: flex-start ;
   flex-direction: row;
   background-color: #fff3f5;
   position: fixed;
   z-index: 999;
}
.action_product{
  width: 1.06667rem;
  margin: 5px 10px;
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
}
.action_product_bg{
  width: 1.38667rem;
  height: 0.98667rem;
  background-size: 100%;
  background-repeat:no-repeat;
}
.allBG{
    width: 0.56rem;
    height: 1.33333rem;
    background-image: url(../assets/icon/all.png);
    background-size: 100% auto;
    background-repeat: no-repeat;
    border: 1px solid #7360ff;
    border-radius: 0.13333rem;
    background-position: 0 0.13333rem;
    margin-left: 10px;
    margin-top: 5px;
}
.action_product_ratio{
  text-align: center;
}
.commodity_listImgOne{
  position: relative;
  left: 90px;
  width: 1.57333rem;
  height: 1.09333rem;
}
.commodity_listImgTwo{
  width: 4.45333rem;
  height: 4.45333rem;
  border-radius: 0.21333rem;
}
  /* 滚动弹出按钮 */
  .sticky_button{
    display: block;
    position: fixed;
    bottom: -60px;
    z-index: 5;
  }
/* 侧边悬浮规则按钮 */
.Two_buttoon{
  position: fixed;
  top: 0.85333rem;
  right: 0;

}
.rule{
  width: 0.74667rem;
  height: 1.28rem;
  background-color: #ff3e3e;
  border-top-left-radius: 0.21333rem;
  border-bottom-left-radius: 0.21333rem;
  text-align: center;
  padding-top: 0.26667rem;
  color: #fff;
}
.kefu{
  color: #fff;
  margin-top: 0.24rem;
  width: 0.74667rem;
  height: 1.28rem;
  background-color: #ff3e3e;
  border-top-left-radius: 0.21333rem;
  border-bottom-left-radius: 0.21333rem;
  text-align: center;
  padding-top: 0.26667rem;
}
.page_body{
  width: 100vw;
  height: 300vh;
  background-color: #f2f3f7;
  overflow-y: scroll;
  overflow-x: hidden;
}
  .header_bg{
    width: 100vw;
    height: 9.06667rem;
    background-image: url(../assets/bg/head_bg.png);
    background-size: cover;
  }
  .content{
    width: 100vw;
    height: auto;
    padding: 8px 0;
    background-color:#fff ;
    border-radius: 10px;
    margin-bottom:5px ;
  }
  .content_title{
    margin: 5px 10px;
  }
  .content_list{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    margin-top: 10px;
  }
  .content_title_img{
    width:180px;
    height:25px;
    background-image: url(../assets/bg/v2_introduce.png);
    background-size: 80%;
    background-repeat:no-repeat;
  }
  .content_title_text{
    font-size: 0.42667rem;
    color: #333;
    line-height: 0.64rem;
    font-weight: 700;
  }
  .content_list_text{
    font-size: 10px;
    color: #e83236;
    line-height: 0.64rem;
  }
  .content_list_img{
    width: 50px;
    height:20px;
    background-image: url(../assets/bg/v2_icon.png);
    background-size: 100%;
    background-repeat:no-repeat;
  }
/* 倒计时 */

.van-count-down{
  width: 100px;
}
.colon {
display: inline-block;
margin: 0 2px;
color: red;
font-size: 20px;
}
.block {
display: inline-block;
width: 20px;
color: red;
font-weight: 600;
font-size:15px;
text-align: center;
background: linear-gradient(180deg,#fdfffa,#fef0b9);
border-radius: 5px;
}
/* 输入框 */
.content_list_input{
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction:row;
  justify-content:flex-start;
  border-radius: 10px;
  border: 1px solid #6a6a6a;
  width: 300px;
  height: 40px;
  margin-top: 10px;
}
.content_list_input input{
  border: 0;
}
.content_list_input p{
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;     /* 垂直居中 */
  margin:0 15px ;
  font-weight: 600;
  font-size: 13px;
}
.content_list_input ::-webkit-input-placeholder{
  font-size: 15px;
  color: red;
  display: flex;
  align-items: center;  
}
/* 下面图片区域 */
.content_bg_price{
  width: 300px;
  height:60px;
  background-image: url(../assets/bg/v11_reminder.png);
  background-size: 100%;
  background-repeat:no-repeat;
  margin-top: 10px;
}
.content_price_text {
  display: -webkit-flex; /* Safari */
  height:60px;
  display: flex;
  /* 设置项目主轴方向上的对齐方式 */
  justify-content: space-between;
  align-items: center;     /* 垂直居中 */
}
.content_bg_price .content_price_text p{
  margin: 0 15px;
  color: #Fff;
  font-size: 15px;
  display: -webkit-flex; /* Safari */
  display: flex;
  align-items: center;     /* 垂直居中 */
}
.price_text_span{
  font-size: 30px;
}
.price_button {
  margin: 0 15px;
  width: 80px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.53333rem;
  font-size: 0.37333rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  animation: scaleOne .7s linear infinite;
  border: 0;
}
@keyframes scaleOne{
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.8);
  }
}
.content_bg_zhengpin{
  width: 300px;
  height:25px;
  background-image: url(../assets/bg/v11_economics_base.png);
  background-size: 100%;
  background-repeat:no-repeat;
  margin-top: 10px;
}
.bottom_bg_one{
  width: 100%;
  height:10.4rem;
  background-image: url(../assets/bg/v6_discuss.png);
  background-size: 100%;
  background-repeat:no-repeat;
}
.bottom_bg_two{
  width: 100%;
  height:3.92rem;
  background-image: url(../assets/bg/goods_picture1.png);
  background-size: 100%;
  background-repeat:no-repeat;
}
.bottom_list_bg{
  width: 300px;
  height: 150px;
  background-color: #fff;
  border-radius:10px;
  text-align: center;
  position: absolute;
left: 50%;
transform: translateX(-50%);
}
.bottom_title{
  display: -webkit-flex; /* Safari */
  display: flex;
  /* 设置项目主轴方向上的对齐方式 */
  justify-content: space-between;
  align-items: center;     /* 垂直居中 */
}
.bottom_list_title{
  margin: 5px 10px;
  font-size: 12px;
  color: #333;
}
.bottom_list_title_show{
  margin: 5px 10px;
  font-size: 10px;
  color: #6a6a6a;
}
.bottom_product_list{
  width: 280px;
  display: -webkit-flex; /* Safari */
  -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
  display: flex;
  flex-wrap: wrap;
    /* 设置项目主轴方向上的对齐方式 */
   justify-content: space-around;
   flex-direction: row;
   margin: 0 10px;
}
.bottom_product{
  width: 1.06667rem;
  display: -webkit-flex; /* Safari */
  -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
}
.bottom_product_bg{
  width: 1.06667rem;
  height:0.42667rem;
  background-size: 100%;
  background-repeat:no-repeat;
}
.bottom_product_content{
  display: -webkit-flex; /* Safari */
  -webkit-flex-flow: row-reverse wrap; /* Safari 6.1+ */
  /* 设置子元素的布局为flex布局 */
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  flex-direction: row;
  /* 设置项目主轴方向上的对齐方式 */
  justify-content: flex-start
}
.product_content_one{
  width: 2.77333rem;
  height: 2.02667rem;
  margin: 5px 5px;
}
.product_content_one img{
  width: 2.77333rem;
  height: 2.02667rem;
}
.product_content_two{
  width: 2.02667rem;
  height:2.02667rem;
  background-image: url(../assets/bg/goods-item.png);
  background-size: 100%;
  background-repeat:no-repeat;
  margin: 5px 0px;
  display: flex;
  /* 设置项目自动换行 */
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.content_two_one{
  width: 50px;
  height: 50px;
  position: relative;
  top:8px;
}
.content_two_two{
  width: 28px;
  height:20px;
  position: relative;
  top: -50px;
  left: -25px;
}
.bottom_all{
position: relative;
top: 135px;
display: flex;
/* 设置项目自动换行 */
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
}
.bottom_guize{
color: #999;
padding: 20px;
}

.bottom_button button{
  width: 200px;
  height: 30px;
  padding: 20px;
  background: linear-gradient(96deg, #FFE6BA 0%, #FFE9C2 100%);
  border: 0;
  border-radius: 20px;
  color: #7F4112;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.bottom_xieyi{
  margin-top: 20px;
}
.bottom_xieyi span{
  color:#2094ff;
}
.bottom_shuoming{
width: 100px;
color: #999;
}

.sticky_bg{
  background-image: url(../assets/bg/v2_base_btn.png);
  background-size: 100%;
  background-repeat:no-repeat;
  height: 50px;
  width: 350px;
}
.sticky_text{
  color: #fff;
  display: -webkit-flex; /* Safari */
  height:60px;
  display: flex;
  /* 设置项目主轴方向上的对齐方式 */
  justify-content: space-between;
  align-items: center;     /* 垂直居中 */
  flex-direction: row;
  position: relative;
  top: -50px;
}
.sticky_text_one{
  font-size: 10px;
  position: relative;
  top: -8px;
  left: 25px;
}
.sticky_text_two{
  font-size: 20px;
  position: relative;
  top: -12px;
  left:80px;
  animation: scaleOne .7s linear infinite;
}
.sticky_text_three{
  position: relative;
  top: 5px;
  left:-35px;
}
</style>
