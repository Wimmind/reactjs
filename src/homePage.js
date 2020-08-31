import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="homepage_container">
        <h1>День добрый</h1>
        <Link to={{pathname: '/slider'}}>
            <button>
                К слайдеру
            </button>
        </Link>
    </div>
  );
}


export default HomePage;
