import React from "react";
import { Box } from "@mui/material";
import '../style/AboutUs.css'
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';

function AboutUs() {
    return(
        <div className='body'>
            <NavBar/>
        <div class="AboutUspage">
            <div className='paddingPageF'>
            <div className='marginpage'>
            <br/>
            <h3 className='TopicAU'>About Us</h3>
            {/* text */}
            <div className="AboutUsText">
                <p>
                Art Collection is Thailand’s premier antiques and art auction house. 
                We commenced operation on 2023. The management team’s expertise is 
                supplemented by a select group of advisors; themselves authorities from 
                academia in the faculties of fine arts, South Asian history, and 
                Buddhism. Together with collectors who have traded in Thai and South Asian antiques. 
                In keeping with our promise to promote art and culture,
                major exhibitions of rare antiquities, magnificent objets d’art, important historical photographs,
                beautiful paintings and sculptural works. These 
                promotional events are organized for Thais and foreigners to gain an appreciation 
                of the historical and cultural heritage of Thailand and the region.
                </p>
                <br/>
            </div>
            </div>
            {/* picture */}
            <div className="AUpicContainer">
                <img className="AUpic" src="https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="About us page"/>
            </div>

            {/* Contact Us */}
            <br/>
            <div className="ContactUsContainer">
                <h3 className='TopicContactUs'>Contact Us</h3>
                <p>Telephone: 012-121-2111 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    Email: ArtCollection@gmail.com</p>
            </div>

            {/* Footer */}
            <div>
                <Footer/>
            </div>
            </div>
        </div>
        </div>

    );
}

export default AboutUs;