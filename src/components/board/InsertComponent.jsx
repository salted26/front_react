import React, {useState} from 'react';
import {createBoard, updateBoard} from "../../services/BoardService.js";
import {useNavigate, useParams} from "react-router-dom";

const InsertComponent = () => {

  const {id} = useParams();

  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const fnSaveOrUpdateBoard = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const board = {email, title, writer, content};
      if (!id) {
        if(window.confirm("등록하시겠습니까?")){
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

  const [errors, setErrors] = useState({
    email: "",
    title: "",
    writer:"",
    content:""
  })

  const validateForm = () => {
    let valid = true;

    const errorsCopy = {...errors};

    if(email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = '아이디는 필수 입력입니다.'
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
                  <label className="form-label">이메일 : </label>
                  <input className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                         type="email"
                         placeholder="이메일을 입력하세요"
                         name="email"
                         onChange={(e) => setEmail(e.target.value)}
                  />
                  { errors.email && <div className="invalid-feedback">{errors.email}</div> }
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">제목 : </label>
                  <input className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                         type="text"
                         placeholder="제목을 입력하세요"
                         name="title"
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
                         onChange={(e) => setWriter(e.target.value)}
                  />
                  { errors.writer && <div className="invalid-feedback">{errors.writer}</div>}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">내용 : </label>
                  <input className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                         type="text"
                         placeholder="내용을 입력하세요"
                         name="content"
                         onChange={(e) => setContent(e.target.value)}
                  />
                  { errors.content && <div className="invalid-feedback">{errors.content}</div>}
                </div>
                <button className="btn btn-outline-success" onClick={fnSaveOrUpdateBoard}>Write</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );



};

export default InsertComponent;