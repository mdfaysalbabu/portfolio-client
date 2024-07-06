import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDownload,
  FaYoutube,
} from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="home mt-20 flex flex-col md:flex-row justify-between items-center gap-10 p-5"
      id="home"
    >
      <div className="home-content lg:w-[60%]">
        <h3 className="font-semibold lg:text-[2.4rem] text-[1.4rem] text-teal-600">
          Greetings, Im
        </h3>
        <h1 className="font-extrabold lg:text-[4.2rem] text-[2.6rem] text-teal-800">
          Md Faysal Ahamed
        </h1>
        <h3 className="font-semibold lg:text-[2.4rem] text-[1.4rem]">
          A Passionate{" "}
          <span className="text-pink-600">Full Stack Developer</span>
        </h3>
        <p className="lg:text-[1.4rem] text-[1.1rem] text-gray-700 mt-4">
          Building interactive and dynamic web applications with the latest
          technologies is what I thrive on.
        </p>
        <div className="social-media flex gap-6 mt-6">
          <Link
            href="https://www.facebook.com/mdfoysal.bbau?mibextid=ZbWKwL"
            legacyBehavior
          >
            <a className="text-teal-600 hover:text-teal-800">
              <FaFacebookF size={28} />
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/md-faysal-ahamed-176898282/"
            legacyBehavior
          >
            <a className="text-teal-700 hover:text-teal-900">
              <FaLinkedinIn size={28} />
            </a>
          </Link>
        </div>
        <Link
          href="https://drive.google.com/file/d/1J1e--bzSRj3NprPkj2c8VmY48Re_hT-X/view?usp=drive_link"
          passHref
          legacyBehavior
        >
          <a className="inline-flex items-center gap-2 mt-6 bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition duration-300 transform hover:scale-105">
            <FaDownload />
            Download Resume
          </a>
        </Link>
      </div>
      <div className="home-img lg:w-[40%] mt-6 md:mt-0">
        <Image
          className="rounded-3xl shadow-2xl border-4 border-white"
          src="https://i.ibb.co/dPVcdcH/1685692815451-1-01-removebg-preview.png"
          alt="Profile Picture"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Banner;
