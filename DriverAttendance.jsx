
import React, { useState, useEffect } from 'react';

const DriverAttendance = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));

  // Live Clock for UI
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-blue-900">Transport Portal</h1>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {time} IST
        </div>
      </header>

      {/* Driver List */}
      <div className="grid gap-4">
        {['Driver A', 'Driver B', 'Driver C'].map((driver) => (
          <div key={driver} className="bg-white p-5 rounded-2xl shadow-sm flex justify-between items-center transition hover:shadow-md">
            <span className="font-semibold text-lg">{driver}</span>
            <div className="space-x-3">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Check In</button>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">Check Out</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriverAttendance;
