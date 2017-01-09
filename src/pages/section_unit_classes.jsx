import React from 'react';
import request from 'request';
import {get_classes_url, get_units_url} from '../urls/api_urls';
import './section_unit_classes.css';
class UnitClassesSection extends React.Component {
    constructor() {
        super();
        this.state = {unit_classes: null, unit: null};
    }
    retrieve_unit_classes() {
        const parent = this;
        request.get(
            get_classes_url(parent.props.location.query.uuid),
            {},
            function (error, response, body) {
                if (!error) {
                    const unit_classes = JSON.parse(body).filter((value) => {
                        return value.type.localeCompare(parent.props.location.query.class_type) === 0
                    });
                    console.log(unit_classes);
                    parent.setState({unit_classes: unit_classes})
                } else {
                    console.log(`Error ${response}: ${response.message}`);
                }
            }
        ).withCredentials = false;
    }
    retrieve_unit_info() {
        const parent= this;
        request.get(
            get_units_url(parent.props.location.query.uuid),
            function(error, response, body) {
                if(!error) {
                    const jsonBody = JSON.parse(body);
                    jsonBody.forEach(function (item, i) {
                        if(item.uuid === parent.props.location.query.uuid) {
                            parent.setState({unit: item});
                        }
                    })
                } else {
                    console.log(`Error ${response.statusCode}: ${response.message}`);
                }
            }
        ).withCredentials = false;
    }
    render() {
        console.log("wtf");
        if(this.state.unit == null) {
            this.retrieve_unit_info();
        }
        if(this.state.unit_classes == null) {
            this.retrieve_unit_classes();
        }
            return <div className="classes">
                <div className="classes-header">
                    <h1 className="txt-primary-light">{this.state.unit != null ? this.state.unit.uuid : ""}</h1>
                    <h2 className="txt-primary-light">{this.state.unit != null ? this.state.unit.title : ""}</h2>
                    <h3 className="txt-primary-light">{this.props.location.query.class_type != null ? this.props.location.query.class_type : ""}</h3>
                </div>
                <div className="class-table">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead className="class-table-header">
                            <tr>
                                <th>Activity</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Campus</th>
                                <th>Location</th>
                                <th>Staff</th>
                                <th>Duration</th>
                                <th>Request to swap?</th>
                            </tr>
                            </thead>
                            {
                                this.state.unit_classes != null ?
                                    <tbody>{
                                this.state.unit_classes.map(
                                    function (unit_class, i) {
                                        return <tr className="swap-item" key={i}>
                                            <td>
                                                <p className="activity">
                                                    {i + 1}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="day">
                                                    {unit_class.day}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="time">
                                                    {unit_class.time}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="campus">
                                                    {unit_class.campus}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="location">
                                                    {unit_class.location}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="staff">
                                                    {unit_class.staff}
                                                </p>
                                            </td>
                                            <td>
                                                <p className="duration">
                                                    {unit_class.duration}
                                                </p>
                                            </td>
                                            <td>
                                                <input type="checkbox" className="request-to-swap"/>
                                            </td>
                                        </tr>
                                    }
                                )}</tbody> : false
                            }
                        </table>
                    </div>
                </div>
            </div>
    }
}
export {UnitClassesSection};
export default UnitClassesSection;
