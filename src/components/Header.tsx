import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          Logo
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
          <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

