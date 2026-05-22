import axios from "axios";


const TutorInfo = async({ id }) => {
  const info = await axios.get(`http://localhost:5000/tutors/${id}`)
  const data = info.data;
  // console.log("info", data);
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
};

export default TutorInfo;