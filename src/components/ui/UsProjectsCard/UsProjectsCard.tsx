import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
export default function UsProjectsCard({
  index,
  image,
  title,
  smallDescription,
  expandingIndex,
  handleCardClick,
  cardVariants,
}: {
  index: number;
  image: string;
  title: string;
  smallDescription: string;
  expandingIndex: number;
  handleCardClick: (index: number) => void;
  cardVariants: { expanded: { width: string }; collapsed: { width: string } };
}) {
  return (
    <motion.div
      className={`cursor-pointer h-full bg-cover bg-center hover:scale-x-[1.01] hover:scale-y-[1.01] ${
        index === expandingIndex ? "expanded" : ""
      } ${index === expandingIndex ? "shadow-[0px_0px_35px_0px_#1a202c]" : ""}`}
      variants={cardVariants}
      initial="collapsed"
      animate={index === expandingIndex ? "expanded" : "collapsed"}
      transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
      onClick={() => handleCardClick(index)}
      style={{ backgroundImage: `${image}` }}
    >
      <div className="card-content h-full flex flex-col justify-end">
        {index === expandingIndex && (
          <motion.div
            className="w-full h-full bg-gradient-to-t from-[#2F2E33] flex flex-col items-center justify-end "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.7, delay: 0.1 }}
          >
            <Typography className="font-regular text-center text-5xl text-[#D5D6D2]">
              {title}
            </Typography>
            <Typography
              as="p"
              variant="paragraph"
              className="font-light my-5 mx-12 text-center text-[18px] text-[#D5D6D2]"
            >
              {smallDescription}
            </Typography>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
