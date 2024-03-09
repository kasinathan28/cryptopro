import { useEffect } from 'react';
import DashBoard from '@/modules/dashboard/views/dashBoard'
import React from 'react'
import socket from '@/modules/app/components/websocket/webSocket';


function Dashboard() {

  


  return (
    <div>
      <DashBoard></DashBoard>
    </div>
  )
}

export default Dashboard  