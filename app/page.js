'use client'
import dynamic from 'next/dynamic';
const VideoRecorder = dynamic(() => import('../components/VideoRecorder'), { ssr: false });

export default function Home() {
  return (
    <div>
      <VideoRecorder />
    </div>
  );
}
