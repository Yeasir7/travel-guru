import React from 'react';

import NavBar from '../components/NavBar';

const Home = () => {
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
        {/* navbar end */}
      </div>
    );
};

export default Home;