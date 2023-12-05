import type {IOptions, RecursivePartial} from "tsparticles-engine";
import androidIcon from "../../assets/icons/android-icon-svgrepo-com.svg";
import cssIcon from "../../assets/icons/css-3-svgrepo-com.svg";
import tailwindIcon from "../../assets/icons/tailwindcss-icon-svgrepo-com.svg";
import flutterIcon from "../../assets/icons/flutter-svgrepo-com.svg";
import javaIcon from "../../assets/icons/java-svgrepo-com.svg";
import javascriptIcon from "../../assets/icons/javascript-svgrepo-com.svg";
import reactIcon from "../../assets/icons/react-svgrepo-com.svg";
import vueIcon from "../../assets/icons/vue-svgrepo-com.svg";
import typescriptIcon from "../../assets/icons/typescript-icon-svgrepo-com.svg";
import springIcon from "../../assets/icons/spring-icon-svgrepo-com.svg";

export const headerOptions: RecursivePartial<IOptions> | undefined = {
  autoPlay: true,

  fullScreen: {
    enable: false,
    zIndex: 0,
  },

  detectRetina: true,
  fpsLimit: 120,

  interactivity: {
    detectsOn: "window",
    events: {
      onDiv: [
        {
          selectors: "#repulse-div",
          enable: true,
          mode: "bounce",
          type: "circle",
        },
      ],

      onHover: {
        enable: true,
        mode: ["bubble", "grab"],
        parallax: {
          enable: true,
          force: 200,
          smooth: 20,
        },
      },
      resize: {
        delay: 0.8,
        enable: true,
      },
    },

    modes: {
      bounce: {
        distance: 100,
      },
      bubble: {
        distance: 100,
        duration: 2,
        size: 35,
        opacity: 1.5,
        mix: false,
      },

      repulse: {
        distance: 200,
        factor: 200,
        speed: 1,
        maxSpeed: 50,
      },
    },
  },

  particles: {
    collisions: {
      enable: true,
      mode: "bounce",
    },
    color: {
      value: "#000",
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      drift: 0,
      enable: true,
      random: true,
      size: false,
      speed: 3,
      outMode: "bounce",
    },
    number: {
      limit: 0,
      value: 50,
    },

    opacity: {
      random: {
        enable: true,
        minimumValue: 0.5,
      },
      value: 0.6,
      animation: {
        count: 0,
        enable: true,
        speed: 0.2,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    shape: {
      type: "image",
      image: [
        {
          src: androidIcon,
        },
        {
          src: cssIcon,
        },
        {
          src: tailwindIcon,
        },
        {
          src: flutterIcon,
        },
        {
          src: javaIcon,
        },
        {
          src: javascriptIcon,
        },
        {
          src: reactIcon,
        },
        {
          src: vueIcon,
        },
        {
          src: typescriptIcon,
        },
        {
          src: springIcon,
        },
      ],
    },

    size: {
      random: {
        enable: true,
        minimumValue: 25,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.25,
        decay: 0,
        sync: true,
        destroy: "none",
        startValue: "random",
      },
    },

    lineLinked: {
      blink: false,
      color: {
        value: "#aaa",
      },
      consent: true,
      distance: 120,
      enable: true,
      frequency: 15,
      opacity: 0.7,
      width: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
};
