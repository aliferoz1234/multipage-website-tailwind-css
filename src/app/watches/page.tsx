import React from 'react'


const Watches = () => {

    const watchData=[
        {id: 1, name: "Rolex", price: 12000, description: "Luxury Watch", image:"/image-01.jpg"},
        {id: 2, name: "Omega", price: 10000, description: "Sporty Design", image:"/image-02.jpg"},
        {id: 3, name: "Citizen", price: 25000, description: "Sporty and stylish", image:"/image-03.jpg"},
        {id: 4, name: "Seiko", price: 8000, description: "Affordable and reliable", image:"/image-04.jpg"},
        {id: 5, name: "Casio", price: 12000, description: "Bold and rugged", image:"/image-05.jpg"},
        {id: 6, name: "TAG Heuer", price: 12000, description: "Bold and unique", image:"/image-06.jpg"},

    ]
  return (
    <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
        {watchData.map((watch)=>(
            <div key={watch.id} className='watch-card bg-white p-5 rounded-md shadow-md text-center'>
                <img src={watch.image} alt={watch.name} className='w-full rounded-md transition-transform duration-600 transform hover:scale-110'/>
                <h3 className='mt-4 text-2xl font-bold'>{watch.name}</h3>
                <p className='text-gray-500'>{watch.description}</p>
                <div className='price text-blue-500 text-xl font-semibold mt-2'>${watch.price}</div>
                <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>Add to Cart</button>

            </div>
        ))};
      </div>
    
  );
};

export default Watches
