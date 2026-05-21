import axios from "axios";

const Tutors = async () => {
  const res = await axios.get("http://localhost:5000/tutors");
  console.log("data", res.data);
  return (
    <>
      <div>Tutors page</div>
    </>
  );
};

export default Tutors;
