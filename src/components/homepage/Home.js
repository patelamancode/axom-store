import './Home.css';
import { Box, Link } from '@material-ui/core';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Home() {
    return(
        <>
            <Box>
            <Carousel autoPlay>
                <div style={{height:"5rem"}}>
                    <Link to="/product">
                        <img className="home-banner-img" src="https://images.unsplash.com/photo-1540111970170-b1c4d4fbadaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" />
                    </Link>
                </div>
                <div>
                    <Link to="/product">
                        <img className="home-banner-img" src="https://images.unsplash.com/photo-1522898467493-49726bf28798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                    </Link>
                </div>
                <div>
                    <Link to="/product">
                        <img className="home-banner-img" src="https://images.unsplash.com/photo-1597075933405-a06cb4d6cecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />
                    </Link>
                </div>
            </Carousel>
            </Box>
        </>
    )
}

export default Home;
