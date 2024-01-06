import React, { useContext, useEffect, useState } from 'react'
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

import {AuthContext} from '../context/authContext'
const Home = () => {
  const [allPost , setAllPost] = useState([])
  const {posts} = useContext(AuthContext)

  useEffect(()=>{
    const fetchingPost = async ()=>{
      try{
        const respp = await posts()
        setAllPost(respp)
      }catch(err){
        console.log(err)
      }
    }
    fetchingPost();
  },[posts])

  // banner post
  const banner = allPost?.filter(post=> post.credit ===2)

  // editors pick 
  const editorPick = allPost?.filter(post=> post.credit ===1)

  // Food and drink posts 
  const foodandDrink = allPost?.filter(post => post.cate === 'Food & Drink' ).reverse().slice(0,4)

  // gear posts
  const gear = allPost?.filter(post => post.cate === 'gear' ).reverse().slice(0,4)

  // health and fitness posts
  const healthandfitness = allPost?.filter(post => post.cate === 'Healt & Fitness' ).reverse().slice(0,4)

  // news posts
  const news = allPost?.slice(0,4)

  // style posts
  const style = allPost?.filter(post => post.cate === 'Style' ).reverse().slice(0,4)

  // travel posts 
  const travel = allPost?.filter(post => post.cate === 'Travel' ).reverse().slice(0,4)


  return (
    <div className='flex flex-col items-center pt-16 '>
      {/* Banner */}
      <Banner props={banner}></Banner>
      
      {/* Editor's Pick */}
      <EditorsPick props={editorPick}></EditorsPick>

      {/* News */}
      <News props={news}></News>

      {/* Gear */}
      <Gear props={gear}></Gear>

      {/* Healt and Fitness */}
      <HealtFitness props={healthandfitness}></HealtFitness>

      {/* Food and Drink */}
      <FoodDrink props={foodandDrink}></FoodDrink>
      
      {/* Style */}
      <Style props={style}></Style>

      {/* Travel */}
      <Travel props={travel}></Travel>


    </div>
  )
}

export default Home