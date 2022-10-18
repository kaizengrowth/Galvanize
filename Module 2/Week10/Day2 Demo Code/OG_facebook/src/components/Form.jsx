import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "firstname" : '',
            'lastname' : '',
            'activity' : '',
            'age' : '',
        }
        
        // note: you do not need to bind these functions in the current version of JS
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    'activity' : data['activity']
                });
            }, (error) => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        const name = this.state.firstname;
        
        fetch('https://api.agify.io?name=' + name)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    'age' : data['age']
                });
            })
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value}
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.firstname + ' ' + this.state.lastname + ' (age: ' + this.state.age + ' ) just: ' + this.state.activity + ' !');
    }

    render() {
        return (
            <div className='form'>
                <h3>{this.props.name}</h3>
                <p>{this.state.activity}</p>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInputChange} type='text' placeholder='First Name' name="firstname" />

                    <input onChange={this.handleInputChange} type='text' placeholder='Last Name' name="lastname" />

                    <input onChange={this.handleInputChange} type='text' placeholder={this.state.activity} name="activity" />

                    <input type='submit' value='Submit' />

                    <br />
                    <br />
                </form>
            </div>
        )
    }
}

export default Form;