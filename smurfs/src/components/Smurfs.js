import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getSmurfs } from '../actions';
import SmurfList from './SmurfList';

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>

        <h1>Smurf Village</h1>
        {this.props.fetchingSmurfs && ( 
            <Loader type="Puff" color="#204963" height="60" width="60" />
        )}

        {this.props.smurfs && (this.props.smurfs.map(smurf => (
          <SmurfList smurf={smurf} key={smurf.id} />
        )))}

        {this.props.error && <p>{this.props.error}</p>}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error,
  fetchingSmurfs: state.fetchingSmurfs,
});

export default connect (
  mapStateToProps,
  { getSmurfs }
)(Smurfs)
