import React from 'react'
import { SurahList } from './surahList'

export async function Sidebar() {
  return (
    <div className='p-5 border border-dashed rounded h-[87vh] overflow-scroll fixed w-full max-w-[360px]'>
      <div className='space-y-3'>
        <SurahList titleOnly={true}/>
      </div>
    </div>
  )
}
