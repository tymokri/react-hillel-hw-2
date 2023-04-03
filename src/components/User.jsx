import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Stepan', age: 25};
    }

    changeUserHandle = () => {
        this.setState( {
            name: 'Mykola',
            age: 30
        });
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}, age: {this.state.age}</p>
                <button onClick={this.changeUserHandle}>Click on me</button>
            </div>
        )
    }
}

export default User;