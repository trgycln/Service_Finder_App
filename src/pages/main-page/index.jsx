import React from 'react'
import { useSelector } from 'react-redux'
import CategoryBox from '../../components/category-box'
import { Row, Col } from "react-bootstrap"

const MainPage = () => {
	const {categoryState} = useSelector(state =>state)
	console.log(categoryState.categories);
  return (
<div>
	<h2 className='text-center'>Kategoriler</h2>
<Row>

	{
		!categoryState.initialized ? 
		(<div className='text-center'>Loading...</div>) : 
		(categoryState.categories.map((item, index)=>{
			return <Col key={index} lg={3} md={4} sm={6}>
			<CategoryBox item={item}/>
			</Col>
		}))
	}
	</Row>
</div>
  )
}

export default MainPage
