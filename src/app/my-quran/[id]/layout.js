import React from 'react'
import { Sidebar } from '@/components/quran/sidebar'

export default function SurahLayout({children}) {
  return (
    <div className='h-full block lg:flex justify-between'>
      <Sidebar />
      <div className='h-full w-full lg:w-[calc(100%-400px)] relative'>{children}</div>
    </div>
  )
}
