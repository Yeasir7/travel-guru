import React from "react";
import NavBar from "../components/NavBar";
import Hotel from "../components/Hotel";

const Destination = () => {
  const background = "/images/Rectangle1.png";
  return (
    <div
      className="bg-cover bg-center  min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* navbar start */}
      <NavBar></NavBar>
      {/* Hotel  */}
      <Hotel></Hotel>
    </div>
  );
};

export default Destination;
