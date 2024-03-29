import React from 'react'
import { SurahList } from './SurahList'

export async function Sidebar() {
  return (
    <div className='p-5 border border-dashed border-black rounded h-[87vh] overflow-scroll fixed w-full max-w-[360px]'>
      <div className='space-y-5'>
        <SurahList />
      </div>
    </div>
  )
}
