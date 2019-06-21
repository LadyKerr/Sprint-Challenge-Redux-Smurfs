import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfForm extends React.Component {
  state = {
    smurfs: {
      name: '',
      age: '',
      height: '',
    }
  }

  handleChange = e => {
    this.setState({
      smurfs: {
        ...this.state.smurfs,
        [e.target.name]: e.target.value
      }
    })
  }

  addNewSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurfs)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return (
      <div className="smurf-form">
        <h2>Add a New Smurf</h2>
        <form onSubmit={this.addNewSmurf}>
          <input 
            type="text"
            name="name"
            placeholder="Smurf Name"
            onChange={this.handleChange}
            value={this.state.smurfs.name}
          />
          <input 
            type="number"
            name="age"
            placeholder="Smurf Age"
            onChange={this.handleChange}
            value={this.state.smurfs.age}
          />
          <input 
            type="text"
            name="height"
            placeholder="Smurf Height"
            onChange={this.handleChange}
            value={this.state.smurfs.height}
          />
          <button>
          {this.props.addingSmurf ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />) 
                : ('Add Smurf')}
          </button>
        </form>
      </div>
    );
  }

}


const mapStateToProps = state => ({
  error: state.error,
  addingSmurf: state.addingSmurf
})

export default connect (
  mapStateToProps,
  { addSmurf }
)(AddSmurfForm);