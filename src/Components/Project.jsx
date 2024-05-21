import { motion } from "framer-motion";
import ImageHashed from "./ImageHashed";

function Project() {
  const images = [
    {
      src: "../../images/photo00001.webp",
      hash: "L57KSn^-NzKSpMt9NgS*009Yngro",
    },
    {
      src: "../../images/photo00002.webp",
      hash: "L8HK|B020p?G|-4;0h?C01-;bc-o",
    },
    {
      src: "../../images/photo00003.webp",
      hash: "L14B8#}q100%JANbsm$$0i10^4}q",
    },
    {
      src: "../../images/photo00004.webp",
      hash: "LNFhkw9v%2%1%%xYWYWX0$xZRjRk",
    },
    {
      src: "../../images/photo00005.webp",
      hash: "LoHCAuNGRjWA~WRja~WV^,RPaykC",
    },
    {
      src: "../../images/photo00006.webp",
      hash: "L01Cc%xaD%Ioa{WVWCoL9ZNG%M%2",
    },
    {
      src: "../../images/photo00007.webp",
      hash: "LT7nX_tToLWAtpt9bHaxIsWEbFkC",
    },
    {
      src: "../../images/photo00008.webp",
      hash: "LrH_ukRjM|a_~XWAWAWB_3V@aea}",
    },
    {
      src: "../../images/photo00009.webp",
      hash: "LrH_ukRjM|a_~XWAWAWB_3V@aea}",
    },
    {
      src: "../../images/photo00010.webp",
      hash: "LZG7egoJE4j[}=f6WCj@9zWVxYaz",
    },
    {
      src: "../../images/photo00011.webp",
      hash: "LNB::U~Vo0ay03E1xus:xuM{D*WC",
    },
    {
      src: "../../images/photo00012.webp",
      hash: "LjH^kTIXSyay~9RlX7f6-laMX7f6",
    },
    {
      src: "../../images/photo00013.webp",
      hash: "LFG@lAxZ=Zsl~oWXSgsm06R+9_Ne",
    },
    {
      src: "../../images/photo00014.webp",
      hash: "LSMsD=M|WUR,~pM|ofr?~9f8kBW=",
    },
    {
      src: "../../images/photo00015.webp",
      hash: "LUBUm}WWJ8oL}EWWNboL]kazNbj[",
    },
    {
      src: "../../images/photo00016.webp",
      hash: "LKFE.PxCozI;~9X8R-oJ0gNaM|s:",
    },
    {
      src: "../../images/photo00017.webp",
      hash: "LEC%N*PX57ROGdOu%1WBIViv$xX9",
    },
    {
      src: "../../images/photo00018.webp",
      hash: "LQ7USrx_oIo0x|tTf5azIqRkaxWX",
    },
    {
      src: "../../images/photo00019.webp",
      hash: "LLFP1~~BD*WX02Nu%2M|Rn9Goz%L",
    },
    {
      src: "../../images/photo00020.webp",
      hash: "L45hYm9J05~kt6WCWCoe05-,^}4s",
    },
    {
      src: "../../images/photo00021.webp",
      hash: "LNBp|RNGRPs:G^jFr=WW0#s:W;f6",
    },
    {
      src: "../../images/photo00022.webp",
      hash: "LF6RTOt7M^R-x|s:V=a$E1WBt7og",
    },
    {
      src: "../../images/photo00023.webp",
      hash: "LbFNx4s.9un*}=oKNHjtIqR+t6bH",
    },
    {
      src: "../../images/photo00024.webp",
      hash: "L57oO}00-UM_0E~CX9kDL~-r9sxa",
    },
    {
      src: "../../images/photo00025.webp",
      hash: "LEHxd3~UM{j[00-:xaay010L-:j@",
    },
    {
      src: "../../images/photo00026.webp",
      hash: "L}Jk7ZofWBfQ~Vj[f6j@%1azjsj[",
    },
    {
      src: "../../images/photo00027.webp",
      hash: "L39r|$Vr1X}c0v}^,]J500xv^89?",
    },
    {
      src: "../../images/photo00028.webp",
      hash: "LGDJCl9F%1xa?wDiR+Wrkr9FRkoz",
    },
    {
      src: "../../images/photo00029.webp",
      hash: "L:Ep+;bIadof%%WBayayM|WBt7ay",
    },
    {
      src: "../../images/photo00030.webp",
      hash: "L79G]*-p00R*00Ip^%s,:gs:GKR%",
    },
    {
      src: "../../images/photo00031.webp",
      hash: "LYGSWSjCnMMw0raIacnz.At6aJoc",
    },
    {
      src: "../../images/photo00032.webp",
      hash: "LhI;6W=rkCa#~Vs+kCn%=|w]ayoL",
    },
    {
      src: "../../images/photo00033.webp",
      hash: "L$D0+XM|WXoJ%%V@j[f6N#s,oeay",
    },
    {
      src: "../../images/photo00034.webp",
      hash: "L{9S0}M|ododk]WBj?ayNHoeayWC",
    },
    {
      src: "../../images/photo00035.webp",
      hash: "LOG*=[~U-nxu~XRjWBof0ME2RkoJ",
    },
    {
      src: "../../images/photo00042.webp",
      hash: "L9E3D50%EOjF0I=^$$bIQ8W9WVkB",
    },
    {
      src: "../../images/photo00044.webp",
      hash: "LrB4,^yFV;o#yGp0V@axR;RoV@ad",
    },
    {
      src: "../../images/photo00046.webp",
      hash: "LHE{U^0NW9s%0[xuxsRj0U?ZNMxb",
    },
    {
      src: "../../images/photo00052.webp",
      hash: "LVFYy8IVs,jr1B%0WBWVIBWsofof",
    },
    {
      src: "../../images/photo00054.webp",
      hash: "LcIzI_]#oej]~Cs8W;so^QwcWCoe",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="w-4/5 mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl sm:text-4xl w-full px-4 py-16 sm:mt-24 lg:mt-42 font-custom2 text-text text-center">
          Portfolio Showcase
        </h1>

        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-2 p-4 ">
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.03 * index }}
              viewport={{ once: true }}
              key={index}
            >
              <ImageHashed
                src={image.src}
                hash={image.hash}
                alt={`Image ${index + 1}`}
                stl={
                  "h-[400px] w-[380px] sm:h-[360px] sm:w-[340px] md:h-[320px] md:w-[380px] object-cover rounded"
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
