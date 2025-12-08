import React from 'react'
import Header from '@/components/Header';
import { FiTool } from 'react-icons/fi';

const page = () => {
  return (
    <div>
      <Header activePage="contact" />
      
      <main className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <FiTool className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-light text-gray-600 italic">
            Contact Us Page Under Development
          </h2>
        </div>
      </main>
    </div>
  )
}

export default page;