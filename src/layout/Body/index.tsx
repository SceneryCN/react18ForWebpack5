import React, { FC } from 'react';

const Body:FC<any> = (props) => {
	const {children} = props
	return (
		<div style={{flex:1}}>
			{
				children
			}
		</div>
	);
};

export default Body;
