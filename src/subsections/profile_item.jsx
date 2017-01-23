import React from 'react';
import ProfileImagePlaceholder from '../drawables/profile-image-placeholder.gif';
import './profile_item.css';
const ProfileItem = ({first_name, last_name, email}) => (
    <section className="container bordered pad-md">
                <img className="profile-image" src={ProfileImagePlaceholder} role="presentation"/>
                <div className="profile-details">
                    <h1 className="full-name">{`${first_name} ${last_name}`}</h1>
                    <h2 className="email">{email}</h2>
                </div>
    </section>
);
export {ProfileItem};
export default ProfileItem;