import css from './ContactForm.module.css'
import React from "react";



class ContactForm extends React.Component {
    state = {
        id: '',
        name: '',
        number: '',
    }

    handleChange = e => {     
        this.setState({ [e.currentTarget.name]: e.currentTarget.value, });
    };   

    handleSubmit = e => {   
        e.preventDefault(); 
        this.props.onSubmit(this.state);  
        // console.log(this.state);
    };

    render(){
        return (
            <form className={css.contactForm} onSubmit={this.handleSubmit}>
                <label className={css.contactLabel}>Name
                    <input
                        className={css.inputField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required/>
                </label>
                <label className={css.contactLabel}>Number
                    <input
                        className={css.inputField}
                        value={this.state.number}
                        onChange={this.handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.button} type="submit">Add contact</button>
            </form>
        );
    }
       
}

export default ContactForm;
