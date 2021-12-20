import React, { Component } from 'react';
import Button from './Button';

class FrontScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <div className="container">

                {/* Title */}
                <div class="jumbotron">
                    <h3 class="display-5">Document Holder</h3>
                </div>

                {/* Select Car Drop Down*/}
                <div>
                    <label>
                        Select Car:
                        <select>
                            <option value="car1">Car1</option>
                            <option value="car2">Car2</option>
                            <option value="car3">Car3</option>
                            <option value="car4">Car4</option>
                        </select>
                    </label>
                </div>

                {/* Additional Personal Information */}
                <div>
                    <Button theme="AdditionalButton" onClick={this.props.recordMileageToggle}>
                        Additional Information
                    </Button>
                </div>
            </div>
        );
    }
}
export default FrontScreen;