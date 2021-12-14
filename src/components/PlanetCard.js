import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component{
  render(){
    const { planetName, planetImage } =this.props;

    return(
      <div>
        <div className="planets">{planetName}</div>
        <img className="image2" src={planetImage} alt={planetName} />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};

export default PlanetCard;