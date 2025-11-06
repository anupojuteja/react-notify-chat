import React from "react";

export default function Notification({ notification = [] }) {
  const typeBg = {
    info: "bg-purple-300 text-gray-800",
    warning: "bg-yellow-400 text-gray-800",
    message: "bg-blue-100 text-gray-800",
    error: "bg-red-300 text-gray-800",
    success: "bg-green-500 text-white",
  };

  const formatTime = (ts) => {
    if (!ts) return "";
    const d = new Date(ts);
    return isNaN(d.getTime()) ? ts : d.toLocaleString();
  };

  return (
    <div className="flex flex-col gap-4">
      {notification.map((item) => {
        const bg = typeBg[item.type] || "bg-gray-200 text-gray-700";
        const read = item.isRead ? "opacity-60 grayscale" : "";

        return (
          <div
            key={item.id}
            className={`p-5 rounded-lg shadow ${bg} ${read} text-center`}
          >
            <p className="text-sm lowercase">{item.type}</p>
            <p className="font-semibold text-lg">{item.message}</p>
            {item.timestamp && (
              <p className="text-sm text-gray-700/80 mt-1">
                {formatTime(item.timestamp)}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
