// import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import Login from '@/modules/auth/views/login';
// import Navbar from '@/modules/app/components/navbar/navbar';
// // import MainContainer from '@/modules/mainContainer/views/mainContainer';
// import React, { useEffect, useState } from 'react';
// import Card from '@/modules/app/components/cards/card';
// import MainContainer from '@/modules/mainContainer/views/mainContainer';
// // import Card from '@/path-to-your-components/Card';

// const inter = Inter({ subsets: ['latin'] });

// export default function Home() {
//   const [trendingCoins, setTrendingCoins] = useState([]);

//   useEffect(() => {
//     const apiUrl = process.env.NEXT_PUBLIC_API_URL;

//     if (apiUrl) {
//       fetch(`${apiUrl}/trending-coins`)
//         .then((response) => response.json())
//         .then((data) => {
//           setTrendingCoins(data.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching trending coins:', error);
//         });
//     } else {
//       console.error('API URL is not defined in the environment variables.');
//     }
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <MainContainer>
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           {trendingCoins.map((coin) => (
//             <Card key={coin} coin={coin} />
//           ))}
//         </div>
//       </MainContainer>
//     </div>
//   );
// }


import Navbar from '@/modules/app/components/navbar/navbar'
import MainContainer from '@/modules/mainContainer/views/mainContainer'
import React from 'react'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <MainContainer></MainContainer>
    </div>
  )
}

export default Home