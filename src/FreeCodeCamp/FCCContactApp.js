import React from 'react'
import FCCContactCard from './FCCContactCard'

export default function FCCContactApp() {
    const contact = {
      name: "Tetsuro",
      imgUrl: "http://placekitten.com/300/200",
      phone: "00987654321",
      email: "dksadliawdjlai@mailinator.net",
    }

    return (
      <div className="contacts">
        <FCCContactCard contact={contact}/>
        <FCCContactCard contact={contact}/>
        <FCCContactCard contact={contact}/>
        <FCCContactCard contact={contact}/>
      </div>
    );
}
