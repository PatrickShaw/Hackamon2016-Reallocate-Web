import React from 'react';
import request from 'request';
import {get_units_url} from '../urls/api_urls';
import {ReAllocateHeader} from '../subsections/reallocate_header';
import {NavigationBar} from '../components/navigation_bar';
import {NavigationBarUnitItem} from '../components/navigation_bar_unit_item';
import {MainLayout} from '../layouts/layout_main';
class AppPage extends React.Component {

    constructor() {
        super();
        this.state = {units: []};
        var parent = this;
        request.get(
            get_units_url(),
            {},
            function(error, response, body) {
                if(!error) {
                    var response_units = JSON.parse(body);
                    parent.setState({units:response_units});
                } else {
                    console.log(`Error ${response.statusCode}: ${response.message}`);
                }
            }
        ).withCredentials = false;
    }
    render() {
        return  <MainLayout>
                    <ReAllocateHeader/>
                    <NavigationBar>
                        {
                            this.state.units.map(function(item, i) {
                                return <NavigationBarUnitItem key={i} unit={item}/>
                            })
                        }
                    </NavigationBar>
                    <main>
                        {this.children}
                    </main>
                </MainLayout>;
    }
}
export {AppPage};
export default AppPage;