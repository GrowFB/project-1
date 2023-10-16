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


  const customers = [
    {
    'id' : 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '나동현',
    'birthday': '961222',
    'gender': '남자',
    'job': '대학생',
    },
    {
      'id' : 2,
      'image': 'https://placeimg.com/64/64/2',
      'name': '홍길동',
      'birthday': '970812',
      'gender': '남자',
      'job': '프로그래머',
      },
      {
        'id' : 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '이순신',
        'birthday': '921205',
        'gender': '남자',
        'job': '디자이너',
        }
];
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
        customers.map(c =>{
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

        }) 
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
