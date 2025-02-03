import {Routes, Route} from "react-router-dom"
import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import Menu from "../containers/Menu";
import Cart from "../containers/Cart";
import Checkout from "../containers/Checkout";
import CompletedPayment from "../containers/CompletedPayment";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import { Orders } from "../containers/Admin/Orders";
import { NewProduct } from "../containers/Admin/NewProduct";
import { EditProducts } from "../containers/Admin/EditProduct";
import { Products } from "../containers/Admin/Products";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/cardapio" element={<Menu/>}/>
                <Route path="/carrinho" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/complete" element={<CompletedPayment/>}/>
            </Route>

            <Route path="/admin" element={<AdminLayout/>}>
                <Route  path="/admin/pedidos" element={<Orders/>}/>
                <Route  path="/admin/novo-produto" element={<NewProduct/>}/>
                <Route  path="/admin/editar-produto" element={<EditProducts/>}/>
                <Route  path="/admin/produtos" element={<Products/>}/>
            </Route>

            <Route path="/login" element={<Login/>}/>
            <Route path="/cadastro" element={<Register/>}/>
        </Routes>
    )
}
