import { useEffect, useState } from 'react'
import ProductCard from '../components/productcard'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '1.3rem',
          color: '#555',
        }}
      >
        Loading products...
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'white',
      }}
    >
      <main
        style={{
          flex: 1,
          padding: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        {products.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            image={p.image}
            description={p.description}
            category={p.category}
            price={p.price}
          />
        ))}
      </main>

      <footer
        style={{
          backgroundColor: '#2b6cb0',
          color: 'white',
          textAlign: 'center',
          padding: '0.8rem',
        }}
      >
        © 2025 · Make it Better 💙
      </footer>
    </div>
  )
}