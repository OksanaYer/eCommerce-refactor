import HowMany from './howmany'

export default function ProductCard({ title, image, description, category, price }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '6px',
        width: '250px',
        padding: '1rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'contain',
          marginBottom: '0.8rem',
        }}
      />

      <h3
        style={{
          fontSize: '1rem',
          margin: '0 0 0.3rem 0',
          color: '#222',
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.85rem',
          color: '#666',
          margin: '0 0 0.5rem 0',
          lineHeight: '1.3',
        }}
      >
        {description}
      </p>

      <p
        style={{
          fontSize: '0.9rem',
          color: '#111',
          margin: '0 0 1rem 0',
        }}
      >
        Category: {category}
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>
        {new Intl.NumberFormat('de-DE',{
          style:"currency",
          currency:"EURO"
        }).format(price)}
      
        </span>

        <HowMany />
      </div>
    </div>
  )
}


