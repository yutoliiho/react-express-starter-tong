import React, { Component } from 'react';
import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div>
        <h2>Alexander Auchter</h2>
        {this.state.users.map((e) => (
          <li key={e.id}>
            {e.name} {e.age}
          </li>
        ))}
      </div>
    );
  }
}

export default Users;
