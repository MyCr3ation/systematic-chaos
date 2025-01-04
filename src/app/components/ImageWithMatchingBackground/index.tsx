"use client";

import { useEffect, useRef, useState } from "react";

const ImageWithMatchingBackground = ({
  imageUrl,
  className,
}: {
  imageUrl: string;
  className: string;
}) => {
  const [hexCode, setHexCode] = useState("");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageUrl;

    image.onload = () => {
      if (ctx) {
        // Draw the image onto the canvas
        ctx.drawImage(image, 0, 0);

        // Get the pixel data of the top-left corner (position: 0,0)
        const pixelData = ctx?.getImageData(0, 0, 1, 1).data;

        // Extract RGB values from the pixel data
        const [red, green, blue] = pixelData;

        // Convert RGB values to hex code
        setHexCode(rgbToHex(red, green, blue));
      }
    };
  }, [imageUrl]);

  // Helper function to convert RGB values to hex code
  const rgbToHex = (r: number, g: number, b: number) =>
    `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;

  return (
    <>
      <canvas ref={canvasRef} className="hidden" />

      <div
        className="p-4"
        style={{
          backgroundColor: hexCode,
        }}
      >
        <div
          className={`${className} bg-contain bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      </div>
    </>
  );
};

export default ImageWithMatchingBackground;
