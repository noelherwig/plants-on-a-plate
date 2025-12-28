import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('../views/FavoritesView.vue'),
    },
    {
      path: '/recipe/:id',
      name: 'Recipe',
      component: () => import('../views/RecipeView.vue'),
      props: true,
    },
    {
      path: '/shopping-list',
      name: 'Shopping list',
      component: () => import('../views/ShoppingListView.vue'),
    },
  ],
})

export default router
