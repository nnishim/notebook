import React from 'react'
import './Record.css'

function Record({value, remove, price, count}) {
	return (
		<div className="record">
			<div className="name">{value}</div>
			<div className="price">{price} <span>сом</span></div>
			<div className="count">кол-во: {count}</div>
			<button className='btn' onClick={remove}>x</button>
		</div>
	)
}

export default Record