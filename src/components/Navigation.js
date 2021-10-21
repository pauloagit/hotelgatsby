import React from "react"
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <nav>
      <Link to={'/'}>Inicio</Link>
      <Link to={'/us'}>Nosotros</Link>
    </nav>
  )
}

export default Navigation
