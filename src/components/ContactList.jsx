// import React from "react";
import css from './ContactForm.module.css'

export const ContactList = ({ stateContact }) => (
            <ul>
                {stateContact.map(el =>
                    <li key={el.id}>
                        {el.name} {el.number} <button className={css.button} type="button">Delete</button>
                    </li>
                )}
            </ul>
        );
