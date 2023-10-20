import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchteams } from "./Stores/Slice/teamSlice";
import { fetcchplayer } from "./Stores/Slice/playerSlice";
import Routess from "./Routes/Index";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { apiRoutes,appAxios } from './Constants';
import Echo from "laravel-echo";
import Pusher from 'pusher-js';

const firebaseConfig = {
  apiKey: "AIzaSyAhiUaywKS_25JlkrMPiRVZQu0a-sl5rFM",
  authDomain: "electrozevents-112e0.firebaseapp.com",
  projectId: "electrozevents-112e0",
  storageBucket: "electrozevents-112e0.appspot.com",
  messagingSenderId: "1024424532773",
  appId: "1:1024424532773:web:90ee54143b0d22d95298cc"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
// const userRole = localStorage.getItem('userType');

const echo = new Echo({
  broadcaster: 'pusher',
  key: 'e2d2b5753a88649eb589',
  cluster: 'ap2',
  forceTLS: true
});

function App() {
  const fetchData=()=>{
    dispatch(fetchteams())
    dispatch(fetcchplayer())
  }

  useEffect(()=>{
    echo.channel('uiupadetes')
    .listen('Uiupdate', (data) => {
        console.log("uiupdate");
        fetchData()
    });
  },[])
  const dispatch = useDispatch()
  useEffect(() => {
    fetchData()
  },[])
  return (
    <>
      <Routess />
    </>
  );
}

export default App;
