import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Main from './components/Main'
import Navbar from './components/Navbar'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5005/api/workouts/',
      );
  
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {data.length>0 && <Main data={data} className="mb-5"></Main>}
    </div>
  )

}

export default App;