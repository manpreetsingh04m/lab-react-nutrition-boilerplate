import { useState } from 'react'
import './App.css'
import Search from '../Component/Search'
import FoodBox from '../Component/FoodBox'
import foodData from '../resources/FoodData'

function App() {

  const [search , setSearch] = useState("")

  return (
    <>
      <h1>PRO NUTRITION 🥝</h1>
      <Search setSearch={setSearch} />

      {foodData.filter((e)=>{
        return e.name.toLowerCase().includes(search.toLowerCase())
      }).map((e,i)=>{
        return <FoodBox data={e} index={i} />
      })}

    </>
  )
}

export default App
  