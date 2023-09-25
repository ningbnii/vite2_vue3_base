import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager } from 'vue-meta'
import 'normalize.css'
import VuePageStack from 'vue-page-stack'
import vant from 'vant'

const app = createApp(App)
app.use(router)
app.use(createMetaManager())
app.use(VuePageStack, { router })
app.use(vant)
app.mount('#app')
