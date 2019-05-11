import React, { Component } from 'react';

class SmurfUpdate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: '',
        id: null
      };
    }

    componentDidMount() {
        this.setState({
            name: this.props.smurf.name,
            age:this.props.smurf.age,
            height:this.props.smurf.height,
            id: this.props.smurf.id
        })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    updateSmurf = event =>  {
        event.preventDefault();        
        let newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
            id: this.state.id
        }
        console.log(newSmurf)
        this.props.updateSmurf(newSmurf);
        this.props.history.push('/')
    }

    render() {
        return(
            <div className="smurfUpdate">
                <form onSubmit={this.updateSmurf}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        type="number"
                        onChange={this.handleInputChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="height"
                        value={this.state.height}
                        name="height"
                    />
                    <button type="submit">Update {this.props.smurf.name}</button>
                </form>
            </div>
        )
    }
}

export default SmurfUpdate;