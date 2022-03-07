import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Col, Row } from 'vant'
import { createMetaManager } from 'vue-meta'
import 'normalize.css'
import '@/style/index.scss'
import Mui from '@/components'

createApp(App).use(Mui).use(router).use(createMetaManager()).mount('#app')
