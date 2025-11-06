import React from "react";
import Notification from "./components/notifications/Notification";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const notifications = [
    {
      id: 1,
      type: "info",
      message: "Your profile has been updated successfully.",
      timestamp: "2025-04-10T10:30:00",
      isRead: false,
    },
    {
      id: 2,
      type: "warning",
      message: "Password will expire in 5 days.",
      timestamp: "2025-04-09T09:15:00",
      isRead: true,
    },
    {
      id: 3,
      type: "message",
      message: "You have a new message from John.",
      timestamp: "2025-04-08T18:45:00",
      isRead: false,
    },
    {
      id: 4,
      type: "error",
      message: "Failed to connect to the server.",
      timestamp: "2025-04-07T12:00:00",
      isRead: true,
    },
    {
      id: 5,
      type: "success",
      message: "Payment received successfully.",
      timestamp: "2025-04-06T08:20:00",
      isRead: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Notifications Section */}
      <section className="max-w-4xl mx-auto px-4 mb-10">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
          📬 Notifications
        </h2>
        <Notification notification={notifications} />
      </section>

      {/* Todo List Section */}
      <section className="max-w-4xl mx-auto px-4">
        <TodoList />
      </section>
    </div>
  );
}
