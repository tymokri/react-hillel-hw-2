import React from 'react';

class ToggleUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Stepan',
            age: 25,
            isHidden: true
        };
    }

    toggleUserHandle = () => {
        this.setState({
            isHidden: !this.state.isHidden
        });
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.toggleUserHandle}
                >{
                    this.state.isHidden
                        ? 'Show user'
                        : 'Hide user'
                }
                </button>
                {
                    this.state.isHidden
                    ? null
                    : <p>Name: {this.state.name}, age: {this.state.age}</p>
                }
            </div>
        )
    }
}

export default ToggleUser;