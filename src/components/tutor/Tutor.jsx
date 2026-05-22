"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Tutor = ({ tutor, index }) => {
  const capitalizedFirst = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -120 : 120,
        rotate: index % 2 === 0 ? -3 : 3,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        rotate: 0,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <Image
            src={tutor.photo}
            alt={tutor.name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Subject Badge */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white shadow-lg"
        >
          {capitalizedFirst(tutor.subject)}
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute right-4 top-4 rounded-full bg-blue-500/80 px-4 py-1 text-sm font-medium text-white backdrop-blur-md"
        >
          {capitalizedFirst(tutor.mode)}
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-5 left-5"
        >
          <h2 className="text-3xl font-bold text-white">
            {tutor.name}
          </h2>

          <p className="mt-1 text-sm text-gray-200">
            {tutor.institution}
          </p>
        </motion.div>
      </div>

      <div className="space-y-5 p-6">
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Schedule",
              value: tutor.schedule,
            },
            {
              title: "Location",
              value: tutor.location,
            },
            {
              title: "Slots",
              value: `${tutor.slot} Seats`,
            },
            {
              title: "Start Date",
              value: tutor.date,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="rounded-2xl border bg-muted/40 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-primary/5"
            >
              <p className="text-sm text-muted-foreground">
                {item.title}
              </p>

              <h3 className="mt-1 font-semibold text-gray-900">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 p-5"
        >
          <div>
            <p className="text-sm text-muted-foreground">
              Hourly Fee
            </p>

            <h2 className="text-4xl font-extrabold text-primary">
              ৳{tutor.fee}
            </h2>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
            className="rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all cursor-pointer"
          >
            Book Session
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tutor;