import { motion } from "framer-motion";

export const TabButton = ({ active, selecTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#adb7be]";

  return (
    <button onClick={selecTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" },
};
