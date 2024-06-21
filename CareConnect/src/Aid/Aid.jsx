import React, { useState } from 'react';
import axios from 'axios';
import './Aid.css';
import { useNavigate } from 'react-router-dom';

function Aid() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchYoutube = async () => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: 'snippet',
                maxResults: 20,
                q: searchQuery,
                type: 'video',
                key: 'AIzaSyA-owwRYm1ZlsQ0m3kaq-WoNdDB4pEXY70'
            }
        });

        setResults(response.data.items);
    };

    return (
        <div className="container">
            <div className="back">
                <button onClick={() => navigate('/')}>First Aid Method</button>     
            </div>
            <div className="search-aid">
                <input id="search-input" type="text" placeholder="Type to Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <button className="search-button" onClick={searchYoutube}>Search</button>
            </div>
            <div id="results">
                {results.map(item => (
                    <div key={item.id.videoId}>
                        <h3>{item.snippet.title}</h3>
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Aid;