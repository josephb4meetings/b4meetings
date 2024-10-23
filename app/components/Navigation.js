import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Navigation() {
  return (
    <div className="flex justify-between items-center py-4">
      <button className="flex items-center text-gray-600 hover:text-gray-900">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <button className="flex items-center text-gray-600 hover:text-gray-900">
        Next
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  )
}