// import { useState } from "react";
const TopButton = ({onTog, btnNm}) => {

	return (
		<div className="clearfix mb-3">
		<button className="btn btn-outline-primary float-end" onClick={ () => { onTog() } } >{btnNm}
		</button>
		</div>
	)
}

export default TopButton;

