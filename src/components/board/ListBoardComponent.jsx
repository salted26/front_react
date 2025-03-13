import React, {useEffect, useState} from 'react';
import {listBoard} from "../../services/BoardService.js";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const ListBoardComponent = () => {

  const [board, setBoard] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getBoardList();
  }, [])

  const fnWrite = () => {
    navigate("/write");
  }

  const getBoardList = async () => {
    await listBoard().then(res =>{
      setBoard(res.data);
    }).catch(err =>{
      console.log(err.message);
    });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Board</h2>
      <form action={getBoardList}>
        <input type="text"
               placeholder="검색"
               className="search-input"
               onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className="w-[10%]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th align="center">No</th>
            <th align="center">Title</th>
            <th align="center">Writer</th>
            <th align="center">등록일</th>
            <th align="center">조회수</th>
          </tr>
        </thead>
        <tbody>
          {board.map((data, index) => {
            return (
              <tr key={index} onClick={() => navigate(`/board/${data.id}`)}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.writer}</td>
                <td>{data.created_at}</td>
                <td align="center">{data.views}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="btn-bottom-box">
        <button className="btn btn-primary" onClick={fnWrite}>Write</button>
      </div>
    </div>
  );
};

export default ListBoardComponent;