import { useState } from "react";
import {getDate, getRandomNo, postData} from './MiddleW'


const Form = (props) => {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [categoryID, setCategoryID] = useState('')


	function handleFormSubmit(e) {
		e.preventDefault()
		console.log("aa", categoryID, title, description)

		let category='Note';
		if(categoryID===2) category='Reminder';
		else if(categoryID===3) category='Temp Note'

		let pos = {
		id: getRandomNo(), title:title, date:getDate(), description:description, category:category
		}
		props.addData(pos)
		postData({title, description, categoryID})
		props.onTog()
	}

	return (
		<div className="card mb-3" >
		<div className="card-body">
		<form onSubmit={handleFormSubmit}>

	  		<h3 className="text-center">NOTES</h3>

		  <div className="mb-3">
		    <label className="form-label">Notes Heading</label>
		    <input className="form-control" type="text" name="title" placeholder="Note Title" required value={title} onChange={(e) => setTitle(e.target.value)}
		       />
		   </div>

		   <div className="mb-3">
		    <label className="form-label">Description</label>
		    <textarea className="form-control" type="text" name="description" placeholder="Note Details" required value={description} onChange={(e) => setDescription(e.target.value)} >
		      </textarea>
		   </div>

		   <div className="mb-3">
		  <label className="form-label">Category</label>
		  <select className="form-control" name="category_id" value={categoryID} required onChange={(e) => setCategoryID(e.target.value)}>
			  <option value="0">Select a Category
			  </option>
			  <option value="1">Note</option>
			  <option value="2">Reminder</option>
			  <option value="3">Temp Note</option>
			</select>
		  <small>We'll never share your email with anyone else.</small>
		  </div>

		  <button className="btn btn-primary px-4" type="submit">Submit</button>
		  <a className="btn btn-link ms-3">Close</a>

		</form>
		</div>
		</div>
	)
}

export default Form;