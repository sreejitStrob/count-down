"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-27T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        totalDays: Math.floor(difference / (1000 * 60 * 60 * 24)), // Total days remaining
        totalHours: Math.floor(difference / (1000 * 60 * 60)), // Total hours remaining
        totalSeconds: Math.floor(difference / 1000), // Total seconds remaining
      };
    } else {
      return { totalDays: 0, totalHours: 0, totalSeconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-lg shadow-2xl">
      <h2 className="text-4xl font-bold mb-4">Countdown to September 27, 2025</h2>
      <div className="flex gap-6 text-xl mt-2">
        <div className="p-6 bg-gray-700 rounded-lg text-center">
          <span className="text-4xl font-semibold">{timeLeft.totalDays}</span>
          <div>Total Days</div>
        </div>
        <div className="p-6 bg-gray-700 rounded-lg text-center">
          <span className="text-4xl font-semibold">{timeLeft.totalHours}</span>
          <div>Total Hours</div>
        </div>
        <div className="p-6 bg-gray-700 rounded-lg text-center">
          <span className="text-4xl font-semibold">{timeLeft.totalSeconds}</span>
          <div>Total Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <CountdownTimer />
    </div>
  );
}
