function Footer() {
  const ThisYear = new Date().getFullYear();
  return (
    <div className="w-full  flex flex-col items-center justify-center h-48 bg-gradient-to-r from-rose-100 to-lime-100 ">
      <p> Kesraoui Mohamed</p>
      <p className="text-center w-full text-xs  text-black ">
        ©{ThisYear} All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
