import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component{
  render(){
    
    const { name, year, country, destination } = this.props;
    return(
      <div className="list">
        <div>{name}</div>
        <div>{year}</div>
        <div>{country}</div>
        <div>{destination}</div>
      </div>
    );
  }
}

MissionCard.propTypes ={
  name: propTypes.string.isRequired,
  year: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
}

MissionCard.defaultProps = {
  destination: 'Destino não encontrado',
  year: 'Ano não encontrado',
};

export default MissionCard;