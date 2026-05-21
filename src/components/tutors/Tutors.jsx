import axios from "axios";
import Tutor from "../tutor/Tutor";

const Tutors = async () => {
  const res = await axios.get("http://localhost:5000/tutors");
  const data = res.data;
  console.log("data", data);
  return (
    <div>
      <div>All Tutors</div>
      <div>
        {
          data.map((tutor, i) => <Tutor key={i} tutor={tutor}></Tutor>)
        }
      </div>
    </div>
  );
};

export default Tutors;
