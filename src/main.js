import { createApp } from 'vue'
import './style.css'
// import './components/common.css'
// import './components/reset.css'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(store)

app.mount('#app')
