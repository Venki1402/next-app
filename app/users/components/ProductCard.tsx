import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = () => {
  return (
    <div className={styles.card}>
        <p className='p-5 my-5 bg-sky-400 text-white text-4xl hover:bg-sky-600'>ProductCard</p>
        <AddToCart/>
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
    </div>
  )
}

export default ProductCard