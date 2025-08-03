import React from 'react';
import NavBar from '../components/NavBar';
import { useLoaderData } from 'react-router-dom';
import Cards from '../components/Cards';

const Home = () => {
    const background = "/images/Rectangle1.png";
    const cards = useLoaderData();
    return (
      <div
        className="bg-cover bg-center  min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* navbar */}
        <NavBar></NavBar>

        {/* cards */}
        <div className="grid grid-cols-3 items-center gap-3 min-h-[calc(100vh-100px)]">
          {cards.map((card) => (
            <Cards key={card.id} card={card}></Cards>
          ))}
        </div>
      </div>
    );
};

export default Home;