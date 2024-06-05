import React from 'react';
import './ProfileImage.css'; // Import the CSS file

interface ProfileImageProps {
    imageUrl: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl }) => {
    return (
        <div className="profile-image-container">
            <img src={imageUrl} alt="Profile Image" className="profile-image" />
        </div>
    );
};

export default ProfileImage;