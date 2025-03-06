import React, {useEffect, useState} from 'react';
import {boardList} from "../../services/BoardService.js";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const ListBoardComponent = () => {

  const [board, setBoard] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const pageSize = 10;
  let page = 0;

  useEffect(() => {
    getBoard();
  }, [searchKeyword])

  const fnWrite = () => {
    navigate("/write-board");
  }

  const getBoard = async () => {
    if(searchKeyword === "" || searchKeyword === undefined) {
      await boardList(page, pageSize, searchKeyword).then(res => {
        setBoard(res.data.content);
        getTotalPages(res.data);
      }).catch(err => {
        console.log(err.message);
      })
    } else {
      await boardList(page, pageSize, searchKeyword).then(res =>{
        setBoard(res.data.content);
        getTotalPages(res.data);
      }).catch(err =>{
        console.log(err.message);
      });
    }
  }

  const getTotalPages = (data) => {
    if(data.page.totalPages !== 0 || data.page.totalPages !== undefined) {
      let page = [];
      for (let i = 1; i < data.page.totalPages+1; i++) {
        page.push(i);
      }
      setTotalPage(page)
    }
    return false;
  }

  const getPage = (page) => {
    page = page-1;
    boardList(page, pageSize, searchKeyword).then(res => {
      setBoard(res.data.content);
    });
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Board</h2>
      <form action={getBoard}>
        <input type="text"
               placeholder="검색"
               className="search-input"
               onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button className="w-[10%]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <button className="btn btn-primary" onClick={() => fnWrite}>Write</button>
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
              <tr key={index} onClick={() => navigate(`/board/${data.no}`)}>
                <td>{data.no}</td>
                <td>{data.title}</td>
                <td>{data.writer}</td>
                <td>{data.created_at}</td>
                <td align="center">{data.views}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <nav aria-label="Page navigation example" style={{display: 'flex', justifycontent: 'center'}}>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {totalPage.map((page, index) => {
            return (
              <li className="page-item" key={index}>
                <a className="page-link" href="#" onClick={() => getPage(page)}>{page}</a>
              </li>
            )
          })}
          <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListBoardComponent;