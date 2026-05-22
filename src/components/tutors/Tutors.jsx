import axios from "axios";
import Tutor from "../tutor/Tutor";

const Tutors = async () => {
  const res = await axios.get("http://localhost:5000/tutors");
  const data = res.data;
  console.log("data", data);
  return (
    <div className="max-w-7xl mx-auto p-4 m-8 gap-6 mt-17">
      <div className="text-3xl font-bold ">All Tutors</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-4 p-4">
        {
          data.map((tutor, index) => <Tutor key={index} tutor={tutor} index={index}></Tutor>)
        }
      </div>
    </div>
  );
};

export default Tutors;
