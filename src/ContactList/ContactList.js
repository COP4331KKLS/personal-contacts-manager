import React, { Component } from 'react';
import CreateContactModal from '../CreateContact/CreateContactModal';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup  } from 'react-transition-group';
import './ContactList.css';
import { connect } from 'react-redux';
import { getContacts, deleteContact } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ContactList extends Component
{
   componentDidMount()
   {
      this.props.getContacts();
   }

   onDeleteClick = (uid) =>
   {
      this.props.deleteContact(uid)
   }

   render()
   {
      const { contacts } = this.props.contact;

      return (
         <Container className = "Container">
            <ListGroup>
               <TransitionGroup className = "Contacts">
                  {contacts.map(({uid, firstName, lastName, company, phoneNumber, email, address}) => (
                     <CSSTransition key = {uid} timeout = {500} className = "fade">
                        <ListGroupItem>
                        <Button
                        className = "RemoveButton"
                        color = "danger"
                        size = "sm"
                        onClick = {this.onDeleteClick.bind(this, uid)}
                        >&times;</Button>

                        {firstName}

                        </ListGroupItem>
                     </CSSTransition>
                  ))}
               </TransitionGroup>
            </ListGroup>
         </Container>
      );
   }
}

ContactList.propTypes = {
   getContacts: PropTypes.func.isRequired,
   contact: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
   contact: state.contact
});

export default connect(
   mapStateToProps,
   { getContacts, deleteContact }
)(ContactList);
