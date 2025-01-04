"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);
  const [dynamicOptions, setDynamicOptions] = useState({
    number: 10,
    distance: 250,
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const viewPortWidth = document.body.clientWidth;
    viewPortWidth < 768
      ? setDynamicOptions({
          number: 10,
          distance: 250,
        })
      : setDynamicOptions({
          number: 15,
          distance: 500,
        });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      fpsLimit: 120,
      background: {
        color: "#000000", // This can remain as a fallback if the image doesn't load
        image: "url('Background.png')", // Path to your background image
        position: "50% 50%", // Optional: Center the image
        repeat: "no-repeat", // Optional: Prevent tiling
        size: "cover", // Optional: Cover the entire canvas
      },
      particles: {
        color: {
          value: "#151341",
        },
        opacity: {
          value: 0.5,
        },
        number: {
          value: dynamicOptions.number,
        },
        links: {
          enable: true,
          distance: dynamicOptions.distance,
          color: "#151341",
          opacity: 0.5,
          width: 1,
          triangles: {
            enable: true,
            color: "#2c1c48", // purple
            opacity: 0.5,
          },
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          outModes: "out",
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 50,
          },
          push: {
            enable: false,
          },
        },
      },
    }),
    [dynamicOptions.distance, dynamicOptions.number]
  );
  

  if (init) {
    return (
      <Particles id="tsparticles" options={options} className="fixed inset-0" />
    );
  }

  return null;
};

export default Background;
