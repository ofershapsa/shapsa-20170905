import React, { Component } from "react"

export default class ContactRow extends Component {
  render() {
    const contact = this.props.contact

    return (
      <tr>
        <td>{contact.id}</td>
        <td>{contact.name}</td>
        <td>
          {contact.email}
        </td>
      </tr>
    )
  }
}
