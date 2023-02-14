import React from 'react'
import PropType from 'prop-types'

function Card({children,reverse}) {
  return <div className='card'
  style={{backgroundColor:reverse?'rgba(0,0,0,0.4)':'#fff'
  ,
  color: reverse ? '#fff':'#000',}}>{children}</div>
    
}
Card.defaultProps={
    reverse: false,
}
Card.propType={
 reverse : PropType.boolean,
 children : PropType.node.isRequired
}
export default Card
