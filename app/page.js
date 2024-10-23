import React from "react";
import Header from './components/Header'
import MainContent from './components/MainContent'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <MainContent />
      </main>
    </div>
  );
}