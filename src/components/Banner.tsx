import Link from "next/link";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaDownload,FaYoutube} from "react-icons/fa";


const Banner = () => {
    return (
        <section className="home mt-40 flex md:flex-row flex-col justify-between items-center gap-10  p-0" id="home">
        <div className="home-content lg:w-[60%] ">
            <h3 className="font-bold lg:text-[2.1rem] text-[1.2rem]">Hello, It&apos;s me</h3>
            <h1 className="font-bold lg:text-[4rem] text-[2.4rem]">Pritom Roy</h1>
            <h3 className="font-bold lg:text-[2.1rem] text-[1.2rem]">And I&apos;m a <span className="my-text text-purple">Full Stack Developer</span></h3>
            <p className='lg:text-[1.3rem] text-[1rem]'>I love the world of web development and thrive on the ever-evolving technologies that emerge today.</p>
            <div className="social-media">
                <Link href="https://www.facebook.com/">
                <FaFacebookF/>
                </Link>
                <Link href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den-in">
                <FaTwitter />

                </Link>
                <Link href="https://www.youtube.com/@codewithroy948/videos">
                <FaYoutube/>


                </Link>
                <Link href="https://www.linkedin.com/in/pritom-roy-aba25b279/"><FaLinkedinIn />
                </Link>
            </div>
            <Link href="https://drive.google.com/file/d/1W8fWBcDh8QPUGRmFjj9r6S7Q101t6eGd/view?usp=sharing" className="my-btn">
            <FaDownload />
            Download Resume</Link>
        </div>
        <div className="home-img lg:w-[40%] mt-5 md:mt-0 ">
            <img className='rounded-2xl lg:w-[35vw] md:w-[100vw] w-[80vw]' src="profile-pic (12).png" alt=""/>
          
        </div>
        </section>
    );
};

export default Banner;