// import React from 'react';

// const Notification = () => {
//   const notifications = [
//     {
//       type: 'info',
//       message: 'Welcome to the app!',
//       timestamp: '10:00 AM',
//       isRead: false,
//     },
//     {
//       type: 'warning',
//       message: 'Your profile is incomplete.',
//       timestamp: '10:30 AM',
//       isRead: true,
//     },
//     {
//       type: 'error',
//       message: 'Failed to connect to server.',
//       timestamp: '11:00 AM',
//       isRead: false,
//     },
//   ];

//   // Get Tailwind color classes based on type
//   const getStyles = (type, isRead) => {
//     let baseStyles = '';
//     let textColor = '';
//     let borderColor = '';
//     let bgColor = '';

//     switch (type) {
//       case 'error':
//         textColor = 'text-red-800';
//         borderColor = 'border-red-500';
//         bgColor = 'bg-red-100';
//         break;
//       case 'warning':
//         textColor = 'text-yellow-800';
//         borderColor = 'border-yellow-500';
//         bgColor = 'bg-yellow-100';
//         break;
//       case 'info':
//       default:
//         textColor = 'text-blue-800';
//         borderColor = 'border-blue-500';
//         bgColor = 'bg-blue-100';
//         break;
//     }

//     if (isRead) {
//       baseStyles = 'opacity-60 grayscale';
//     }

//     return `${bgColor} ${borderColor} ${textColor} ${baseStyles}`;
//   };

//   return (
//     <div className="p-4">
//       {notifications.map((note, index) => (
//         <div
//           key={index}
//           className={`border-l-4 p-4 mb-4 rounded-md shadow-sm ${getStyles(
//             note.type,
//             note.isRead
//           )}`}
//         >
//           <div className="flex justify-between text-sm mb-1 font-semibold uppercase">
//             <span>{note.type}</span>
//             <span className="text-xs normal-case">{note.timestamp}</span>
//           </div>
//           <p className="text-sm font-medium">{note.message}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Notification;





// // import React, { Component } from "react";

// // class Notifications extends Component{
// //     constructor(){
// //         super();
// //     }

// //     render(){
// //         return(
// //             <div>
// //             </div>
// //         )
// //     }
// // }


// import React from "react"

// function Notifications({type, message, timestamp, isRead}){
//     console.log(type, message, timestamp, isRead);

//     // let bgColor;

//     // if(type == "info"){
//     //     bgColor = "bg-blue-100"
//     // }else if(type == "warning"){
//     //     bgColor = "bg-yellow-100"
//     // }else if(type == "error"){
//     //     bgColor = "bg-red-100"
//     // }else{
//     //     bgColor = "bg-green-100"
//     // }

//     const bgColor = {
//         "info": "bg-blue-100",
//         "warning": "bg-yellow-100",
//         "error": "bg-red-100",
//         "success": "bg-green-500"
//     }[type];



//     return(
//         <div className={`p-4 rounded shadow-sm mb-3 ${bgColor} ${isRead ? 'opacity-50': ''} : `}>
//             <p className="font-semibold">{message}</p>
//             <p className="text-gray-500">{timestamp}</p>
//         </div>
//     )
// }

// export default Notifications

import React from 'react';

function Notification({ notification }) {
    const bg_color= (type)=>
        type === 'info' ? 'bg-purple-300':
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-300' :
        type === 'warning' ? 'bg-yellow-400' :
        'bg-blue-100';

    
    return (
        <div className='Container'>
            {
                notification.map((item,index) => (
                    <div className={`p-4 rounded shadow-sm mb-3 ${bg_color(item.type, item.isRead)}`} key={index}>
                        <p className='text-sm text-gray-600'>{item.type}</p>
                        <p className="font-semibold">{item.message}</p>
                        <p className="text-gray-500">{item.timestamp}</p>                        
                    </div>
                ))            
        }
        </div>
    );
}

export default Notification

// import React from 'react';

// export default function Notifications({note}) {
//   return (
//     <div>
//         {
//             note.map((item, index) => (
//                 <div className={`p-4 rounded shadow-sm mb-3`} key={index}>
//             <p className="font-semibold">{item.message}</p>
//             <p className="text-gray-500">{item.timestamp}</p>
//         </div>
//             ))        
//         }
//     </div>
//   )
// }