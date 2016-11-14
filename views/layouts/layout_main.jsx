import React from 'react';
import {ReallocateHeader} from '../subsections/reallocate_header';
import {NavigationBar} from '../components/navigation_bar';
import {NavigationBarUnitItem} from '../components/navigation_bar_unit_item';
import {BasicLayout} from './layout_basic';
const MainLayout = ({units}) =>(
    <BasicLayout>
        <ReallocateHeader/>
        <NavigationBar>
            {
                units.map(function(item, i) {
                    return <NavigationBarUnitItem unit={item} key={i}/>;
                })
            }
        </NavigationBar>
    </BasicLayout>
);
export {MainLayout};
export default MainLayout;