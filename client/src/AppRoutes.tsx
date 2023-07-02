import { BrowserRouter, Route, Routes } from "react-router-dom"
import ArticlesContextProvider from "./pages/services/ArticlesContext"
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart/Cart";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ArticlesContextProvider>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/cart' Component={Cart} />
                </Routes>
            </ArticlesContextProvider>
        </BrowserRouter>
    );
}