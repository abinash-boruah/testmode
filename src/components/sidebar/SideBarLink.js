import React from 'react'

const sideBarLinkStyle = {
  padding: '0.5em'
    
}

const SideBarLink = ({icon, text}) => (
     <div style={sideBarLinkStyle}> <i className={"icon ion-md-"+icon}></i> {text}</div>
)
export default SideBarLink