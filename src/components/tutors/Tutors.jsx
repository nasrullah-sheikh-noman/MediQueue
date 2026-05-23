
import Tutor from "../tutor/Tutor";

const Tutors = async () => {
  const res = await fetch("http://localhost:5000/tutors", {
    cache: "no-store",
  });
  const data = await res.json();
  // console.log("data", data);
  return (
    <div className="container mx-auto p-4 m-8 gap-6 mt-17">
      <div className="text-3xl font-bold ">All Tutors</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-4 py-4 sm:px-13 md:px-14 lg:px-23 xl:px-24">
        {
          data.map((tutor, index) => <Tutor key={index} tutor={tutor} index={index}></Tutor>)
        }
      </div>
    </div>
  );
};

export default Tutors;
