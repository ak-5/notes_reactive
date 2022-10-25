import {deleteRecords} from './MiddleW'

const handleDelete = (e, btnID) => {
	console.log("ID is:", btnID)

	if(window.confirm(`Are you sure to delete this Record with ID: ${btnID}?`)) {
		let deleteRes = deleteRecords(btnID)

		deleteRes.then((res) => {
			console.log(res)
			deleteRow(e, res)
		})
	}
}

const deleteRow = (e, fl) => {
	if(fl) e.target.closest('td').parentElement.remove()
}

const DeleteButton = (props) => {
	return  (
		<button className="btn btn-danger btn-sm" onClick={(e) => handleDelete(e, props.id)}>Delete</button>
	)	
}

export default DeleteButton;