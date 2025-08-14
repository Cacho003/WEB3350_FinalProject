import React from "react";
import golfData from "./golfData.json";
import { useLocation, useNavigate } from "react-router-dom";

export default function TeeTimeList() {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedHoles = location.state?.holes || 9; // Default to 9 holes if not specified
  const restaurant = location.state?.restaurant || false; // Default to false if not specified

  const allCourses = golfData.flatMap((club) =>
    club.golf_courses.map((course) => ({
      ...course,
      clubName: club.name,
      clubAddress: club.address,
      clubCity: club.city,
      clubState: club.state,
      clubPhone: club.phone,
      hasRestaurant: club.hasRestaurant,
    }))
  );

  let filteredCourses = allCourses.filter(
    (course) => course.holes === selectedHoles
  );
  if (restaurant) {
    filteredCourses = filteredCourses.filter((course) => course.hasRestaurant);
  }

  return (
    <div>
      <div>
        <button
          onClick={() => navigate("/")}
          style={{
            margin: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back to Search
        </button>
      </div>
      <h2>Available Tee Times</h2>
      {filteredCourses.length > 0 ? (
        <ul>
          {filteredCourses.map((course, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              {course.course_name} ({course.clubName}) - {course.holes} Holes
              <br />
              Address: {course.clubAddress}, {course.clubCity},{" "}
              {course.clubState}
              <br />
              Phone Number: {course.clubPhone}
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses available for {selectedHoles} holes.</p>
      )}
    </div>
  );
}
