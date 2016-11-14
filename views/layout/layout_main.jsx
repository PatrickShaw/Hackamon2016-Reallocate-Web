import React from 'react';
import Header from './header';
import NavigationBar from '../components/NavigationBar';
import NavigationBarUnitItem from '../components/NavigationBarUnitItem';
const MainLayout = props =>(
    <html>
        <head>
        </head>
        <body>
            <Header/>
            <NavigationBar>
                {
                    props.units.map(function(item, i) {
                        return <NavigationBarUnitItem unit={item} key={i}/>;
                    })
                }
            </NavigationBar>
        </body>
    </html>
);

export default MainLayout;