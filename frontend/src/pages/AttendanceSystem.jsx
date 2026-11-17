import { useState } from 'react';
import MainContainer from '../components/MainContainer';
import QRRegistrationContainer from '../components/QRRegistrationContainer';
import LoginContainer from '../components/LoginContainer';


const AttendanceSystem = () => {
    const [data, setData] = useState([]);
   

    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/AttendanceSystem');
        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = response.json();

        return data;
    };

    getData().then((result) => {
        setData(result);
        console.log(result)
    }).catch((e) => {
        console.log(e.message);
    });


  return (
    <>
        <LoginContainer/>
        <MainContainer />
        <QRRegistrationContainer data = {data} />
    </>
  )
}

export default AttendanceSystem;
