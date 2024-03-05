import { useRoutes } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Card from "./Pages/Card/Card";

const routes = [
    {
        path: "/",
        element: <Main />,
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
