import React from 'react'

const Admin = () => {
  return (
    <div className='border flex flex-row justify-center items-center border-black w-screen h-screen pr-4 pl-4'>
        <form className=' sm:w-full w-3/6 grid grid-cols-3 gap-3 sm:1 '>

            <div className='col-span-1'>
                <input type="text" placeholder='Heading' className='border border-gray-300 text-lg'/>
            </div>
            <div className='col-span-1'>
                <input type="text" placeholder='Publisher' className='border border-gray-300 text-lg'/>
                
            </div>
            <div className='col-span-1'>
                <input type="text" placeholder='Decription' className='border border-gray-300 text-lg'/>
                
            </div>
            <div className='col-span-1'>
                <select className='border border-gray-300'>
                    <option value="select">Select</option>
                    <option value="Gear">Gear</option>
                    <option value="HealtFitness">HealtFitness</option>
                    <option value="FoodDrink">FoodDrink</option>
                    <option value="Style">Style</option>
                    <option value="Travel">Travel</option>
                </select>
            </div>
            <div className='col-span-1'>
                <label htmlFor="mainPhoto">Main Photo</label>
                <input type="file" accept='.jpg,.jpeg, .png'  />
            </div>
            <div className='col-span-1'>
                <label htmlFor="subPhoto">sub Photo</label>
                <input type="file" accept='image.jpg, image.jpeg, image.png' />
            </div>
            <div className='col-span-3 text-center'>
                <button className='bg-red-500 pl-10 pr-10 text-white text-xl'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Admin