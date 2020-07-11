import React from 'react'

export default function FCCContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt="whatever"/>
            <h3>{props.contact.name}</h3>
            <p>phone: {props.contact.phone}</p>
            <p>email: {props.contact.email}</p>
        </div>
    )
}
