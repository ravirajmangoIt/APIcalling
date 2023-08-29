import { BrowserRouter, Route, Routes } from "react-router-dom"
import User from "../User"
import Posts from "../Posts"
import ProductList from "../Products"

const Routing = () => {
    return (
        <div>        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/products" element={<ProductList />} />
            </Routes>
        </BrowserRouter>
        </div>

    )
}

export default Routing;