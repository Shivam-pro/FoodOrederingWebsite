import React, { useContext } from 'react'
import './fooditemslist.css'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../fooditem/Fooditem'

const Fooditemslist = ({category}) => {
  const { food_list } = useContext(Storecontext)
  
  return (
    <div className='food-items-list-container'>
      {food_list.map((item, index) => {
        if(category === "All" || category === item.category){
          return (
            <Fooditem key={index} id={item._id} image={item.image} name={item.name} description={item.description} price={item.price}/>
          )
        }
      })}
    </div>
  )
}

export default Fooditemslist