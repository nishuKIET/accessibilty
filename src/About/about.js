import React from 'react';
import MediaCard from '../MediaCard/MediaCard';
// import card1 from '../assets/demo1.png';
// import card2 from '../assets/demo2.jpg';
// import card3 from '../assets/demo3.jpg';
import card1 from '../assets/card1.PNG';
import card2 from '../assets/card2.PNG';
import card3 from '../assets/card3.PNG';


class About extends React.Component{


    // constructor(props) {
    //     super(props);
    //     // this.state = {cardData};
    //   }

      
    render(){
        
      
        var cardData=[];
        
        var cardImages=[card1,card2,card3];
      var titles =['Startup','Small Business','Enterprise'];
       var desc_arr = ['With The Significant Presence In The Global Market, We Help Startups Create A Digital Platform To Run The Business Operations Effectively.',

                        'We Provide All Kinds Of Web And Mobile Application Solutions For Almost All Small Businesses Help Them Dominate The Digital Marketplace.',

                        'We Have Delivered Web And App Solutions Across Multiple Industry Verticals Over The Years And Also Helped Enterprises In Diverse Domains.'
                    ];

                    for(var i=0;i<3;i++){
                        cardData.push(<MediaCard image = {cardImages[i]} title = {titles[i]} description = {desc_arr[i]}/>);
                     
                 }
       

        return(
        <div className = "Second-page">
        <h2>We Transform Industries And Businesses</h2>

        <p className = "desc">We are a team of creative developers and professionals who believe in creating an inclusive
            and equitable work environment for businesses. By utilizing latest technology and frameworks,
            we design, build, and deliver client-centric and industry-specific Web and App Development
            Solutions to transform the businesses, and transform the future.
        </p>

        <div className = "card-container" style={{display: 'flex'}}>
            {cardData}
       
            </div>
        </div>
        );
    }
}

export default About;