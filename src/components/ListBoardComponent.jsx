import React, {useEffect, useState} from 'react';
import {listBoard} from "../services/BoardService.js";
import {useNavigate} from "react-router-dom";

const ListBoardComponent = () => {

  const [board, setBoard] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listBoard().then(res => {
      setBoard(res.data);
    }).catch(err => {
      console.log(err.message);
    })
  }, [])

  function fnWrite() {
    navigate("/write-board");
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Board</h2>
      <button className="btn btn-primary" onClick={fnWrite}>Write</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>ID</th>
            <th>Title</th>
            <th>Writer</th>
          </tr>
        </thead>
        <tbody>
          {board.map((data, index) => {
            return (
              <tr key={index} onClick={() => navigate(`/board/${data.no}`)}>
                <td>{data.no}</td>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.writer}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListBoardComponent;