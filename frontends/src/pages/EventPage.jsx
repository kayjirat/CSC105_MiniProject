import './EventPage.css'
import * as React from 'react';
import Box from "@mui/material/Box";
import NavBar from '../component/Navbar';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

function EventPage() {

    let navigate = useNavigate();
        const handleClick = (destination) => {
            navigate(destination);
        }

    return(
        <div className='body'>
            <NavBar/>
        <div class="Eventpage">
            <div className='paddingPageF'>
            <div className='marginpage'>
            <br/>
            {/* // topic */}
            <h3 className='TopicEP'>Events</h3>
            <br/>
            {/* Events section */}
            <Box className='eventContainerEP'>
                {/* Events 1st */}
                <div className='eventPreveiew1stEP'>
                &emsp;
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                        09 May 2023 <br/>- 20 August 2023</h5>
                        &emsp;&emsp;&emsp;&emsp;
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1608371945786-d47d3cdd31da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='event'/> 
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold'}}>
                        The exhibition "Art-Thai-Time" visits Bhirasri Art Center <br/>
                        - Corrado Feroci (Sillap Bhirasri) 100-year project to Siam</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                        Organized by Bangkok Art and Culture Center in collaboration<br/>
                        with Bhirasri Art Center Foundation and Silpakorn University</h5>
                    </div>
                    <button className='eventButtonEP' onClick={() => handleClick("/eventInfo")}>See All</button>
                </div>
                <br/><hr/><br/>
                {/* Events 2nd */}
                <div className='eventPreveiew2ndEP'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                        28 April 2023 <br/>- 15 May 2023</h5>
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &emsp;
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1580136579585-48a5311ee2f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1608&q=80' alt='event'/> 
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold'}}>
                        Mandala art activity for the development of <br/>
                        concentration and concentration</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                        by the Education Department, Bangkok Art and Culture Center in collaboration<br/>
                        with the Department of Art Education, Faculty of Education, <br/>
                        Bansomdejchaopraya Rajabhat University</h5>
                    </div>
                    <button className='eventButtonEP' onClick={() => handleClick("/eventInfo")}>See All</button>
                </div>
                <br/><hr/><br/>
                {/* Events 3rd */}
                <div className='eventPreveiew3rdEP'>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                    12 August 2022 <br/>- 27 November 2022</h5>
                    &emsp;&emsp; &ensp;
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80' alt='event'/> 
                        &emsp; &emsp; 
                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold'}}>
                        Vijit Chao Phraya</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                        Through the Vijit Chao Phraya initiative, the colorfully-lit banks of the Chao-<br/>
                        Phraya river will be the setting of an evening bill of cultural performances at <br/>
                        historic sites on both sides of the river.</h5>
                    </div>
                    <button className='eventButtonEP' onClick={() => handleClick("/eventInfo")}>See All</button>
                </div>
                <br/><hr/><br/>
                {/* Events 4th */}
                <div className='eventPreveiew4thEP'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                        14 February 2022 <br/>- 27 May 2022</h5>
                        &emsp;&emsp;&emsp;&emsp;
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='event'/> 
                        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold'}}>
                        Bangkok Design Week 2022</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter'}}>
                        development of Bangkok to achieve more balance It needs to rely on the <br/>
                        creative power of people from different fields.</h5>
                    </div>
                    <button className='eventButtonEP'onClick={() => handleClick("/eventInfo")} >See All</button>
                </div>
            </Box>
            </div>
            <br/>

             {/* Footer */}
            <div>
            <Footer/>
            </div>
            </div>
        </div>
        </div>
    );
}

export default EventPage;