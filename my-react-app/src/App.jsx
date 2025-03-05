import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import './styles/styles.scss';


function App() {
    return (
        <Router>
            <Navbar /> {/* Навігаційна панель */}
            <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
                <Routes>
                    <Route path="/" element={<CatalogPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/success" element={<SuccessPage />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
