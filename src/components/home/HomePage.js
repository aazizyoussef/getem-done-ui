import React from 'react';
import {Link, IndexLink} from 'react-router' ;

class HomePage extends React.Component {
    render(){
        return (
            <div className = "jumbotron">
                <h1>PluralSight Administration</h1>
                <p>React, redux and react router in ES6 for ultra responsive web app </p>
                <Link to="/about" className = "btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}
export default HomePage;