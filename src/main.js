import { createApp } from 'vue'
import { Empty ,Loading ,   CountDown,Image as VanImage,Overlay,Popup, Cell, Toast,RadioGroup, Radio, Checkbox, CheckboxGroup,Button,Dialog,ConfigProvider} from 'vant'
import './style.css'

// 2. 引入组件样式
import 'vant/lib/index.css'
import './loading.min.css'
import App from './App.vue'
import router from './router'
import 'amfe-flexible';
import 'lib-flexible/flexible'

const app = createApp(App)
app.use(router)
app.use(Popup)
app.use(Cell)
app.use(Toast)
app.use(Radio)
app.use(RadioGroup)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(Button )
app.use(Dialog )
app.use(Overlay)
app.use(ConfigProvider )
app.use(VanImage);
app.use(CountDown);
app.use(Loading)
app.use(Empty)
app.mount('#app')
