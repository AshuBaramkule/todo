import React from 'react'

const CreateTodo = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  return (
    <div>
        <div>
        <input className='p-4 m-4 ' type="text" placeholder='title' onChange={function(e){
          const value = e.target.value;
          setTitle(e.target.value);
        }}></input> <br />
        <input className=' p-4 m-4'  type="text" placeholder='description' onChange={function(e){
          const value = e.target.value;
          setDescription(e.target.value);
        }}></input> <br />
        

        <button className='p-3 m-3 ' onClick={() =>{
          fetch("http://localhost:3000/todo", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title: title,
              description: description,
              completed: false
            })
          })
          .then(async function (res){
            const json = await res.json();
            alert("todo is added successfully")
          })
        }}>Add a ToDo</button>
         </div>
    </div>
  )
}

export default CreateTodo   