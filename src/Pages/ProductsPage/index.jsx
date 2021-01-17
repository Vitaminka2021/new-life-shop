import React from 'react'
// import { useParams, useLocation, withRouter } from 'react-router-dom'

const ProductsPage = ({ ...props }) => {
  const subcategory = props.location.state.subcategory
  // console.log('subcategory', subcategory)
  console.log('props', props)
  // let { id, alias } = useParams()
  // let location = useLocation()
  // console.log('location', location)
  // console.log('id', id)
  // console.log('alias', alias)
  return (
    <div>
      <p>{subcategory.subcategoryName}</p>
    </div>
  )
}

export default ProductsPage
