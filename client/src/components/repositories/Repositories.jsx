import React, { useEffect, useState } from 'react'

export const Repositories = ({ repoURL }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        (
            async () => {
                const response_repo = await fetch(repoURL);
                const data_repo = await response_repo.json();
                setRepos(data_repo);
            }
        )();
    }, [repoURL])

    return (
        <div className="repositories">
            <div className="repositories__nav">
                <i className="fas fa-box-open"></i>
                <h3>respositories</h3>
            </div>
            <div>
                {
                    repos.map((repo) => {
                        return (
                            <div key={repo.id} className="repositories__detail">
                                <h6>{repo.name}</h6>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
