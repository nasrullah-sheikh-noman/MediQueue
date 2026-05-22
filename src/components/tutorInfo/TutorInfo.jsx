"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import TutorInfoSkeleton from "./TutorInfoSkeleton";

const TutorInfo = ({ id }) => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:5000/tutors/${id}`);
      setData(res.data);
    };
    fetchData();
  }, [id]);
  if(!data) return <TutorInfoSkeleton/>
  
  const capitalizedFirst = (text) => {
    return text?.charAt(0).toUpperCase() + text?.slice(1);
  }
  const capitalized = (text) => {
    return  text?.toUpperCase();
  }
  return (
    <div className="container mx-auto pt-7 p-24 flex flex-col space-y-9">
      <div className="text-2xl font-bold">
        Tutor Information
      </div>
      <motion.div
      initial={{
        opacity: 0,
        x: Number(id?.slice(-1)) % 2 === 0 ? -120 : 120,
        rotate: Number(id?.slice(-1)) % 2 === 0 ? -3 : 3,
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
      <div className="relative h-[450px] w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full transition-transform duration-300 group-hover:scale-110"
        >
          <Image
            src={data?.photo}
            alt={data?.name}
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white shadow-lg"
        >
          {
            data?.subject === "ict" 
            ? capitalized(data?.subject)
            : capitalizedFirst(data?.subject)
          }
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute right-4 top-4 rounded-full bg-blue-500/80 px-4 py-1 text-sm font-medium text-white backdrop-blur-md"
        >
          {capitalizedFirst(data?.mode)}
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-5 left-5"
        >
          <h2 className="text-3xl font-bold text-white">
            {data?.name}
          </h2>

          <p className="mt-1 text-sm text-gray-200">
            {data?.institution}
          </p>
        </motion.div>
      </div>

      <div className="space-y-5 p-6">
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Schedule",
              value: data?.schedule,
            },
            {
              title: "Location",
              value: data?.location,
            },
            {
              title: "Slots",
              value: `${data?.slot} Seats`,
            },
            {
              title: "Start Date",
              value: data?.date,
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
                {item?.title}
              </p>

              <h3 className="mt-1 font-semibold text-gray-900">
                {item?.value}
              </h3>
            </motion.div>
          ))}
        </div>

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
              ৳{data?.fee}
            </h2>
          </div>

          <div>
            <Modal
              tutor={data}
              open={open}
              setOpen={setOpen}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default TutorInfo;