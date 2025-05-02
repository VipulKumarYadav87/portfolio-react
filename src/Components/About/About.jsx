import React from 'react'; // farooque
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profileimg from '../../assets/profileimg.jpeg';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profileimg} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a recent graduate from ALARD Institute of Management Sciences, I am excited to apply my strong analytical and communication skills in a challenging role.</p>
                        <p>My coursework has equipped me with proficiency in a wide range of technologies, including C, HTML5, CSS3, JavaScript, jQuery, React.js, NodeJS, Express.js, Typescript, Angular, MySQL, and MongoDB.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML5 & CSS3</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>Bootstrap</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Typescript</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>Angular</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>Node JS</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Express JS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{width:"40%"}} /></div>
                        <div className="about-skill"><p>MySQL</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <a href="https://www.linkedin.com/in/vipul-kumar-yadav-programmer/" target="_blank" rel="noopener noreferrer">
                        <h1>LinkedIn</h1>
                        <p>
                            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='32'%20width='28'%20viewBox='0%200%20448%20512'%3e%3cpath%20fill='%23B197FC'%20d='M416%2032H31.9C14.3%2032%200%2046.5%200%2064.3v383.4C0%20465.5%2014.3%20480%2031.9%20480H416c17.6%200%2032-14.5%2032-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4%20416H69V202.2h66.5V416zm-33.2-243c-21.3%200-38.5-17.3-38.5-38.5S80.9%2096%20102.2%2096c21.2%200%2038.5%2017.3%2038.5%2038.5%200%2021.3-17.2%2038.5-38.5%2038.5zm282.1%20243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6%200-39.9%2027-39.9%2054.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8%2030.6-34.5%2062.9-34.5%2067.2%200%2079.7%2044.3%2079.7%20101.9V416z'/%3e%3c/svg%3e" alt="LinkedIn"/>
                        </p>
                    </a>
                </div>
                <div className="about-achievement">
                    <a href="https://github.com/VipulKumarYadav87" target="_blank" rel="noopener noreferrer">
                        <h1>Github</h1>
                        <p>
                            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='32'%20width='31'%20viewBox='0%200%20496%20512'%3e%3cpath%20fill='%2374C0FC'%20d='M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3%20.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5%20.3-6.2%202.3zm44.2-1.7c-2.9%20.7-4.9%202.6-4.6%204.9%20.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208z'/%3e%3c/svg%3e" alt="Github"/>
                        </p>
                    </a>
                </div>
                <div className="about-achievement">
                    <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new">
                        <h1>Email</h1>
                        <p>
                            <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='32'%20width='32'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23B197FC'%20d='M64%20112c-8.8%200-16%207.2-16%2016v22.1L220.5%20291.7c20.7%2017%2050.4%2017%2071.1%200L464%20150.1V128c0-8.8-7.2-16-16-16H64zM48%20212.2V384c0%208.8%207.2%2016%2016%2016H448c8.8%200%2016-7.2%2016-16V212.2L322%20328.8c-38.4%2031.5-93.7%2031.5-132%200L48%20212.2zM0%20128C0%2092.7%2028.7%2064%2064%2064H448c35.3%200%2064%2028.7%2064%2064V384c0%2035.3-28.7%2064-64%2064H64c-35.3%200-64-28.7-64-64V128z'/%3e%3c/svg%3e" alt="Email"/>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
