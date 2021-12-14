import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component{
  render(){
    return(
      <div>
        <Title headline='Planetas' />
        <section className="image">
        {planets.map((planet) => (
          <PlanetCard
          key={planet.name}
          planetName={planet.name}
          planetImage={planet.image}
          />
        ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;