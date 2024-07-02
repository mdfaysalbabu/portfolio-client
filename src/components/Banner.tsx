import Link from "next/link";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaDownload} from "react-icons/fa";


const Banner = () => {
    return (
        <section className="home mt-40 flex lg:flex-row flex-col justify-between items-center gap-10" id="home">
        <div className="home-content w-[60%] ">
            <h3>Hello, It&apos;s me</h3>
            <h1>Pritom Roy</h1>
            <h3>And I&apos;m a <span className="my-text text-purple">Full Stack Developer</span></h3>
            <p className=''>I love the world of web development and thrive on the ever-evolving technologies that emerge today.</p>
            <div className="social-media">
                <Link href="https://www.facebook.com/">
                <FaFacebookF/>
                </Link>
                <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den-in">
                <FaTwitter />

                </Link>
                <Link href="https://www.instagram.com/pritom2239/">
                <FaInstagram />


                </Link>
                <Link href="https://www.linkedin.com/in/pritom-roy-aba25b279/"><FaLinkedinIn />
                </Link>
            </div>
            <Link href="https://drive.google.com/file/d/1G9tVXR-2Fk3CZWJDLZIYyytA5g5Wb_fZ/view?usp=drivesdk" className="my-btn">
            <FaDownload />
            Download Resume</Link>
        </div>
        <div className="home-img w-[40%] ">
            <img className='rounded-2xl' src="profile-pic (12).png" alt=""/>
          
        </div>
        </section>
    );
};

export default Banner;