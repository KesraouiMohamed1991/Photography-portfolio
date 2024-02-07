import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

// eslint-disable-next-line react/prop-types
function ImageHashed({ src, hash, alt, stl }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();

    image.onload = () => {
      setImageLoaded(true);
    };

    image.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash={hash}
          width={380}
          height={400}
          quality={100}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}

      {imageLoaded && (
        <img className={stl} src={src} alt={alt} loading="lazy" />
      )}
    </>
  );
}

export default ImageHashed;
