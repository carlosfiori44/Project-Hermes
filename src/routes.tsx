import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import Login from "./pages/login";
import NotFound from "./pages/404";
import Home from "./pages/home";
import Sobre from "./pages/Sobre";
import VerificaProduto from "./pages/sales/product-generate";
import ListaVendas from "./pages/sales/sales-list";
import api from "./pages/helpers/axios";
import ListaUser from "./pages/admin/lista";

const ProtectedRoutes = async () => {
    let auth;
    await api.get("/auth/verify", {withCredentials: true}).then(() => {
        auth = true;
    }).catch((e) => {
        auth = false;
        console.log(e);
        localStorage.clear();
    });

    return auth ? null : redirect("/");
}

const router = createBrowserRouter([
    { path: '/', element: <Navigate to='/autenticacao/login' />, errorElement: <NotFound /> },
    { path: '/autenticacao', children: [{ path: 'login', element: <Login /> }, { path: 'logout',  }] },
    { path: '/admin', children: [{ path: 'listar', element: <ListaUser /> }] },
    {
        path: '/', 
        loader: ProtectedRoutes,
        children:
            [
                { path: '/home', element: <Home /> },
                { path: '/sobre', element: <Sobre /> },
                { path: '/vendas', children: [{ path: 'cadastrar', element: <VerificaProduto /> }, 
                                              { path: 'listar', element: <ListaVendas /> }] }
            ]        
    },

])

export default router
