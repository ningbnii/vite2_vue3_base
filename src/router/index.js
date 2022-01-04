import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('../views/index.vue')
}];

const modules =
    import.meta.glob('../views/**/*.vue')

for (let i in modules) {
    let item = modules[i]
    const routePath = item.name.replace(/.*views/ig, "").replace(/\.vue/ig, '')
    routes.push({
        path: routePath,
        component: () => import(item.name)
    })
}

export default createRouter({
    history: createWebHistory(),
    routes,
})