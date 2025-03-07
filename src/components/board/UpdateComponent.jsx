import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {createBoard, deleteBoard, selectBoard, updateBoard} from "../../services/BoardService.js";

const UpdateComponent = () => {

  const {id} = useParams();
  const [board, setBoard] = useState({})

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    title: "",
    writer: "",
    content: ""
  })

  const getBoard = async (id) => {
    selectBoard(id).then(res => {
      setBoard(res.data);
    })
  }

  const fnSaveOrUpdateBoard = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const board = {email, title, writer, content};

      if(window.confirm("등록하시겠습니까?")){
        if (id) {
          updateBoard(id, board).then(res => {
            console.log("수정 : " + res);
            navigate(`/board/${id}`);
          }).catch(error => {
            console.log(error);
          })
        }
        return false;
      } else {
        if(window.confirm("수정하시겠습니까?")){
          createBoard(board).then(res => {
            console.log(res);
            navigate(`/board`);
          }).catch(error => {
            console.log(error);
          })
        }
        return false;
      }
    }
  }

  useEffect(() => {
    if(id){
      getBoard(id);
    }
  }, [id])



  const validateForm = () => {
    let valid = true;

    const errorsCopy = {...errors};

    if(email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = '이메일은 필수 입력입니다.'
      valid = false;
    }

    if(title.trim()) {
      errorsCopy.title = "";
    } else {
      console.log(errorsCopy.title);
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
                  <label className="form-label">Email : </label>
                  <input className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                         type="email"
                         placeholder="Email을 입력하세요"
                         name="email"
                         defaultValue={board.email}
                         onChange={(e) => setEmail(e.target.value)}
                  />
                  { errors.email && <div className="invalid-feedback">{errors.Email}</div> }
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">제목 : </label>
                  <input className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                         type="text"
                         placeholder="제목을 입력하세요"
                         name="title"
                         defaultValue={board.title}
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
                         defaultValue={board.writer}
                         onChange={(e) => setWriter(e.target.value)}
                  />
                  { errors.writer && <div className="invalid-feedback">{errors.writer}</div>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">내용 : </label>
                  <textarea className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                         placeholder="내용을 입력하세요"
                         name="content"
                            defaultValue={board.content}
                         onChange={(e) => setContent(e.target.value)}
                  />
                  { errors.content && <div className="invalid-feedback">{errors.content}</div>}
                </div>
                <button className="btn btn-outline-success" onClick={fnSaveOrUpdateBoard}>수정</button>
                <button className="btn btn-outline-warning" onClick={()=> navigate(`/board/${no}`)}>취소</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default UpdateComponent;