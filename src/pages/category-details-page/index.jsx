import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryDetailsPage = () => {
	const params = useParams()
  return (
	<div>
	  Kategari detay sayfası

	  <pre>{JSON.stringify(params,null,2)}</pre>
	</div>
  )
}

export default CategoryDetailsPage
