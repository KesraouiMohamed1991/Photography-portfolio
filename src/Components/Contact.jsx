import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";

const socialMediaLinks = [
  {
    icon: faEnvelope,
    link: "mailto:kesraoui15003@gmail.com",
    label: "Email",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/kesraoui-mohamed-298a6a147/",
    label: "LinkedIn",
  },
  {
    icon: faXTwitter,
    link: "https://twitter.com/KesraouiMohame1",
    label: "Twitter",
  },
  {
    icon: faInstagram,
    link: "https://instagram.com/massiliapixx/",
    label: "Instagram",
  },
];

function Contact() {
  return (
    <div className="w-4/5 mx-auto flex flex-col sm:flex-row items-center justify-center h-screen">
      <div className="h-full overflow-hidden flex flex-col justify-center items-center sm:block sm:h-1/2 w-full sm:w-2/3">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-5xl sm:text-9xl mt-10 font-custom font-bold"
        >
          Get in <br />
          <span className="text-rose-400"> Touch </span>{" "}
        </motion.h1>

        <div className="flex h-8 justify-start p-2 sm:gap-10 gap-10 text-center sm:text-start mt-24 items-center flex-wrap cursor-pointer">
          <p className="font-custom">Follow me : </p>

          {socialMediaLinks.map(({ icon, link, label }, index) => (
            <motion.a
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden sm:block sm:h-1/2 w-full sm:w-1/3"
      >
        <img
          height={400}
          width={300}
          src="../../images/photo00004.webp"
          alt="image david parado"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

export default Contact;
