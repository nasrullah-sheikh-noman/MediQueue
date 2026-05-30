import axios from "axios";
import MyBookedSession from "../myBookedSession/MyBookedSession";


const MyBookedSessions = async () => {
  const res = await axios.get("http://localhost:5000/booking");
  const bookingData = res.data;
  console.log("bookingdata", bookingData);
  return (
    <div className="mt-22">
      <div>My booked sessions</div>
      <div className="my-4 container mx-auto p-4 grid grid-cols-1 gap-3 border-2">
        {
          bookingData.map((data) => <MyBookedSession key={data._id} data={data}></MyBookedSession>)
        }
      </div>
    </div>
  );
};

export default MyBookedSessions;
