import Home from "./components/Pages/Home/Home"
import Contact from "./components/Pages/Contact/Contact"
import Account from "./components/Pages/Account/Account"
import Branding from "./components/Pages/Branding/Branding"
import Classic from "./components/Pages/Classic/Classic"
import Fadeout from "./components/Pages/Fadeout/Fadeout"
import Pricing from "./components/Pages/Pricing/Pricing"
import Shop from "./components/Pages/Shop/Shop"
import Single from "./components/Pages/Single/Single"

const router = [
    {
        path: "/",
        exact: true,
        component: <Home />,
        fallback: <Home />,
    },
    {
        path: "/contact",
        exact: true,
        component: <Contact />,
    },
    {
        path: "/account",
        exact: true,
        component: <Account />,
    },
    {
        path: "/branding",
        exact: true,
        component: <Branding />,
    },
    {
        path: "/pricing",
        exact: true,
        component: <Pricing />,
    },
    {
        path: "/fadeout",
        exact: true,
        component: <Fadeout />,
    },
    {
        path: "/shop",
        exact: true,
        component: <Shop />,
    },
    {
        path: "/single",
        exact: true,
        component: <Single />,
    },
    {
        path: "/classic",
        exact: true,
        component: <Classic />,
    },
]


export default router;