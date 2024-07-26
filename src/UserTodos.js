import React, { useEffect, useState } from "react";

function UserTodos({userId}) {
  {/* Write your code below */}
  
  const [toDos, setToDos] = useState([]);
  
  useEffect(() => {
    if(userId)
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then(setToDos)
      .catch((error) => {
        console.log(error);
      });
  }, [userId])
  
  if(userId && toDos.length> 0){
    
    return(
      <div>
        <h2>To Dos</h2>
        <ul>
          {
            toDos.map(toDo => (
              <li key={toDo.id}>
                <p>{toDo.title}</p>
                </li>
            ))
          }
        </ul>
      </div>
    )
  }else {
    return "Loading ----"
  }
  
  

}

export default UserTodos;
