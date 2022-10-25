import { useState, useEffect } from "react";
import TopButton from './addButton'
import DeleteButton from './DeleteButton'
import Form from './Form'
// import {postData, getDate} from './MiddleW'


export default function MyTable () {

const apUrl = "tmg /api/notes"
// const apUrl = "http://127.0.0.1:8056/notes"
useEffect(() => {

	fetch(apUrl)
	    .then((res) => res.json()).then((json) => {
	        console.log("retu", json.data)
	        setData(json.data)
    })

}, []);

const [btnName, setBtnName]=useState('+ New Record')
const [formState, setFormState]=useState(false)
const [data, setData] = useState([])
	
console.log(data)

function addData(dt) {
	console.log("received data is: ", dt)
	let newData = [...data, dt]
	console.log('newData', newData)
	setData(newData)
}

function hideShowForm(e) {
	console.log('hide shpw')
	setFormState(!formState)
	setBtnName(btnName==='+ New Record' ? 'Close Form': '+ New Record')
}

function getClass(cat) {
	let cls;
	switch (cat) {
		case 2:
			cls='tr_reminder';
			break;
		case 3:
			cls='tr_tempNote';
			break;
		default:
			cls="tr_note"

	}
	return cls
}

	return (
		<>
		<TopButton onTog={hideShowForm} btnNm={btnName}/>
		{formState && <Form addData={addData} onTog={hideShowForm} />}
		<article>
	{/*table-borderless/striped/sm*/}
		<table className="table table-bordered">
		  <thead className="table-light">
		    <tr style={{textTransform:"uppercase"}}>
		      <th scope="col">#</th>
		      <th scope="col">Date</th>
		      <th scope="col">Title</th>
		      <th scope="col">Description</th>
		      {/*<th scope="col">Category</th>*/}
		      <th scope="col">Action</th>
		    </tr>
		  </thead>
		  <tbody>
		  	{
		  		data.length? (data.map( (pr)=>{
		  			return <tr className={getClass(pr.category_id)} key={pr.id}>
				      <th scope="row">{pr.id}</th>
				      <td>{pr.title}</td>
				      <td>{pr.date}</td>
				      <td>{pr.description}</td>
				      {/*<td>{pr.category}</td> */}
				      <td>
				      	<DeleteButton id={pr.id} />
				      </td>
				    </tr>
		  		})
		  		)  : (<tr>
				      <td colSpan="6" style={{textAlign:"center", textTransform:"uppercase"}}>No Data Found..</td>
				    </tr>	)
		  	}
		    
		  </tbody>
		</table>
		</article>
		</>
	);
}

// export default myTable;