import React, { useState } from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu'

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
