import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./Layout/Root/Root";
import Homepage from "./Layout/Root/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            }
        ]
    },
]);