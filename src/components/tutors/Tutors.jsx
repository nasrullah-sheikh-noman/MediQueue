"use client";

import axios from "axios";
import Tutor from "../tutor/Tutor";
import { useEffect, useState } from "react";
import TutorsSkeleton from "./TutorsSkeleton";

const Tutors = () => {
  const [data, setData] = useState([]);
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutors = async() => {
      try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/tutors`);
        setData(res.data);
      } catch(error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTutors();
  }, []);


  
  // console.log("data", data);
  return (
    <div className="container mx-auto p-4 m-8 gap-6 mt-17">
      <div className="text-3xl font-bold ">All Tutors</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-4 py-4 sm:px-13 md:px-14 lg:px-23 xl:px-24">
        {
          loading 
          ? <TutorsSkeleton/>
          : data.map((tutor, index) => <Tutor key={index} tutor={tutor} index={index}></Tutor>)
        }
      </div>
    </div>
  );
};

export default Tutors;
