import React from "react";
import { motion } from "framer-motion";

const PaidProductAnimatedSVG = () => {
    return (
        <motion.svg
            width="419"
            height="318"
            viewBox="0 0 419 318"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            {/* Circle path with motion for animation */}
            <motion.path
                d="M209.86 256.32C262.623 256.32 305.396 213.436 305.396 160.536C305.396 107.635 262.623 64.751 209.86 64.751C157.097 64.751 114.324 107.635 114.324 160.536C114.324 213.436 157.097 256.32 209.86 256.32Z"
                fill="#FFDCF3"
                stroke="#D52E9C"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                animate={{
                    x: [0, 20, 40, 20, 0], // Example of moving it
                    y: [0, 20, 0, -20, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                }}
            />
            {/* Other path elements */}
            <motion.path
                d="M270.13 219.156L265.231 216.929L260.349 214.802L255.294 212.726L249.896 210.47L244.318 208.254L240.099 206.622L238.067 204.996L236.956 202.133L235.61 197.739L234.392 194.217L232.456 193.283L231.744 192.569L231.917 181.514L232.933 177.633L235.155 173.869L237.299 167.832L238.628 162.269L238.931 161.83L241.137 157.751L242.04 152.26L242.629 145.312L240.951 143.67L240.143 142.865L240.155 134.286L239.992 116.368L239.739 114.613L237.074 109.499L232.821 104.841L223.877 98.039L223.714 95.7043C223.68 95.1924 223.349 94.7423 222.867 94.5623C218.394 92.8633 213.518 92.5426 208.867 93.6453L201.757 95.7043L194.771 98.7366L187.527 103.71L181.737 111.383L180.418 117.071L180.3 123.451L180.137 131.389L180.121 142.308L179.346 143.04L178.881 143.034L177.309 144.626L177.467 146.713L177.691 150.117L178.235 154.499L180.536 160.727L181.321 161.852L182.135 165.211L183.757 172.041L188.133 178.786L188.784 181.014L188.234 185.312L187.578 192.8L187.275 193.25L186.08 193.452L184.105 194.335L182.763 198.307L182.404 200.355L180.586 204.518L179.868 205.992L178.454 206.588L172.669 208.934L167.776 210.993L161.441 213.66L155.005 216.608L147.94 219.882L138.8 224.692C156.284 244.118 181.591 256.332 209.748 256.332C238.039 256.332 263.452 244 280.948 224.405L277.323 222.577L270.13 219.156Z"
                fill="#D52E9C"
                animate={{
                    opacity: [0, 1, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                }}
            />
            {/* Example of a dashed line path with motion */}
            <motion.path
                d="M105.565 249.334L61.3262 286.993"
                stroke="#D52E9C"
                strokeWidth="4.9111"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="9.82 9.82"
                animate={{
                    strokeDashoffset: [0, 100, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                }}
            />
            {/* More paths with motion for animation */}
            <motion.path
                d="M73.0309 160.537H15"
                stroke="#D52E9C"
                strokeWidth="4.9111"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="9.82 9.82"
                animate={{
                    strokeDashoffset: [0, 100, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                }}
            />
        </motion.svg>
    );
};

export default PaidProductAnimatedSVG;
