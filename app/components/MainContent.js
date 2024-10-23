import Image from 'next/image'
import Card from './Card'
import Button from './ui/button'
import Link from 'next/link'

export default function MainContent() {
  return (
    <div className="flex justify-between items-center p-8 bg-[#fff]">
      <div className="w-1/2 space-y-6">
        <Card
        imageUrl="https://img.freepik.com/premium-photo/smiling-woman-with-glasses-sitting-table-office-generative-ai_561855-36494.jpg"
        jobTitle="Personal Assistant"
        date="14/07"
        peopleCount="08"
      />
      </div>
      <div className="w-1/2 space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          The <span className="bg-[#b3f5ff] px-2">cost-effective</span><br />
          way to screen<br />
          candidates at scale
        </h1>
        <p className="text-gray-600 text-lg">
          Traditional hiring practices are expensive and time-consuming. Reduce your hiring overhead with candidate screening software.
        </p>
        <div className="space-x-4">
          <Button variant="default" className='bg-teal-600 hover:bg-teal-800 text-white'>Create interview</Button>
          <Link href={{
            pathname: '/interview',
          }}> 
          <Button variant="outline" className='text-black'>Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}