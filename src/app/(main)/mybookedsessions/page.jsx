import MyBookedSessions from "@/components/myBookedSessions/MyBookedSessions";

export const metadata = {
  title: "My Booked Sessions | MediQueue",
  description: "MediQueue - Tutor Booking System app",
};

const MyBookedSessionsPage = () => {
  return (
    <>
      <div>
        <MyBookedSessions />
      </div>
    </>
  );
};

export default MyBookedSessionsPage;
