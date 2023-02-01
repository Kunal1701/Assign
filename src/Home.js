import React from 'react'
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const Api = "https://jsonplaceholder.typicode.com/users";
  
    const getdata = async (url) => {
      try {
        const response = await fetch(url);
        const res = await response.json();
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getdata(Api);
    }, []);
    function Show(Id) {
        navigate("/details", { state: { Id }  });
    }
    return data.length === 0 ? ( // if data is empty then show loading else show data
      <div className="App">
        <h1>Loading...</h1>
      </div>
    ) : (
      <div className="App">
      <table className="table">
              <thead>
                <tr>
                  <th scope="col">COMPANY NAME</th>
                  <th scope="col">CONTACT</th>
                  <th scope="col">CITY</th>
                  <th scope="col">STREET</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
        {data.map((item,index) => {
          return (
              <tbody key={index}>
                <tr>
                  <td>{item.company.name}</td>
                  <td>{item.name}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.street}</td>
                  <td> <button onClick={() => Show(item.id)} className="xyz1">View Details</button> </td>
                </tr>
  
              </tbody>
            
          );
        })}
        </table>
      </div>
    );
}

export default Home
