import { FaLocationArrow, FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import MagicButton from "./MagicButton";
import Link from 'next/link';

const socialMedia = [
  { id: 1, name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/yourprofile" },
  { id: 2, name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/md-faysal-ahamed-176898282/" },
  { id: 3, name: "GitHub", icon: <FaGithub />, link: "https://github.com/mdfaysalbabu" },
  { id: 4, name: "Facebook", icon: <FaFacebook />, link: "https://www.facebook.com/mdfoysal.bbau?mibextid=ZbWKwL" },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" id="contact">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
          Ready to Elevate Your <span className="text-blue-500">Digital Presence</span>?
        </h1>
        <p className="text-gray-400 md:mt-10 my-5 text-lg">
          Reach out to me today and let&apos;s discuss how I can help you achieve your ambitious goals.
        </p>
        <Link href="mailto:mdfaysalahamed898@gmail.com">
          <MagicButton
            title="Let's Connect"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 mt-16">
        <p className="md:text-base text-sm md:font-normal font-light text-white">
          &copy; 2024 Md Faysal Ahamed. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <Link href={info.link} key={info.id} aria-label={info.name}>
              <div
                className="w-10 h-10 flex justify-center items-center bg-gray-700 hover:bg-gray-600 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {info.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
