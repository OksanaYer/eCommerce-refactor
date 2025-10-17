import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header
      style={{
        backgroundColor: '#2b6cb0',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
      }}
    >
      <h1>FakeShop</h1>

      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          Cart
        </Link>
      </nav>
    </header>
  )
}