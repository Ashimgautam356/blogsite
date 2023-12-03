import React from 'react'
import Banner from '../components/home/Banner'
import EditorsPick from '../components/home/EditorsPick'

const Home = () => {
  return (
    <div className='border border-black flex flex-col items-center'>
      {/* Banner */}
      <Banner></Banner>
      
      {/* Editor's Pick */}
      <EditorsPick></EditorsPick>
    </div>
  )
}

export default Home