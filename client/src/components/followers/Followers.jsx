import React, { useEffect, useState } from 'react'

export const Followers = ({ followerURL }) => {
    const [followers, setFollowers] = useState([]);
    useEffect(() => {
        (
            async () => {
                const response_followers = await fetch(followerURL);
                const data_followers = await response_followers.json();
                setFollowers(data_followers);
            }
        )();
    }, [followerURL])
    return (
        <div className="followers">
            <div className="followers__nav">
                <i className="fas fa-users"></i>
                <h3>Followers</h3>
            </div>
            {
                followers.map((follower) => {
                    return (
                        <div key={follower.id} className="followers__detail">
                            <img src={follower.avatar_url} alt="follower" />
                            <div>
                                <h6>{follower.login}</h6>
                                <a href={follower.html_url} target="_blank" rel="noopener noreferrer">{follower.html_url}</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
