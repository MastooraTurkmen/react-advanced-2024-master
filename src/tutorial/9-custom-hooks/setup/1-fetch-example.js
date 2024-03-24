import React, { useState, useEffect, useCallback } from 'react'
import { useFetch } from './2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }, [url])

  useEffect(() => {
    getProducts()
  }, [url, products])

  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
