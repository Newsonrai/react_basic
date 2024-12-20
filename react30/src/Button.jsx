import React from 'react'

const Button = (props) => {
    const name = props.name // {name: "Register"} {name: "Login"} {name: "Logout"} 
  return (
    <>
    <button>{name}</button>  
    </>
  )
}

export default Button
