import '../style/EventPage.css'
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
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter', marginLeft:'2%'}}>
                        09 May 2023 <br/>- 20 July 2023</h5>
                        
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1608371945786-d47d3cdd31da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='event'/> 

                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold',marginLeft:'6vh'}}>
                        The exhibition "Art-Thai-Time" visits Bhirasri Art Center 
                        - Corrado Feroci (Sillap Bhirasri) <br/>100-year project to Siam</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter',marginLeft:'6vh'}}>
                        Organized by Bangkok Art and Culture Center in collaboration
                        with Bhirasri <br/>Art Center Foundation and Silpakorn University</h5>
                    </div>
                    <button className='eventButtonEP' onClick={() => handleClick("/eventInfo")}>See All</button>
                </div>
                <br/><hr/><br/>
                {/* Events 2nd */}
                <div className='eventPreveiew2ndEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter', marginLeft:'2%'}}>
                        28 April 2023 <br/>- 15 May 2023</h5>
                        
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1580136579585-48a5311ee2f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1608&q=80' alt='event'/> 

                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold',marginLeft:'6vh'}}>
                        Mandala art activity for the development of <br/>
                        concentration and concentration</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter',marginLeft:'6vh'}}>
                        by the Education Department, Bangkok Art and Culture Center in collaboration<br/>
                        with the Department of Art Education, Faculty of Education, 
                        Bansomdejchaopraya Rajabhat University</h5>
                    </div>
                    <button className='eventButtonEP' onClick={() => handleClick("/eventInfo")}>See All</button>
                </div>
                <br/><hr/><br/>
                {/* Events 3rd */}
                <div className='eventPreveiew3rdEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter', marginLeft:'2%'}}>
                    12 March 2022 <br/>- 27 June 2022</h5>
               
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80' alt='event'/> 
                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold',marginLeft:'6vh'}}>
                        Vijit Chao Phraya</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter',marginLeft:'6vh'}}>
                        Through the Vijit Chao Phraya initiative, the colorfully-lit banks of the Chao-
                        Phraya river will be<br/> the setting of an evening bill of cultural performances at 
                        historic sites on both sides of the river.</h5>
                    </div>
                    <button className='eventButtonEP' onClick={() => handleClick("/eventInfo")}>See All</button>
                </div>
                <br/><hr/><br/>
                {/* Events 4th */}
                <div className='eventPreveiew4thEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter', marginLeft:'2%'}}>
                        14 Jan 2022 <br/>- 27 June 2022</h5>
             
                    <img className='eventPictureEP' src='https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='event'/> 

                    <div className='eventContentEP'>
                    <h5 style={{fontSize: '1rem', fontWeight: 'bold',marginLeft:'6vh'}}>
                        Bangkok Design Week 2022</h5>
                    <h5 style={{fontSize: '1rem', fontWeight: 'lighter',marginLeft:'6vh'}}>
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