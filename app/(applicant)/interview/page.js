'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import Header from '@/app/components/Header';
import Navigation from '@/app/components/Navigation';
import InterviewQuestion from '@/app/components/InterviewQuestion';
import Sidebar from '@/app/components/Sidebar';

const VideoRecorder = dynamic(() => import('@/app/components/VideoRecorder'), { ssr: false });

const Interview = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Navigation />
        <div className="flex space-x-8">
          <div className="w-3/4">
            <InterviewQuestion />
          </div>
          <div className="w-1/4">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Interview