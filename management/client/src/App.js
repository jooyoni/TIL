
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getUser } from './api';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
function App() {
  const {data, isLoading}=useQuery("userInfo", getUser);
  return (
    <div>
      {data? data.map((item)=><Customer key={item.id} id={item.id} name={item.name} birthday={item.birthday} male={item.male} job={item.job} />) :"loading"}
      <CustomerAdd />
    </div>
  );
}

export default App;
