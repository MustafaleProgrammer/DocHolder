import React, { Component } from 'react';
import Button from './Button';

class RecordFuel extends Component {
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
            <h3 class="display-5"> Fuel Expenditure, Record Fuel</h3>
          </div>
        </div>

        {/* Fuel Type Drop Down (If Petrol/Diesel Switch input to (L) if electric (KWH)*/}
        <div>
          <label>
            Fuel Type:
            <select>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </label>
        </div>

        {/* Amount Input*/}
        <form>
          <label>
            Amount (L):
            <input type="number" name="amount" placeholder="Enter Amount" />
          </label>
          <br />

          {/* Price Input */}
          <label>
            Price (£):
            <input type="number" name="price" placeholder="Enter Price" />
            VAT inc?

            {/* VAT Checkbox */}
            <input type="checkbox" name="checkbox" />
          </label>
        </form>
        <br />

        Time and Date Picker
        <br />

        <div>
          Upload Receipt: <input type="file" name="price" onChange={this.fileSelectedHandler} />
          {/* <button onClick={this.fileSelectedHandler}>Upload</button> */}
        </div>
        <br />
      </div>
    );
  }
}
export default RecordFuel;