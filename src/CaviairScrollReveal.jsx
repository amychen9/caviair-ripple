import React from "react";
import { motion } from "framer-motion";

import C from "./assets/C.svg";
import A from "./assets/A.svg";
import V from "./assets/V.svg";
import I from "./assets/I.svg";
import R from "./assets/R.svg";
import Fish from "./assets/Fish.svg";

const STEPS = [
  { L: C, key: "C", word: "Classroom" },
  { L: A, key: "A", word: "AI" },
  { L: V, key: "V", word: "Validation" },
  { L: I, key: "I", word: "Integrated" },
  { L: A, key: "A2", word: "Academic" },
  { L: I, key: "I2", word: "Integrity" },
  { L: R, key: "R", word: "Resource" },
];

export default function CaviairScrollReveal() {
  return (
    <div className="min-h-screen bg-white font-ubuntu flex flex-col justify-center items-center">
      <div className="flex space-x-6 items-end">
        {STEPS.map((s, i) => (
          <motion.img
            key={s.key}
            src={s.L}
            alt={s.word}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.3,   // ripple delay per letter
              repeat: Infinity, // loop forever
              repeatDelay: 2,   // wait before starting again
            }}
            className="h-20 w-auto sm:h-28 md:h-32"
          />
        ))}

        {/* Fish animates as part of ripple */}
        <motion.img
          src={Fish}
          alt="CAVIAIR fish"
          initial={{ opacity: 0, x: 40, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: STEPS.length * 0.3, // start after last letter
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="h-20 w-auto sm:h-28 md:h-32"
        />
      </div>
    </div>
  );
}

// import React from "react";
// import { motion } from "framer-motion";

// import C from "./assets/C.svg";
// import A from "./assets/A.svg";
// import V from "./assets/V.svg";
// import I from "./assets/I.svg";
// import R from "./assets/R.svg";
// import Fish from "./assets/Fish.svg";

// // Acronym steps (fish replaces the "final logo slide")
// const STEPS = [
//   { L: C, key: "C", word: "Classroom", blurb: "Built to live where teaching and learning actually happen." },
//   { L: A, key: "A", word: "AI", blurb: "Thoughtful AI support that augments—not replaces—human judgment." },
//   { L: V, key: "V", word: "Validation", blurb: "Transparent checks and signals for academic integrity." },
//   { L: I, key: "I", word: "Integrated", blurb: "Seamlessly connected to LMS workflows and assignments." },
//   { L: A, key: "A2", word: "Academic", blurb: "Centered on student growth, fairness, and clarity." },
//   { L: I, key: "I2", word: "Integrity", blurb: "Policies and practices that actually build trust." },
//   { L: R, key: "R", word: "Resource", blurb: "A toolkit for instructors, TAs, admins, and students." },
// ];

// // Animation variants
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 }, // ripple effect
//   },
// };

// const letterAnim = {
//   hidden: { opacity: 0, y: 30, scale: 0.9 },
//   show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
// };

// // Fish animation
// const fishAnim = {
//   hidden: { opacity: 0, x: 40, rotate: -5 },
//   show: { 
//     opacity: 1, 
//     x: 0, 
//     rotate: 0, 
//     transition: { duration: 0.8, ease: "easeOut" } 
//   },
// };

// export default function CaviairScrollReveal() {
//   return (
//     <div className="min-h-screen bg-white font-ubuntu flex flex-col justify-center items-center space-y-12">
//       {/* Ripple letters with fish at the end */}
//       <motion.div
//         className="flex space-x-6 items-end"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {STEPS.map((s) => (
//           <motion.div
//             key={s.key}
//             variants={letterAnim}
//             className="relative group flex flex-col items-center"
//           >
//             {/* Letter SVG (scaled consistently) */}
//             <img
//               src={s.L}
//               alt={s.word}
//               className="h-20 w-auto sm:h-28 md:h-32"
//             />

//             {/* Hover definition */}
//             <div className="absolute top-full mt-2 w-48 sm:w-64 bg-black text-white text-xs sm:text-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
//               <span className="font-bold">{s.word}</span>: {s.blurb}
//             </div>
//           </motion.div>
//         ))}

//         {/* Fish animation (like punctuation after R) */}
//         <motion.img
//           src={Fish}
//           alt="CAVIAIR fish"
//           variants={fishAnim}
//           className="h-20 w-auto sm:h-28 md:h-32"
//         />
//       </motion.div>
//     </div>
//   );
// }
