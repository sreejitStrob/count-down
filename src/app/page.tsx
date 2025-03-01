"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-27T00:00:00").getTime();
  const startDate = new Date("2024-12-22T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    const weekDifference = Math.floor((now - startDate) / (1000 * 60 * 60 * 24 * 7)) + 1;

    if (difference > 0) {
      return {
        totalDays: Math.floor(difference / (1000 * 60 * 60 * 24)),
        totalHours: Math.floor(difference / (1000 * 60 * 60)),
        totalSeconds: Math.floor(difference / 1000),
        currentWeek: weekDifference,
      };
    } else {
      return { totalDays: 0, totalHours: 0, totalSeconds: 0, currentWeek: weekDifference };
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
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white rounded-lg shadow-xl w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Countdown to September 27, 2025</h2>
      <div className="flex flex-wrap justify-center gap-4 text-xl mt-2 w-full">
        <div className="p-4 bg-gray-700 rounded-lg text-center w-full sm:w-auto">
          <span className="text-4xl font-semibold">{timeLeft.totalDays}</span>
          <div>Total Days</div>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg text-center w-full sm:w-auto">
          <span className="text-4xl font-semibold">{timeLeft.totalHours}</span>
          <div>Total Hours</div>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg text-center w-full sm:w-auto">
          <span className="text-4xl font-semibold">{timeLeft.totalSeconds}</span>
          <div>Total Seconds</div>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg text-center w-full sm:w-auto">
          <span className="text-4xl font-semibold">{timeLeft.currentWeek}</span>
          <div>Current Week</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <CountdownTimer />
    </div>
  );
}
