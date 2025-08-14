import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerHoleForm = ({ onSubmit }) => {
  const [players, setPlayers] = useState(1);
  const [holes, setHoles] = useState(9);
  const [restaurant, setRestaurant] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/tee-times", { state: { players, holes, restaurant } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Number of Players:</label>
      <input
        type="number"
        value={players}
        onChange={(e) => setPlayers(Number(e.target.value))}
        min="1"
        max="4"
      />
      <label>Number of Holes:</label>
      <div className="hole-options">
        <label>
          <input
            type="radio"
            value="9"
            checked={holes === 9}
            onChange={() => setHoles(9)}
          />
          9 Holes
        </label>
        <label>
          <input
            type="radio"
            value="18"
            checked={holes === 18}
            onChange={() => setHoles(18)}
          />
          18 Holes
        </label>
        <label>
          <input
            type="checkbox"
            checked={restaurant}
            onChange={(e) => setRestaurant(e.target.checked)}
          />
          Has Restaurant
        </label>
      </div>
      <button type="submit">Find Tee Times</button>
    </form>
  );
};

export default PlayerHoleForm;
