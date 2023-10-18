import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer';
import React from 'react';
import {Paper} from '@mui/material';
import { Component } from 'react';
import {Table} from '@mui/material';
import {TableHead} from '@mui/material';
import {TableBody} from '@mui/material';
import {TableRow} from '@mui/material';
import {TableCell} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const useStyles = makeStyles()((theme)=>{
  return {
  root:{
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  Table : {
    minWidth: 1080 
  }
 };
}) ;
  
  
function App() {

  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    // axios 라이브러리를 사용하여 get요청을 받아옵니다.
    axios
      .get('/api/customers')
      .then((res) => {
      	// get요청이 성공하면 콘솔에 데이터를 띄우고 스테이트를 변경
        console.log(res.data);
        setLoadData(res.data);
      })
      .catch((err) => {
      	// get요청이 실패하면 콘솔에 에러 메세지를 띄움
        console.log(err);
      });
  }, []);

    

  const { classes } = useStyles();
  return (
    <div>
       <Paper className={classes.root}>
        <Table className={classes.Table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {
          loadData ? loadData.map(c =>{
          return(
            <Customer
              key={c.id}
              id ={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );

        }) : <TableRow>
        <TableCell colSpan="6" align='center'>
          <CircularProgress />
        </TableCell>
      </TableRow>
        }
    
        </TableBody>
        </Table>
      </Paper>
    </div>
    //props를 이용해 데이터를 전달
    //배열에 각 원소에 어떤한 정보를 전달하고 싶을때 map함수 사용
    //배열의 각원소를 c라는 것으로 순회를 하도록 만들수 있음 즉 한명의 고객 혹은 번호를 c라고 부르는 것
    //이때 배열에는 고유의 값을 key로 정해줘야함
   
  );
}

export default App;
