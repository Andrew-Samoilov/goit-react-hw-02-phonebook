import css from './ContactForm.module.css'
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem'

export const ContactList = ({ stateContact, onDeleteContact }) => (
    <ul className={css.listUl}>
                {stateContact.map(el =>
                    <li key={el.id} className={css.listItem}>
                        <ContactListItem
                            id={el.id}
                            number={el.number}
                            name={el.name}
                            onDeleteContact={onDeleteContact}
                        />
                    </li>
                )}
    </ul>
);
 
ContactList.propTypes = {
    stateContact: PropTypes.array.isRequired,
}


// export const ContactList = ({ stateContact, onDeleteContact }) => (
//     <ul className={css.listUl}>
//         {stateContact.map(el =>
//             <li key={el.id} className={css.listItem}>
//                 <span>{el.name}</span>
//                 <span>{el.number}</span>
//                 <button
//                     onClick={() => onDeleteContact(el.id)}
//                     className={css.button}
//                     type="button">Delete</button>
//             </li>
//         )}
//     </ul>
// );