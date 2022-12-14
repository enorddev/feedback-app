import React from 'react'

export default function FeedbackStats({feedback}) {
   //Calculate rating average//
   
   let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
   }, 0) / feedback.length

   //    MAKE ONE DECIMAL PLACE
   average = average.toFixed(1).replace(/[.,]0$/,'') 
   

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length}Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
