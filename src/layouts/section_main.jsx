import React from 'react';
import request from 'request';
import {get_units_url} from '../urls/api_urls';
import {ProfileItem} from '../subsections/profile_item';
import {NavigationBarUnitItem} from '../components/navigation_bar_unit_item';
import {NavigationBarUnitClassSubItem} from '../components/navigation_bar_class_type_sub_item';
import {BasicLayout} from './layout_basic';
import {Link} from 'react-router';
import {MainHeader} from '../subsections/header_reallocate';
import {MonashHeader} from '../subsections/monash_header';
import "./section_main.css";
class MainLayout extends React.Component {
    constructor() {
        super();
        const parent = this;
        this.state = {units: [], unit_classes: []};
        request.get(
            get_units_url(),
            {},
            function (error, response, body) {
                if (!error) {
                    const response_units = JSON.parse(body);
                    parent.setState({units: response_units});
                } else {
                    console.log(`Error ${response.statusCode}: ${response.message}`);
                }
            }
        ).withCredentials = false;
    }
    select_unit_class_type(unit, class_type) {

    }
    render() {
        const parent = this;
        return <BasicLayout>
            <MonashHeader/>
            <MainHeader/>
            <div className="container">
                <aside className="container wrap sidebar">
                    <ProfileItem
                        first_name="Patrick"
                        last_name='Shaw'
                        email="Patrick.Leong.Shaw@gmail.com"/>
                    <nav className="container wrap bordered">
                        <header className="background-1 pad-md">
                            <h1 className="enrolment-header-txt txt-primary-light">Enrolment</h1>
                        </header>
                        {
                            this.state.units.map(function (unit, i) {
                                return <NavigationBarUnitItem key={i} unit={unit}>
                                    <ul className="pad-md">
                                        {
                                            unit.required.map(
                                                function(class_type, i) {
                                                    return <li key={i}>
                                                            <Link to={{pathname:"/classes", query:{uuid:unit.uuid, class_type: class_type}}}>
                                                                <p className="txt-primary-colored pad-sm"
                                                                   class_type={class_type}
                                                                   onClick={parent.select_unit_class_type.bind(parent, unit, class_type)}>
                                                                    {`»  ${class_type}`}
                                                                </p>
                                                            </Link>
                                                        </li>
                                                }
                                            )
                                        }
                                    </ul>
                                </NavigationBarUnitItem>
                            })
                        }
                    </nav>
                </aside>
                <main className="main-content">
                    <div className="bordered">
                        {this.props.children}
                    </div>
                </main>
            </div>
            <footer>
                <h1>Footer here</h1>
            </footer>
        </BasicLayout>
    }
}
export {MainLayout};
export default MainLayout;