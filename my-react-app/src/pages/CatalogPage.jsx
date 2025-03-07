import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchCategories } from "../store/productsSlice";
import ProductCard from "../components/ProductCard";
import '../styles/styles.scss';
import '../fonts/fonts.css'

const Catalog = () => {
    const dispatch = useDispatch();
    const { products, categories } = useSelector((state) => state.products);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, [dispatch]);

    const filteredProducts = products
        .filter((product) => (selectedCategory ? product.category === selectedCategory : true))
        .filter((product) => (minPrice ? product.price >= parseFloat(minPrice) : true))
        .filter((product) => (maxPrice ? product.price <= parseFloat(maxPrice) : true))
        .filter((product) =>
            searchQuery ? product.title.toLowerCase().includes(searchQuery.toLowerCase()) : true
        );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="catalog">
            <h1>Catalog</h1>

            <div className="filters">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Categories</option>
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))
                    ) : (
                        <option disabled>Category load...</option>
                    )}
                </select>

                <input
                    type="number"
                    placeholder="Min price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max. price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="product-list">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product) => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p>No items</p>
                )}
            </div>
            <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                    Back
                </button>
                <span>
                    Page {currentPage} from {Math.ceil(filteredProducts.length / productsPerPage)}
                </span>
                <button
                    disabled={indexOfLastProduct >= filteredProducts.length}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Catalog;
