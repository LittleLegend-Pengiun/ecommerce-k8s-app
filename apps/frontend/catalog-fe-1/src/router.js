import { ROUTERS } from "./utils/router";
import HomePage from "./pages/user/HomePage";
import ProfilePage from "./pages/user/ProfilePage";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/user/theme/masterLayout";
const RenderRouterCustom = () => {
    const userRoutets = [
        {
            path:ROUTERS.USER.HOME,
            component:<HomePage/>
        },
        {
            path:ROUTERS.USER.PROFILE,
            component:<ProfilePage/>
        },
    ]
    return (
        <MasterLayout>
        <Routes>
            {
                userRoutets.map((item,key) => 
                (
                        <Route key={key} path={item.path} element={item.component}/>
                ))
            }
        </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return RenderRouterCustom();
}

export default RouterCustom;