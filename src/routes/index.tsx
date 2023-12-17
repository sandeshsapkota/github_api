import Home from "@/pages/home";
import Detail from "@/pages/detail";

const routes =
    [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/repository/:id',
            element: <Detail/>,
        }
    ]


export default routes
