import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
export const routes = [
    {
        path :'/',
        component: HomePage,
        isShowHeader: true
    },
    {
        path:'*',
        component: NotFoundPage
    }
]
