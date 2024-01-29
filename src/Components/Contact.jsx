// import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="w-4/5 mx-auto flex flex-col sm:flex-row items-center justify-center h-screen">
      <div className="h-full flex flex-col justify-center items-center sm:block sm:h-1/2 w-full sm:w-2/3">
        <h1 className="text-5xl sm:text-9xl mt-10 font-custom font-bold">
          Get in <br />
          <span className="text-rose-400"> Touch </span>{" "}
        </h1>

        <div className="flex h-8 justify-start p-2 sm:gap-10 gap-10 text-center sm:text-start mt-24 items-center flex-wrap cursor-pointer">
          <p className="font-custom">Follow me : </p>

          <a href="mailto:kesraoui15003@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          <a
            href="https://www.linkedin.com/in/kesraoui-mohamed-298a6a147/"
            target="_blank "
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a href="https://twitter.com/KesraouiMohame1" target="_blank ">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>

          <a href="https://instagram.com/massiliapixx/" target="_blank ">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <div className="hidden sm:block sm:h-1/2 w-full sm:w-1/3">
        <img src="../../images/photo00003.webp" alt="" />
      </div>
    </div>
  );
}

export default Contact;
