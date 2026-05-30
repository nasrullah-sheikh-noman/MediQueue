import axios from "axios";
import MyBookedSession from "../myBookedSession/MyBookedSession";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";

const MyBookedSessions = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;
  // console.log("user", user);
  // console.log(user?.email);
  // console.log("url", process.env.NEXT_PUBLIC_BETTER_AUTH_URL);
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/booking?email=${user?.email}`
  );

  const bookingData = res.data;

  return (
    <div className="mt-22 max-w-6xl mx-auto px-6 pb-12">
      <h2 className="text-2xl font-bold mb-6">
        My Booked Sessions
      </h2>

      {bookingData.length === 0 ? (
        <div className="text-center py-10 border rounded-xl">
          <h2 className="text-xl font-semibold">
            No Bookings Found
          </h2>
          <p className="text-gray-500">
            You haven't booked any session yet.
          </p>
        </div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="p-3">Tutor Name</th>
              <th className="p-3">Student Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookingData.map((data) => (
              <MyBookedSession
                key={data._id}
                data={data}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBookedSessions;