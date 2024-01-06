import React from 'react'
import Banner from '../components/home/Banner'
import EditorsPick from '../components/home/EditorsPick'
import News from '../components/home/News'
import Pursuites from '../components/home/Pursuites'
import Gear from '../components/home/Gear'
import HealtFitness from '../components/home/HealtFitness'
import FoodDrink from '../components/home/FoodDrink'
import Style from '../components/home/Style'
import Travel from '../components/home/Travel'
import Latest from '../components/home/Latest'

const Home = () => {
  return (
    <div className='flex flex-col items-center pt-16 '>
      {/* Banner */}
      <Banner></Banner>
      
      {/* Editor's Pick */}
      <EditorsPick></EditorsPick>

      {/* News */}
      <News></News>

      {/* Gear */}
      <Gear></Gear>

      {/* Healt and Fitness */}
      <HealtFitness></HealtFitness>

      {/* Food and Drink */}
      <FoodDrink></FoodDrink>
      
      {/* Style */}
      <Style></Style>

      {/* Travel */}
      <Travel></Travel>


    </div>
  )
}

export default Home