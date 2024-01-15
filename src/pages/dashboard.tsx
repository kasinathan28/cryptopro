import { useEffect } from 'react';
import DashBoard from '@/modules/dashboard/views/dashBoard'
import React from 'react'
import socket from '@/modules/app/components/websocket/webSocket';


function Dashboard() {

  


  return (
    <div>
      <DashBoard></DashBoard>
      {/* <WebSocketExample />       */}
    </div>
  )
}

export default Dashboard  