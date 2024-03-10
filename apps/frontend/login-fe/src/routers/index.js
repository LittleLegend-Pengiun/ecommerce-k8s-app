import HomePage from '../pages/HomePage/HomePage'
import ManageAccountPage from '../pages/ManageAccountPage/ManageAccountPage'
import ManageOrderPage from '../pages/ManageOrderPage/ManageOrderPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import PaymentPage from '../pages/PaymentPage/PaymentPage'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage'
import RetrivePassword from '../pages/RetrivePassword/RetrivePassword'
import ShoppingCartPage from '../pages/ShoppingCartPage/ShoppingCartPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
export const routes = [
    {
        path :'/',
        component: HomePage,
        isShowHeader: true
    },
    {
        path :'/sign-in',
        component: SignInPage,
        isShowHeader: true
    },
    {
        path :'/forgot-password',
        component: RetrivePassword,
        isShowHeader: true
    },
    {
        path :'/sign-up',
        component: SignUpPage,
        isShowHeader: true
    },
    {
        path :'/product-detail/:id',
        component: ProductDetailPage,
        isShowHeader: true
    },
    {
        path :'/payment/:id',
        component: PaymentPage,
        isShowHeader: true
    },
    {
        path :'/shopping-cart/:id',
        component: ShoppingCartPage,
        isShowHeader: true
    },
    {
        path :'/manage-order/:id',
        component: ManageOrderPage,
        isShowHeader: true
    },
    {
        path :'/manage-account/:id',
        component: ManageAccountPage,
        isShowHeader: true
    },
    {
        path:'*',
        component: NotFoundPage
    }
]
