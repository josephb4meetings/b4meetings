import Link from 'next/link'
import { Bell } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex justify-around items-center p-4 bg-white">
    <Link href="/">
      <div className="flex items-center space-x-5">
        <div className="w-8 h-8 bg-black rounded-sm"></div>
        <span className="font-bold text-lg">b4meetings</span>
      </div>
    </Link>
      <nav>
        <ul className="flex space-x-6">
          {['Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'].map((item, index) => (
            <li key={index}>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Bell className="w-5 h-5 text-gray-600" />
      </button>
    </header>
  )
}