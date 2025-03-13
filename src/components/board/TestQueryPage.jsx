import React, {useEffect, useState} from 'react';
import {listBoard} from "../../services/BoardService.js";
import DataTable from "react-data-table-component";
import {columns} from "./BoardColumns.js";

const TestQueryPage = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ board, setBoard ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    listBoard().then(res => {
      setBoard(res.data);
      setIsLoading(false);
    }).catch(err=>{
      setError(err.message);
      setIsLoading(false);
    })
  }, [])

  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(error) {
    return <h2>{error.message}</h2>
  }

  return (
      <div>
        <h2>Board</h2>
        <DataTable columns={columns}
                   data={board}
                   pagination
        />
      </div>
  );
};

export default TestQueryPage;