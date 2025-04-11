// import React from 'react';
// import Notification from './components/notifications/Notification';


// function App() {
//   return (
//     <div>
//       <h2>📬 Notifications</h2>
//       <Notification />
//     </div>
//   );
// }

// export default App;




import React from 'react'

import "./App.css"

import Notification from './components/notifications/Notification'


export default function App() {
  //  const Cards = [
  //   {
  //     userName:"Shalini",
  //     userImage:"https://picsum.photos/200/300",
  //     description:"Software Developer",
  //     Skills:{
  //       skill1:"React",
  //       skill2:"JavaScript",
  //       skill3:"HTML/CSS",
  //     }
  //   },
  //   {
  //     userName:"Rahul",
  //     userImage:"https://picsum.photos/200/300",
  //     description:"Full Stack Developer",
  //     Skills:{
  //       skill1:"Python",
  //       skill2:"Django",
  //       skill3:"Sql"
  //       }
  //       },
  //   {
  //     userName:"Sonal",
  //     userImage:"https://picsum.photos/200/300",
  //     description:"Data Scientist",
  //     Skills:{
  //       skill1:"Machine Learning",
  //       skill2:"Data Analysis",
  //       skill3:"Data Visualization",
  //       }
  //   }

  //  ]
  const notifications = [
    {
      id: 1,
      type: 'info',
      message: 'Your profile has been updated successfully.',
      timestamp: '2025-04-10T10:30:00',
      isRead: false
    },
    {
      id: 2,
      type: 'warning',
      message: 'Password will expire in 5 days.',
      timestamp: '2025-04-09T09:15:00',
      isRead: true
    },
    {
      id: 3,
      type: 'message',
      message: 'You have a new message from John.',
      timestamp: '2025-04-08T18:45:00',
      isRead: false
    },
    {
      id: 4,
      type: 'error',
      message: 'Failed to connect to the server.',
      timestamp: '2025-04-07T12:00:00',
      isRead: true
    },
    {
      id: 5,
      type: 'success',
      message: 'Payment received successfully.',
      timestamp: '2025-04-06T08:20:00',
      isRead: false
    }
  ];
  
  return (
    <div className='mainCon'>
   

        <Notification notification={notifications} />

    </div>
  )
}