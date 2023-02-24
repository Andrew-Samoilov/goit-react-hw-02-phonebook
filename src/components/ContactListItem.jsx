import css from './ContactForm.module.css'
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <div className = {css.divItem}>
            <span>{name}: {number}</span> 
            <button
                onClick={() => onDeleteContact(id)}
                name={name}
                className={css.button}
                    type="button">Delete
            </button>
        </div>
    );
    
};

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}