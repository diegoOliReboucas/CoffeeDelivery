import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Index";
import {  Checkout } from "./Components/Pages/Checkout/Index";
import { DefaultLayout } from "./DefaultLayout/Index";
import { Sucess } from "./Components/Pages/Sucess/Index";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/sucess' element={<Sucess />}/>
            </Route>
        </Routes>
    )
}