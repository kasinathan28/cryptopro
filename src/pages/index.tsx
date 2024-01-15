// Home.tsx

import React, { useEffect } from 'react';
import Navbar from '@/modules/app/components/navbar/navbar';
import MainContainer from '@/modules/mainContainer/views/mainContainer';
import socket from '../modules/app/components/websocket/webSocket'; // Update the path accordingly

function Home() {
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default Home;
