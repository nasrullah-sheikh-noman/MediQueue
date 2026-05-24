import Tutors from "@/components/tutors/Tutors";
import TutorsSkeleton from "@/components/tutors/TutorsSkeleton";

export const metadata = {
  title: "Tutors | MediQueue",
  description: "MediQueue - Tutor Booking System app",
};

const TutorsPage = () => {
  return (
    <div>
      <Tutors />
    </div>
  );
};

export default TutorsPage;
