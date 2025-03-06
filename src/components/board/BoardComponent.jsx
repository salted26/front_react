import React, {useEffect, useState} from 'react';
import {selectBoard, deleteBoard} from "../../services/BoardService.js";
import {useNavigate, useParams} from "react-router-dom";

const BoardComponent = () => {

  const {no} = useParams();
  const [board, setBoard] = useState({})

  const navigate = useNavigate();

  const getBoard = async (no) => {
    selectBoard(no).then(res => {
      setBoard(res.data);
    })
  }

  const fnUpdateBoard = () => {
    navigate(`/board/update/${no}`);
  }

  const fnDeleteBoard = () => {
    if(window.confirm("삭제하시겠습니까?")){
      deleteBoard(no);
      alert("삭제되었습니다.");
      navigate(`/board`);
    }
    return false;
  }

  useEffect(() => {
    getBoard(no);
  })

  return (
      <div className="container">
        <div className="row">
          <div className="card">
            <h3 className="text-center">Write Board</h3>
            <div className="card-body">
                <div className="form-group mb-2">
                  <label className="form-label">아이디 : </label>
                  <span>&nbsp;{board.id}</span>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">제목 : </label>
                  <span>&nbsp;{board.title}</span>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">작성자 : </label>
                  <span>&nbsp;{board.writer}</span>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">내용 : </label>
                  <div>&nbsp;{board.content}</div>
                </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <button className="btn btn-outline-info" onClick={()=> navigate("/board")}>목록</button>
          <button className="btn btn-outline-warning" onClick={fnUpdateBoard}>수정</button>
          <button className="btn btn-outline-danger" onClick={fnDeleteBoard}>삭제</button>
        </div>
      </div>
  );
};

export default BoardComponent;