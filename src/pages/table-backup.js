import { useState, useEffect } from "react";
import TopButton from './addButton'
import Form from './Form'
import {getData, postData} from './MiddleW'

const mainProfiles = [
	{
		no:1, name:"Akshay", dob:"19 May 1993", mobile:"POCO F1", city:"Kolhapur", lang:"PHP"
	},
	{
		no:2, name:"Kedar", dob:"18 August 1992", mobile:"Vivo Y2", city:"Belgao", lang:"ErLang"
	},
	{
		no:3, name:"Amit", dob:"02 March 1994", mobile:"Micromax", city:"Chinchwad", lang:"Picaso"
	},
];

export default function MyTable () {

useEffect(() => { getData() }, []);

const [formState, setFormState]=useState(false)
const [data, setData] = useState([])
	
	console.log(data)

function addData(dt) {
	console.log("received data is: ", dt)
	let newData = [...data, dt]
	console.log('newData', newData)
	setData(newData)
}

function hideShowForm() {
	console.log('hide shpw')
	setFormState(!formState)
}

	return (
		<>
		<TopButton onTog={hideShowForm} />
		{formState && <Form addData={addData} />}
		<article>
		<table role="grid">
		  <thead>
		    <tr style={{textTransform:"uppercase"}}>
		      <th scope="col">#</th>
		      <th scope="col">Name</th>
		      <th scope="col">DOB</th>
		      <th scope="col">Mobile</th>
		      <th scope="col">City</th>
		      <th scope="col">Language</th>
		    </tr>
		  </thead>
		  <tbody>
		  	{
		  		data.length? (data.map( (pr)=>{
		  			return <tr>
				      <th scope="row">{pr.no}</th>
				      <td>{pr.name}</td>
				      <td>{pr.dob}</td>
				      <td>{pr.mobile}</td>
				      <td>{pr.city}</td>
				      <td>{pr.lang}</td>
				    </tr>	
		  		})
		  		)  : (<tr>
				      <td scope="row" colSpan="6" style={{textAlign:"center", textTransform:"uppercase"}}>No Data Found..</td>
				    </tr>	)
		  	}
		    
		  </tbody>
		</table>
		</article>
		</>
	);
}

// export default myTable;