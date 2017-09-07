import React, { Component } from "react"
import ContactsService from "./service/ContactsService"
import ContactRow from "./ContactRow"

export default class ContactsList extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    const service = new ContactsService()
    const contacts = service.getContacts()
    this.setState({ contacts: contacts })
  }

  render() {
    return (
      <div>
        <h3>We have {this.state.contacts.length} contacts</h3>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(item => (
              <ContactRow key={item.id} contact={item} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
