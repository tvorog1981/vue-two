import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import pageAbout from "../views/pageAbout";
import pageHome from "../views/pageHome";
import page404 from "../views/page404";
import pageTasks from "../views/pageTasks";
import pageNewPost from "../views/Posts/pageNewPost";
import pageItem from "../views/pageItem"
const histroy = createWebHashHistory();
const routes = [
  {
    path: "/about",
    name: "about",
    component: pageAbout,
    children: [
      {
        path: "/new",
        component: pageNewPost,
        name:'new',
        meta: { requiresAuth: false },
      },
    ],
  },
  { path: "/", name: "home", component: pageHome },
  { path: "/tasks", name: "tasks", component: pageTasks },
  { path: "/:CatchAll(.*)", name: "404", component: page404 },
  {path: '/:itemAlias', name: 'itemAlias', component:pageItem}
];

const Router = createRouter({
  routes,
  history: histroy,
});
export default Router;
