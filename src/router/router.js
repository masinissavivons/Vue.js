import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from "../views/AddCard.vue"
import CardInformation from "../views/CardInformation"
import SelectTrigger from "../views/SelectTrigger"
import CardDetail from "../views/CardDetail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: "/addCard",
    name: "addCard",
    component: AddCard
  }, {
    path: "/cardInformation",
    name: "cardInformation",
    component: CardInformation
  }, {
    path: "/selectTrigger",
    name: "selectTrigger",
    component: SelectTrigger
  }, {
    path: "/cardDetail/:id",
    name: "cardDetail",
    component: CardDetail,
    props: true,
  }
]

const router = new VueRouter({ mode: 'history', routes: routes });


export default router
