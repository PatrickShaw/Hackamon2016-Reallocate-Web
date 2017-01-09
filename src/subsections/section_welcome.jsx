import React from 'react';
import './section_welcome.css';
const WelcomeSection = props => (
    <section className="welcome">
        <div className="padded">
            <h1>Welcome to the new and improved Allocate+!</h1>
        </div>
        <hr/>
        <div className="padded">
            <h2>Modes and dates</h2>
            <p>There are three stages to creating your timetable</p>
            <ul>
                <li>Enter your preferred times for each activity</li>
                <li>The system closes to sort all entries</li>
                <li>Make changes and fix any clashing classes</li>
            </ul>
        </div>
        <hr/>
        <div className="padded">
            <p>If you haven't used Allocate+ before, you may want to take the Quick Tour: Allocate+. You can find it in the Allocate+ Help? menu to the right of your screen (not available on mobile devices).</p>
        </div>
    </section>
);
export {WelcomeSection};
export default WelcomeSection;