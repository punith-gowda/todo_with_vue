import { LocalStorage } from 'quasar'

export default async ({ router }) => {
  router.beforeEach((to, from, next) => {
    let loggedIN = LocalStorage.getItem('isLoggedin')
    if (!loggedIN && to.path !== '/auth') {
      next('/auth')
    } else {
      next()
    }
  })
}
