import React, { useEffect, useState } from "react";
import Table from "./Table";
import "./Recommend.css";
const Recommend = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]); // depandency array;

  const [query, setQuery] = useState("");
  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };
  return (
    <div className="d-flex flex-column ">
      <div className="d-flex Recommend justify-content-center">
        <div className="Recommend_txt">Search Something</div>
        <div className="Recommend_ser">
          <input
            type="text"
            placeholder="Searching.."
            className="search"
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
          ></input>
        </div>
      </div>
      <div className="Reco">
        <div className="table_cont">
          <Table data={search(services)} />
        </div>
      </div>
    </div>
  );
};

export default Recommend;
