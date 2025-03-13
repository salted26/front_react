import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import {listBoard} from "../../services/BoardService.js";
import {columns} from "./BoardColumns.js";
import {useNavigate} from "react-router-dom";
import {BootyPagination} from "./pagination.jsx";

const customStyles = {
  // th css
  headCells: {
    style:{
      backgroundColor: 'black',
      color: 'white',
      fontSize: '17px',
      fontWeight: 'bolder',
    }
  }
}

const TestList = () => {

  const [board, setBoard] = useState([]);
  const [filter, setFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getBoardList() ;
  }, [])

  const getBoardList = async () => {
    await listBoard().then(res =>{
      setBoard(res.data);
      setIsLoading(false);
    }).catch(err =>{
      console.log(err.message);
    });
  }

  if(isLoading){
    return <h2>Loading...</h2>
  }

  const handleChange = (e) => {
    if(e.target.value !== undefined || e.target.value !== "") {
      setFilter(e.target.value);
    }
    const newRecord = board.filter(
        item => item.title && item.title.toLowerCase().includes(filter.toLowerCase())
    );
    setBoard(newRecord)
  };

  const handleClick = (row) => {
    navigate(`/board/${row.id}`);
  }

  return (
      <div className="homeDiv">
        <div className="search">
          <h4>Board</h4>
          <input type="text" placeholder="search by title" onChange={handleChange}/>
        </div>
        <DataTable columns={columns}
                   data={board}
                   customStyles={customStyles}
                   pagination
                   paginationComponent={BootyPagination}
                   selectableRows={true}
                   pointerOnHover={true}
                   onRowClicked={(row) => handleClick(row)}
        />
      </div>
  );
};

export default TestList;
