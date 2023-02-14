import React from 'react'
import Proptypes from 'prop-types'
function Header({Text , bgColor , textColor}) {
 
  const headerStyles={
    backgroundColor: bgColor,
    color:textColor,
  }
 
  return (
   
      <header style={headerStyles}>
        <div className="container">
            <h2>{Text}</h2>
        </div>
      </header>
   
  )
}
Header.defaultProps={
    Text : 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor:'#ff6a95'
}
Header.propTypes={
    Text: Proptypes.string ,
    bgColor: Proptypes.string ,
    textColor: Proptypes.string,

}
export default Header
