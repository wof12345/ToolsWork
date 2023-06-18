import React from "react";
import "./Recommend.css";
const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="Table_distance">Name</th>

          <th className="Table_distance">tags</th>
        </tr>
        {data.map((item) => (
          <tr key={item._id}>
            <td className="Table_distance">{item.name}</td>

            <td className="Table_distance">
              {item.tags.map((e) => (e += " "))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
