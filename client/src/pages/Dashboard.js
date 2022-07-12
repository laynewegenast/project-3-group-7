import React from "react";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

const Dashboard = () => {

    return (
        <main>
        <Header />
        <Link to="/explore"> EXPLORE</Link> 
        <button type='submit' id='logout' className=''>LOGOUT</button>

        {/* display for api images that have been commented on that will show up on feed */}
        </main>
    );
};

export default Dashboard;