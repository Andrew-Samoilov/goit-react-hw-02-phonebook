import css from './ContactForm.module.css'
import PropTypes from 'prop-types';

export const ContactList = ({ stateContact, onDeleteContact }) => (
    <ul className={css.listUl}>
                {stateContact.map(el =>
                    <li key={el.id} className={css.listItem}>
                        <span>{el.name}</span> 
                        <span>{el.number}</span> 
                        <button
                            onClick={() => onDeleteContact(el.id)}
                            className={css.button}
                            type="button">Delete</button>
                    </li>
                )}
            </ul>
);
 
ContactList.propTypes = {
    stateContact: PropTypes.array.isRequired, 
    onDeleteContact: PropTypes.func.isRequired, 
}
