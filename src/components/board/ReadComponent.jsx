import React, {useEffect, useState} from 'react';
import {selectBoard, deleteBoard} from "../../services/BoardService.js";
import {useNavigate, useParams} from "react-router-dom";

const ReadComponent = () => {

  const {id} = useParams();
  const [board, setBoard] = useState({})

  const navigate = useNavigate();

  const getBoard = (id) => {
    selectBoard(id).then(res => {
      setBoard(res.data);
    })
  }

  const fnUpdateBoard = () => {
    navigate(`/board/update/${id}`);
  }

  const fnDeleteBoard = () => {
    if(window.confirm("삭제하시겠습니까?")){
      deleteBoard(id);
      alert("삭제되었습니다.");
      navigate(`/board`);
    }
    return false;
  }

  useEffect(() => {
    if(id) {
      getBoard(id);
    } else {
      alert("게시물이 존재하지 않습니다.");
      navigate(`/board`);
    }
  },[id])

  return (
      <div className="container">
        <div className="card">
          <div className="mb-3 row">
            <label htmlFor="id" className="col-sm-2 col-form-label">글번호</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="id"
                     value={board.id || ''}/>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="email" defaultValue={board.email || ''}/>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="writer" className="col-sm-2 col-form-label">작성자</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="writer" defaultValue={board.writer || ''}/>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="title" className="col-sm-2 col-form-label">제목</label>
            <div className="col-sm-10">
              <input type="text" readOnly className="form-control-plaintext" id="title" defaultValue={board.title || ''}/>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="content" className="col-sm-2 col-form-label">내용</label>
            <div className="col-sm-10">
              <textarea type="text" readOnly className="form-control-plaintext" id="content" defaultValue={board.content || ''}/>
            </div>
          </div>
          <div className="btn-bottom-box">
            <button className="btn btn-outline-info btn-read" onClick={() => navigate("/board")}>목록</button>
            <button className="btn btn-outline-warning btn-read" onClick={fnUpdateBoard}>수정</button>
            <button className="btn btn-outline-danger btn-read" onClick={fnDeleteBoard}>삭제</button>
          </div>
        </div>
      </div>
  );
};

export default ReadComponent;