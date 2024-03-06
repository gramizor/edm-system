import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Card from "./Pages/Card/Card";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/user/:id",
        element: <Card />,
    }
];

export const AppRoutes = () => {
    const routeResult = useRoutes(routes);

    return <>{routeResult}</>;
};
