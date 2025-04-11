import React from 'react';

const Notification = () => {
  const notifications = [
    {
      type: 'info',
      message: 'Welcome to the app!',
      timestamp: '10:00 AM',
      isRead: false,
    },
    {
      type: 'warning',
      message: 'Your profile is incomplete.',
      timestamp: '10:30 AM',
      isRead: true,
    },
    {
      type: 'error',
      message: 'Failed to connect to server.',
      timestamp: '11:00 AM',
      isRead: false,
    },
  ];

  // Get Tailwind color classes based on type
  const getStyles = (type, isRead) => {
    let baseStyles = '';
    let textColor = '';
    let borderColor = '';
    let bgColor = '';

    switch (type) {
      case 'error':
        textColor = 'text-red-800';
        borderColor = 'border-red-500';
        bgColor = 'bg-red-100';
        break;
      case 'warning':
        textColor = 'text-yellow-800';
        borderColor = 'border-yellow-500';
        bgColor = 'bg-yellow-100';
        break;
      case 'info':
      default:
        textColor = 'text-blue-800';
        borderColor = 'border-blue-500';
        bgColor = 'bg-blue-100';
        break;
    }

    if (isRead) {
      baseStyles = 'opacity-60 grayscale';
    }

    return `${bgColor} ${borderColor} ${textColor} ${baseStyles}`;
  };

  return (
    <div className="p-4">
      {notifications.map((note, index) => (
        <div
          key={index}
          className={`border-l-4 p-4 mb-4 rounded-md shadow-sm ${getStyles(
            note.type,
            note.isRead
          )}`}
        >
          <div className="flex justify-between text-sm mb-1 font-semibold uppercase">
            <span>{note.type}</span>
            <span className="text-xs normal-case">{note.timestamp}</span>
          </div>
          <p className="text-sm font-medium">{note.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
