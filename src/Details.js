import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {useNavigate } from "react-router-dom";
import "./Details.css"

const Details = () => {
    const navigate = useNavigate();
  const location = useLocation();
  let Id = location.state.Id;
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
  function Show() {
        navigate("/");
    }

  return (
    <div>
      {data.map((item, index) => {
        if (item.id === Id) {
          return (
            <div className="container" key={index}>
                <br />
                <h1 className="font-bold text-2xl">Company Name :</h1>
                <h2 className="font-semibold text-xl">{item.company.name}</h2>
                <br />
                <div className="xyz p-3">
                <h2 className="font-bold">Description</h2>
                <p>{item.company.catchPhrase}, {item.company.bs}</p>
              <br />
              <div className="row">
                <div className="column">
                    <h2 className="font-bold">Contact Person</h2>
                    <p>{item.name}</p>
                    <br />
                    <h2 className="font-bold">Email</h2>
                    <p>{item.email}</p>
                    <br />
                    <h2 className="font-bold">Phone</h2>
                    <p>{item.phone}</p>
                    <br />
                    <h2 className="font-bold">Website</h2>
                    <p>{item.website}</p>
                </div>
                <div className="column">
                    <h2 className="font-bold">Address</h2>
                    <p>{item.address.street}, {item.address.suite}, {item.address.city}</p>
                    <br />
                    <h2 className="font-bold">Zipcode</h2>
                    <p>{item.address.zipcode}</p>
                    <br />
                    <h2 className="font-bold">City</h2>
                    <p>{item.address.city}</p>
                    <br />
                    <h2 className="font-bold">Street</h2>
                    <p>{item.address.street}</p>

                </div>
              </div>
                <br />
              <button onClick={() => Show()} className="xyz1">GO BACK</button>
            </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Details;
