"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-27T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      };
    } else {
      return { days: 0, hours: 0 };
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
    <div className="flex flex-col items-center justify-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold">Countdown to September 27, 2025</h2>
      <div className="flex gap-4 text-xl mt-2">
        <div className="p-4 bg-gray-700 rounded-md">
          <span className="text-3xl font-semibold">{timeLeft.days}</span> Days
        </div>
        <div className="p-4 bg-gray-700 rounded-md">
          <span className="text-3xl font-semibold">{timeLeft.hours}</span> Hours
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <CountdownTimer />
    </div>
  );
}
