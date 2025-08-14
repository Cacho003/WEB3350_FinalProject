import React, { useState } from "react";
import PlayerHoleForm from "../components/PlayerHoleForm";
import TeeTimeList from "../components/TeeTimeList";

const Home = () => {
  const [teeTimes, setTeeTimes] = useState([]);
  const handleSearch = async ({ players, holes }) => {
    try {
      const times = await fetchTeeTimes(players, holes);
      setTeeTimes(times);
    } catch (error) {
      console.error("Error fetching tee times:", error);
      setTeeTimes([]);
    }
  };
  return (
    <div className="home">
      <h1>Golf Tee Time Finder</h1>
      <PlayerHoleForm onSubmit={handleSearch} />
      {teeTimes.length > 0 && <TeeTimeList teeTimes={teeTimes} />}
    </div>
  );
};

export default Home;
