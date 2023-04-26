// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import {Table} from "react-bootstrap"
import Button from "react-bootstrap/Button"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const handlefind1=()=>{
    axios.get("http://localhost:5000/api/find1")
    .then((res)=>{
     setData(res.data)
     setData1([])
     console.log(data);
    })
  }
  const handlefind2=()=>{
    axios.get("http://localhost:5000/api/find2")
    .then((res)=>{
      setData(res.data)
      setData1([])
    })
  }
  const handlefind3=()=>{
    axios.get("http://localhost:5000/api/find3")
    .then((res)=>{
      setData(res.data)
      setData1([])
    })
  }
  const handlefind4=()=>{
    axios.get("http://localhost:5000/api/find4")
    .then((res)=>{
      setData(res.data)
      setData1([])
    })
  }
  const handlefind5=()=>{
    axios.get("http://localhost:5000/api/find5")
    .then((res)=>{
      setData1(res.data)
      setData([])
    })
  }
  return (
    <div className="App p-3">
      <div className="text-left flex flex-row">
        <p className='text-xl mx-3'>1. Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes</p>
      <Button variant="dark" onClick={handlefind1} className='my-1'> Find</Button>
      </div>
      <div className="text-left flex flex-row">
        <p className='text-xl mx-3'>2. Male Users which have phone price greater than 10,000</p>
      <Button variant="dark"onClick={handlefind2 } className='my-1'> Find</Button>
      </div>
      <div className="text-left flex flex-row">
        <p className='text-xl mx-3'>3. Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</p>
      <Button variant="dark"onClick={handlefind3} className='my-1'> Find</Button>
      </div>
      <div className="text-left flex flex-row">
        <p className='text-xl mx-3'>4. Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</p>
      <Button variant="dark"onClick={handlefind4} className='my-1'> Find</Button>
      </div>
      <div className="text-left flex flex-row">
        <p className='text-xl mx-3'>5. Show the data of top 10 cities which have the highest number of users and their average income.</p>
      <Button variant="dark"onClick={handlefind5} className='my-1'> Find</Button>
      </div>
      
      <br/><br/>
     <Table striped bordered hover size="sm" className=''>
      
      
        {

          data.length!=0?(
            <>
             <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Income</th>
          <th>City</th>
          <th>Car</th>
          
          <th>Quote</th>
          <th>Phone-price</th>
        </tr>
      </thead>
       <tbody>
        {
          
           data.map((item,i)=>{
           
            return(
              <tr>
                <td>{i+1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.income}</td>
                <td>{item.city}</td>
                <td>{item.car}</td>
                <td>{item.quote}</td>
                <td>{item.phone_price}</td>
               

              </tr>
            )
          })
        }
           </tbody>

          
            </>
            )
           
          :
          data1.length!=0?
          (
            <>
            <thead>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>Total Users</th>
          <th>Total Income</th>
         
          </tr>
      </thead>
      <tbody>
        {
          data1.map((item,i)=>{
            return(
              <tr>
                <td>{i+1}</td>
                <td>{item._id}</td>
                <td>{item.totalUsers}</td>
                <td>{item.totalIncome.$numberDecimal}</td>
                
              </tr>
            )
          })
        }

      </tbody>
            </>
            
          )
          :(
            <div>

            </div>
          )
          
        }
        
      
    </Table>
    </div>
  );
}

export default App;
