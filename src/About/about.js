import React from 'react';
import MediaCard from '../MediaCard/MediaCard'


class About extends React.Component{
    render(){
        return(
        <div className = "Second-page">
        <h2>We Transform Industries And Businesses</h2>

        <p>We are a team of creative developers and professionals who believe in creating an inclusive
            and equitable work environment for businesses. By utilizing latest technology and frameworks,
            we design, build, and deliver client-centric and industry-specific Web and App Development
            Solutions to transform the businesses, and transform the future.
        </p>

        <div>
            <MediaCard/></div>
        </div>
        );
    }
}

export default About;