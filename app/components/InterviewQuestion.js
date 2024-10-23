import { Play, Video } from 'lucide-react'
import Image from 'next/image'
import VideoRecorder from './VideoRecorder'
export default function InterviewQuestion() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Interview</h2>
      <p className="text-gray-600 mb-6">Questions are automatically saved so you can relax and only focus on what is important.</p>
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      
      <div className="flex space-x-6">
        <div className="w-1/2">
            <h2 className="text-2xl mb-4">Question</h2>
            <div className="relative bg-yellow-200 rounded-lg overflow-hidden mb-4">
            <Image src="https://img.freepik.com/premium-photo/woman-waving-hello_1320745-28688.jpg" width={400} height={400} alt="Video preview" className="w-full h-48 object-cover" />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-3">
                <Play className="w-8 h-8 text-gray-800" />
              </div>
            </button>
          </div>
          <h3 className="font-semibold mb-2">1. What is your experience in this area?</h3>
        </div>
        <div className="grid grid-cols-[auto_1.5px_auto]">
            <div className="h-[368px] border-x-[1.5px] border-gray-300 mx-auto"></div>
        </div>
        
        <div className="w-1/2 space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span className='bg-gray-200 px-1 py-1 rounded-md font-semibold text-black'>2 Minutes to Answer</span>
            <span className='px-1 py-1 font-semibold text-black'>2 Minutes to Think</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span className='px-1 py-1 font-semibold text-black'>No Retakes</span>
            <span className="flex items-center px-1 py-1 font-semibold bg-gray-200 rounded-md text-black">
              <Video className="w-4 h-4 mr-1 " />
              Video
            </span>
          </div>
          <div className="relative bg-gray-200 rounded-lg overflow-hidden">
            <Image src="https://www.shutterstock.com/image-photo/portrait-headshot-young-adult-asian-600nw-1819882481.jpg" alt="Blurred video preview" width={400} height={400} className="w-full h-48 object-cover filter blur-sm" />
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-3">
                <Video className="w-8 h-8 text-gray-800" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
        <div className="flex justify-end mt-6">
        <button className="bg-teal-600 text-white px-4 py-2 shadow-xl hover:bg-teal-700 flex items-center">
            <Video className="w-4 h-4 mr-2" />
            Record
        </button>
        </div>
    </div>
  )
}