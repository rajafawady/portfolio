import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, className }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div onClick={handleClick}>
    <Zoom
    >
      <img
        src={src}
        alt={alt}
        className={`${className} ${isZoomed ?? "shadow-lg"}`}
      />
    </Zoom>
    </div>
  );
};
