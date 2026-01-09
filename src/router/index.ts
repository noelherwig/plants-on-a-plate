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
      meta: {
        title: 'Favorites',
      },
    },
    {
      path: '/saved',
      name: 'Saved',
      component: () => import('../views/SavedView.vue'),
      meta: {
        title: 'Saved',
      },
    },
    {
      path: '/recipe/:id',
      name: 'Recipe',
      component: () => import('../views/RecipeView.vue'),
      meta: {
        title: 'Recipe',
      },
      props: true,
    },
    {
      path: '/shopping-list',
      name: 'Shopping list',
      component: () => import('../views/ShoppingListView.vue'),
      meta: {
        title: 'Shopping list',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/PageNotFoundView.vue'),
      meta: {
        title: '404',
      },
    },
  ],
})

router.beforeEach(async (to) => {
  const pageTitle = to.meta.title
  document.title = pageTitle ? `Plants on a Plate - ${pageTitle}` : 'Plants on a Plate'
})

export default router
