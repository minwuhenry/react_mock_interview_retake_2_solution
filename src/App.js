import React, { useEffect, useState } from "react";
import UserTodos from './UserTodos.js'

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {/* Write your code below */}
      <div>
        <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <p onClick={() => setCurrentUser(user)} >
                {user.name}
              </p>
            </li>
          
          ))
        }
        </ul>
        
      </div>
      <div>
        <UserTodos userId={currentUser.id} />
        
      </div>
    </div>
  );
}

export default App;
