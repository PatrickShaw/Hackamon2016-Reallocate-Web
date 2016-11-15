import React from 'react';
import ProfileImagePlaceholder from '../drawables/profile-image-placeholder.gif';
import './profile_item.css';
const ProfileItem = ({first_name, last_name, email}) => (
    <section className="bordered profile-info-container">
        <div className="container-fluid">
            <div className="row">
                <img className="profile-image col-xs-3" src={ProfileImagePlaceholder} role="presentation"/>
                <div className="profile-details col-xs-9">
                    <h1 className="full-name">{`${first_name} ${last_name}`}</h1>
                    <h2 className="email">{email}</h2>
                </div>
            </div>
        </div>
    </section>
);
export {ProfileItem};
export default ProfileItem;