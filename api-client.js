const baseUrl = 'http://localhost:3000/'

//GET RREQUEST
const getApi = async function(){
    const res = await fetch(baseUrl,{
        headers: {
            "Content-Type": "application/json"
        }
    });
    const result = await res.json();

    return  result;
}

//POST RREQUEST
const postApi = async function(task){
    await fetch(baseUrl,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            "Content-Type": "application/json"
        }
    });
}

//DELETE RREQUEST
const delApi = async function(id){
    await fetch(baseUrl + id, {
        method: "DELETE"
    })
}

getAllTasks();