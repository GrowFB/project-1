import React from 'react'
import {TableRow} from '@mui/material';
import {TableCell} from '@mui/material';
// 라이브러리 불러오기

function Customer(props){
  
  return(
    <>
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell><img src={props.image}alt="profile"></img></TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
    </>
    //tablerow는 한줄로 표현하게 만들어주는 것
    //tablecell은 하나하나의 요소
  );
}



export default Customer;