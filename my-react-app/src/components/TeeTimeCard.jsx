import React from "react";

const TeeTimeCard = ({ teeTime }) => {
  const { courseName, date, time, availableSpots } = teeTime;

  return (
    <div className="tee-time-card">
      <h3>{courseName}</h3>
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <p>Time: {time}</p>
      <p>Available Spots: {availableSpots}</p>
    </div>
  );
};
export default TeeTimeCard;
// This component displays individual tee time information.
