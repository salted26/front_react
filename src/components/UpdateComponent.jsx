import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {createBoard, selectBoard} from "../services/BoardService.js";

const UpdateComponent = () => {

  const {no} = useParams();
  const [board, setBoard] = useState({})

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const getBoard = async (no) => {
    selectBoard(no).then(res => {
      setBoard(res.data);
    })
  }

  const updateBoard = async (e) => {
    e.preventDefault();

    if(validateForm()){
      const board = {id, title, writer, content};
      console.log(board);

      try {
        createBoard(board).then(res => {
          console.log(res.data);
          navigate('/');
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    getBoard(no);
  })

  const [errors, setErrors] = useState({
    id: "",
    title: "",
    writer:"",
    content:""
  })

  const validateForm = () => {
    let valid = true;

    const errorsCopy = {...errors};

    if(id.trim()) {
      errorsCopy.id = "";
    } else {
      errorsCopy.id = '아이디는 필수 입력입니다.'
      valid = false;
    }

    if(title.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = '제목은 필수 입력입니다.'
      valid = false;
    }

    if(writer.trim()) {
      errorsCopy.writer = "";
    } else {
      errorsCopy.writer = '작성자는 필수 입력입니다.'
      valid = false;
    }

    if(content.trim()) {
      errorsCopy.content = "";
    } else {
      errorsCopy.content = '내용은 필수 입력입니다..'
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
      <div className="container">
        <div className="row">
          <div className="card">
            <h3 className="text-center">Write Board</h3>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">아이디 : </label>
                  <input className={`form-control ${errors.id ? 'is-invalid' : ''}`}
                         type="text"
                         placeholder="아이디를 입력하세요"
                         name="id"
                         value={board.id}
                         onChange={(e) => setId(e.target.value)}
                  />
                  { errors.id && <div className="invalid-feedback">{errors.id}</div> }
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">제목 : </label>
                  <input className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                         type="text"
                         placeholder="제목을 입력하세요"
                         name="title"
                         value={board.title}
                         onChange={(e) => setTitle(e.target.value)}
                  />
                  { errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">작성자 : </label>
                  <input className={`form-control ${errors.writer ? 'is-invalid' : ''}`}
                         type="text"
                         placeholder="작성자를 입력하세요"
                         name="writer"
                         value={board.writer}
                         onChange={(e) => setWriter(e.target.value)}
                  />
                  { errors.writer && <div className="invalid-feedback">{errors.writer}</div>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">내용 : </label>
                  <textarea className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                         type="text"
                         placeholder="내용을 입력하세요"
                         name="content"
                         value={board.content}
                         onChange={(e) => setContent(e.target.value)}
                  />
                  { errors.content && <div className="invalid-feedback">{errors.content}</div>}
                </div>

                <button className="btn btn-outline-success" onClick={updateBoard}>수정</button>
                <button className="btn btn-outline-warning" onClick={()=> navigate(-1)}>취소</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default UpdateComponent;