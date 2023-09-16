import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const Products = () => {
  const {data, isLoading, error } = useFetch('products')
  return <div>Products</div>
  
}
