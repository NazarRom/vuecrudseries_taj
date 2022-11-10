import { createRouter,createWebHistory } from "vue-router";
import HomeSeries from './components/HomeSeries.vue'
import InsertSeries from './components/InsertSeries.vue'
import UpdateSeries from './components/UpdateSeries.vue'
import DetalleSerie from './components/DetalleSerie.vue'
import PersonajeSerie from './components/PersonajesSerie.vue'
const routes = [
    {
        path:"/",component:HomeSeries
    },
    {
        path:"/insert",component:InsertSeries
    },
    {
        path:"/update",component:UpdateSeries
    },
    {
        path:"/detalle/:id",component:DetalleSerie
    },
    {
        path:"/personaje/:idserie",component:PersonajeSerie
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})
export default router;