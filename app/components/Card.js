import Image from 'next/image'

export default function Card({ imageUrl, jobTitle, date, peopleCount }) {
    return (
        <div className="max-w-sm mx-auto bg-[#e6fbff] p-8 rounded-3xl">

        <div className="max-w-sm bg-[#E0F7F9] rounded-lg overflow-hidden shadow-lg mb-6">
        {/* Image */}
            <Image className="w-full h-64 object-cover" src={imageUrl} alt={jobTitle} width={400} height={400} />
        </div>
        {/* Text Box with Job Details */}
        <div className="bg-white px-4 py-3 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg text-black">{jobTitle}</h2>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-2xl text-black">{peopleCount}</p>
              <p className="text-gray-500 text-sm">People</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
  