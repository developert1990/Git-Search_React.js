import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Logo } from '../components/logo/Logo';
import { FINDUSER_GIT } from '../config/index';
import { Followers } from '../components/followers/Followers';
import { Repositories } from '../components/repositories/Repositories';
import { User } from '../components/user/User';
import { Graphs } from '../components/graphs/Graphs';
import Button from 'react-bootstrap/Button';
import { Footer } from '../components/footer/Footer';
import { Nav } from '../components/nav/Nav';

export const Browse = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState({});
    const [isSearched, setIsSearched] = useState(false);
    const [repoURL, setRepoURL] = useState([]);
    const [followerURL, setFollowerURL] = useState([]);
    const [logOut, setLogOut] = useState(false);
    const [searchError, setSearchError] = useState('');
    const localUser = localStorage.getItem('userInfo');
    const history = useHistory();
    const searchRef = useRef();
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = async () => {
        const response = await fetch(`${FINDUSER_GIT}/${search}`);
        const data = await response.json();
        setSearchError('');
        if (data.id !== undefined) {
            setUserData(data);
            setRepoURL(data.repos_url);
            setFollowerURL(data.followers_url);
            setIsSearched(true);
            setSearch('');
        } else {
            setSearchError('User Not Found, Search again !!');
        }
    }

    // useEffect(() => {
    //     searchRef.current.focus();
    // }, [search])

    return (
        <>
            {
                localUser !== null
                    ?
                    (
                        <div className="browse">
                            <Nav setLogOut={setLogOut} />
                            <div className="browse__githubpage">
                                <div className="browse__nav">
                                    <div className="browse__logo" >
                                        <Logo />
                                    </div>
                                    <div className="browse__search">
                                        <input ref={searchRef} value={search} onKeyPress={(event) => event.key === 'Enter' ? handleSearch() : null} onChange={(e) => handleChange(e)} type="text" />
                                        <Button onClick={handleSearch} variant="info">Search</Button>
                                    </div>
                                </div>
                                {
                                    isSearched && searchError === '' ?
                                        (
                                            <div className="results">

                                                <div className="result__top">
                                                    <div className="repository result__top__detail">
                                                        <i className="fas fa-book"></i>
                                                        <div>
                                                            <h4>
                                                                {userData.public_repos}
                                                            </h4>
                                                            <h6>Repository</h6>
                                                        </div>
                                                    </div>
                                                    <div className="followerURL result__top__detail">
                                                        <i className="fas fa-users"></i>
                                                        <div>
                                                            <h4>
                                                                {userData.followers}
                                                            </h4>
                                                            <h6>Followers</h6>
                                                        </div>
                                                    </div>
                                                    <div className="following result__top__detail">
                                                        <i className="fas fa-user-plus"></i>
                                                        <div>
                                                            <h4>
                                                                {userData.following}
                                                            </h4>
                                                            <h6>Following</h6>
                                                        </div>
                                                    </div>
                                                    <div className="gists result__top__detail">
                                                        <i className="fab fa-git-alt"></i>
                                                        <div>
                                                            <h4>
                                                                {userData.public_gists}
                                                            </h4>
                                                            <h6>Gists</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* 사용자, 리파지토리, 팔로워 정보 */}
                                                <div className="result__middle">
                                                    {/* 유저 정보 카드 */}
                                                    <div className="userInfo__detail">
                                                        <User userData={userData} />

                                                    </div>
                                                    {/* 리파지토리 카드 */}
                                                    <div className="userInfo__repositories">
                                                        <Repositories repoURL={repoURL} />
                                                    </div>
                                                    {/* 팔로워 카드 */}
                                                    <div className="userInfo__followers">
                                                        <Followers followerURL={followerURL} />
                                                    </div>
                                                </div>
                                                {/* 그래프사용해서 정보 보여줄것 */}
                                                <div className="result__bottom">
                                                    <div className="userInfo__graphs">
                                                        <Graphs repoURL={repoURL} />
                                                    </div>

                                                </div>
                                                <Footer />
                                            </div>
                                        )
                                        :
                                        <div className="before__search">
                                            {searchError === '' ? <h2>Search Github User</h2> : <h2>{searchError}</h2>}
                                        </div>

                                }

                            </div>
                        </div>
                    )
                    :
                    <>
                        {history.push('/')}
                    </>
            }
        </>
    )
}
