import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{
        backgroundColor: '#0b0d19',
        color: '#f4f5f6',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: 0
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
          <p style={{ marginBottom: '2rem' }}>Page not found.</p>
          <Link href="/en/pokemons" style={{
            color: '#00ff87',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}>
            Go to Home Page
          </Link>
        </div>
      </body>
    </html>
  );
}
