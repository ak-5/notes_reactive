
export const postData = (formData) => {
	console.log(formData)
	const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: formData.title, description: formData.description, category_id: formData.categoryID, })
    };

    // const apUrl = "http://127.0.0.1:8056/notes"
    const apUrl = "tmg /api/notes"

    fetch(apUrl, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    
}

export const deleteRecords = (id) => {
    // console.log(id)
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordID:id, })
    };

    // const apUrl = "http://127.0.0.1:8056/notes"
    const apUrl = "tmg api/notes"

    return fetch(apUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("Delete API result", data)
            if(data.success) return 1;
        });
}

export const getDate = () => {
    let dtStr = new Date()
    let mon = ("0" + (dtStr.getMonth() +1)).slice(-2)
    let day = ("0" + dtStr.getDate()).slice(-2)
    return dtStr.getFullYear()+'-'+mon+'-'+day
};

export const getRandomNo = () =>  Math.floor((Math.random() * 1000) +1);
