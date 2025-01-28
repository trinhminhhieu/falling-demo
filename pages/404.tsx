import Link from 'next/link'

export default function FourOhFour() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="mb-3">Page not found</h1>
        <Link href="/" className="text-primary text-decoration-underline">
          Go Home
        </Link>
      </div>
    </div>
  )
}
