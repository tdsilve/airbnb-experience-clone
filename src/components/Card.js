import React from 'react'
import iconStar from '../assets/images/icon-star.svg'
export default function Card({data}) {
  return (
    <>
    {data?.map(card => 
      <div key={card.id}>
        <div className='position-relative'>
          <img src={card.photo} alt='card ' className='card-image'></img>
          <p className='card-status position-absolute top-0 text-uppercase'>{card.status}</p>
        </div>
        <div className='mt-2 card-info d-flex align-items-center'>
          <img src={iconStar} alt='icon of a star' className='card-star'/>
          <span>{card.star}</span>
          <span className='text-grey'>{card.comments}</span>
          <span className='text-grey'>{card.country}</span>
        </div>
        <p className='mt-2 mb-2'>{card.title}</p>
        <p>
          <span className='fw-bold'>From {card.cost} </span> / person
        </p>
      </div>
    )}
   </>
  )
}
