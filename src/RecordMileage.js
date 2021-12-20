import React, { Component } from 'react';
import Button from './Button';

// import DateTimePicker from 'react-datetime-picker';

class RecordMileage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }


  render() {
    return (

      <div class="card">
        <div class="card-body">

          {/* Back Button */}
          <Button theme="BackButton" onClick={this.props.frontScreenToggle}>
            Back
          </Button>

          {/* Title */}
          <div class="jumbotron">
            <h3 class="display-5"> Additional Documents</h3>
          </div>
          {/* Odometer Button */}
          <Button theme="OdometerButton" onClick={this.props.frontScreenToggle}>
            Odometer
          </Button>
          <br />
          <Button theme="OdometerButton" onClick={this.props.frontScreenToggle}>
            MOT
          </Button>
          <br />
          <Button theme="OdometerButton" onClick={this.props.frontScreenToggle}>
            Insurance
          </Button>
          <br />
          <Button theme="OdometerButton" onClick={this.props.frontScreenToggle}>
            Parking
          </Button>
          <br />
          <Button theme="OdometerButton" onClick={this.props.frontScreenToggle}>
            EV Charging
          </Button>

        </div>
      </div>
    );
  }
}
export default RecordMileage;