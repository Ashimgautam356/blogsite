import React from 'react'
import Banner from '../components/home/Banner'
import EditorsPick from '../components/home/EditorsPick'
import News from '../components/home/News'
import Pursuites from '../components/home/Pursuites'
import Gear from '../components/home/Gear'
import HealtFitness from '../components/home/HealtFitness'
import FoodDrink from '../components/home/FoodDrink'

const Home = () => {
  return (
    <div className='border border-black flex flex-col items-center'>
      {/* Banner */}
      <Banner></Banner>
      
      {/* Editor's Pick */}
      <EditorsPick></EditorsPick>

      {/* News */}
      <News></News>

      {/* pursuits */}
      <Pursuites></Pursuites>

      {/* Gear */}
      <Gear></Gear>

      {/* Healt and Fitness */}
      <HealtFitness></HealtFitness>

      {/* Food and Drink */}
      <FoodDrink></FoodDrink>
      {/* Style */}
      {/* Travel */}


    </div>
  )
}

export default Home