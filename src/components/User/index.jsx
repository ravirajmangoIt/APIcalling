import React, { useState, useEffect } from 'react'
import './style.css'


const User = () => {
  const [users, setUsers] = useState([]);  // State for manage user
  const [sortedUsers, setSortedUsers] = useState([]);  // State for sort user by name
  const [isLoading, setIsLoading] = useState(true);   // State for load user 


  // Using uesEffect life cycle  get user data by xml http request
  useEffect(() => {
    const fetchData = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const responseData = JSON.parse(xhr.responseText);
            setUsers(responseData);
            setSortedUsers(responseData);
            setIsLoading(false);
          } else {
            console.error('Error fetching data');
          }
        }
      };
      xhr.send();
    };

    fetchData();
  }, []);

  //Function for sorting user data
  const handleSortByName = () => {
    const sorted = [...users];
    sorted.sort((a, b) => a.name.localeCompare(b.name));
    setSortedUsers(sorted);
  };

  return (
    <div>
      <h1>Vite Project</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div><button onClick={handleSortByName}>Sort by Name</button></div>
          <div>
            <table className='userTable'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody> {sortedUsers.map((user) => (
                <tr key={user.id}>
                  <td> <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="User Icon" /></td>
                  <td> {user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.street}, {user.address.suite}, {user.address.city}</td>
                </tr>
              ))}
              </tbody>

            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
