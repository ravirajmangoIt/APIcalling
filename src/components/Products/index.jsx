import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleCart = (productId) => {
        console.log(productId);
        if (productId) {
            setCartCount(cartCount + 1);
            setProducts((previousProduct) =>
                previousProduct.map((item) =>
                    item.id == productId ? { ...item, cartItem: true } : item
                ));
        }

    }

    const handleWishList = (productId) => {
        console.log(productId);
        if (productId) {
            // setCartCount(cartCount + 1);
            setProducts((previousProduct) =>
                previousProduct.map((item) =>
                    item.id == productId ? { ...item, wishListItem: true } : item
                ));
        }
    }

    return (
        <>
            <button className='cartButton'>{cartCount > 0 ? "Go to cart ": <ShoppingCartIcon />}{cartCount}</button>

            <div className="product-list">

                {products.map(product => (
                    <div className="product-item" >
                        <div className='productView'>
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAtdUDNMQz5ifvYA0iJ9wnodrWVnY7CGHIw&usqp=CAU" alt={product.title} />
                            </div>
                            <div>
                                <IconButton onClick={() => handleWishList(product.id)}>
                                    {product.wishListItem ? <VisibilityIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                            </div>
                        </div>
                        <h3>{product.title}</h3>
                        <p>Price: {product.id * 1000}</p>
                        <button onClick={() => handleCart(product.id)} className='addCartBtn'>Add to Cart</button>

                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductList;
