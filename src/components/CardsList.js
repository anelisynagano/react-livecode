import React from 'react';
import Card from './Card';

const CardsList = (props) => {
    return(
        <div className="cardsList">
            {props.users.map(user => <Card {...user} key={user.id} />)}
        </div>
    )   
}


export default CardsList;