import React from 'react';
import Layout from '../../components/Layout';
import {Jumbotron} from 'react-bootstrap';

const Home = (props) =>{
    return(
        <Layout>
                <Jumbotron className="text-center" style={{margin: '5rem',backgroundColor:'white'}}>
                <h1>Welcome to admin dashboard</h1>
                <p>This is random para just for testing pursone. i will delete ut soom . now these i am watcjing new web series of Bobby deol named AASHRAM which is related to hypocrisy of modern babas how they are making fools</p>
                </Jumbotron>
            </Layout>
    )
}

export default Home;