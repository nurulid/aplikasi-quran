import React from 'react'
import { Sidebar } from '@/components/quran/sidebar'

export default function SurahLayout({children}) {
  return (
    <div className='grid grid-cols-3'>
      <div className='relative'>
        <Sidebar />
      </div>
      <div className='col-span-2'>{children}</div>
    </div>
  )
}
