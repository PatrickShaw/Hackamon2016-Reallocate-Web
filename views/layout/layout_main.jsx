import React from 'react';
import Header from './header';
import NavigationBar from '../components/NavigationBar';
import NavigationBarUnitItem from '../components/NavigationBarUnitItem';
const tests = ["rawr", "erwer", "awer"];
const MainLayout = ({units}) =>(
    <html>
        <head>
        </head>
        <body>
            <Header/>
            <NavigationBar>
                {
                    units.map(function(item, i) {
                        return <NavigationBarUnitItem unit={item} key={i}/>;
                    })
                }
            </NavigationBar>
        </body>
    </html>
);

export default MainLayout;