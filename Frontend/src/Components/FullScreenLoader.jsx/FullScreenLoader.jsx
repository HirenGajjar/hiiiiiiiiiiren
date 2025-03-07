import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
/*
The following variables is generated by ChatGPT
*/
const languages = [
  "स्वागत है", // Hindi
  "स्वागतम्", // Sanskrit
  "Welcome", // English
  "સ્વાગત છે", // Gujarati
  "Bienvenido", // Spanish
  "Bienvenue", // French
  "欢迎", // Chinese
  "ようこそ", // Japanese
];
function FullScreenLoader() {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const intervalRef = useRef(null);

  useEffect(() => {
    const updateLanguage = () => {
      setCurrentLanguage((prev) => {
        const currentIndex = languages.indexOf(prev);
        return languages[(currentIndex + 1) % languages.length];
      });
    };

    intervalRef.current = setInterval(updateLanguage, 330);

    const timer = setTimeout(() => {
      clearInterval(intervalRef.current);
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl"
      >
        {currentLanguage}
      </motion.div>
    </div>
  );
}
export default FullScreenLoader;
