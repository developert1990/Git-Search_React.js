import React from 'react'

export const User = ({ userData }) => {
    return (
        <div className="user">
            <div className="user__top">
                <img src={userData.avatar_url} alt="user avatar" />
                <div>
                    <h4 className="userName">{userData.name && userData.name}</h4>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">{userData.html_url}</a>
                </div>
            </div>

            <h4>{userData.bio && userData.bio}</h4>
            <h5><i className="fas fa-building"></i>{userData.company && userData.company}</h5>
            <h5><i className="fab fa-twitter"></i> {userData.twitter_username ? userData.twitter_username : ''}</h5>
            <h5><i className="fas fa-map-marker-alt"></i>{userData.location ? userData.location : ''}</h5>
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">{userData.blog && userData.blog}</a>
        </div>
    )
}
