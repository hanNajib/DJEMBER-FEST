import { motion } from "framer-motion";

function Loading() {
  const svgVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: [0.8, 1.1, 1],
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2, 
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 1.2, 
        ease: "easeInOut",
      },
    },
  };

  const logoFill = {
    hidden: { fill: "#A0C4FF" },
    visible: {
      fill: ["#A0C4FF", "#5080C1", "#3572C6", "#1F6E8C"],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center fixed overflow-hidden z-50 top-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400 animate-pulse opacity-30" />
      <img
        src="/image/svg-bg-destinasi.svg"
        alt=""
        className="w-screen scale-125 p-0 absolute opacity-[0.02]"
      />

      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <g clipPath="url(#clip0_39_222)">
          <motion.path
            d="M297.528 425.901H218.792C213.854 425.901 209.849 421.897 209.849 416.958V307.987C209.849 303.047 213.854 299.044 218.792 299.044H270.131C275.07 299.044 279.074 303.047 279.074 307.987V347.733C279.074 352.673 283.077 356.676 288.018 356.676H299.353C326.02 356.676 341.314 339.991 341.314 310.894V310.283C341.314 284.719 328.509 267.608 307.058 264.49C304.76 264.284 302.442 264.108 300.166 263.97L299.871 263.962C299.748 263.959 299.624 263.954 299.5 263.954L299.319 263.952L293.856 263.8H238.18C209.858 263.8 184.229 247.017 172.907 221.059L161.655 195.269H298.573C332.301 195.269 360.635 206.457 380.514 227.625C399.671 248.025 409.799 276.289 409.799 309.363V309.974C409.799 343.149 399.572 371.717 380.227 392.589C360.027 414.381 331.43 425.901 297.528 425.901Z"
            variants={{ ...pathVariants, ...logoFill }}
          />
          <motion.path
            d="M409.799 298.058V298.672C409.799 331.845 399.572 360.413 380.227 381.284C360.027 403.077 331.43 414.596 297.528 414.596H218.792C213.854 414.596 209.849 410.593 209.849 405.653V296.682C209.849 291.742 213.854 287.739 218.792 287.739H270.131C275.07 287.739 279.074 291.742 279.074 296.682V336.432C279.074 341.368 283.077 345.371 288.018 345.371H299.353C326.02 345.371 341.314 328.686 341.314 299.59V298.978C341.314 273.415 328.509 256.305 307.058 253.186C304.76 252.979 302.442 252.804 300.166 252.666L299.871 252.658C299.748 252.655 299.624 252.65 299.5 252.65L299.319 252.647L293.856 252.495H238.18C209.858 252.495 184.229 235.713 172.907 209.755L161.655 183.964H298.573C332.301 183.964 360.635 195.153 380.514 216.321C399.671 236.72 409.799 264.984 409.799 298.058Z"
            variants={pathVariants}
          />
          <motion.path
            d="M114.257 179.571L107.432 170.892C90.1807 148.948 97.5349 116.685 122.589 104.378L233.08 50.0969V72.4422C233.08 89.5323 223.32 105.128 207.956 112.615L134.502 148.41C129.156 151.015 124.473 154.833 120.936 159.616C117.387 164.419 114.335 171.008 114.571 179.319C116.994 177.397 119.673 175.695 122.584 174.267L233.076 119.985V142.331C233.076 159.421 223.316 175.016 207.952 182.503L134.502 218.294C129.156 220.899 124.473 224.717 120.936 229.5C117.288 234.44 114.166 241.256 114.601 249.895L107.432 240.78C92.2719 221.495 96.1062 194.247 114.257 179.571Z"
            variants={{ ...pathVariants, ...logoFill }}
          />
        </g>
        <defs>
          <clipPath id="clip0_39_222">
            <rect width="500" height="500" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
}

export default Loading;
