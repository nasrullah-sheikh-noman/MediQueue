import Tutors from "@/components/tutors/Tutors";
import TutorsSkeleton from "@/components/tutors/TutorsSkeleton";

export const metadata = {
  title: "Tutors | MediQueue",
  description: "MediQueue - Tutor Booking System app",
};

const TutorsPage = () => {
  return (
    <suspense fallback={<TutorsSkeleton/>}>
      <Tutors />
    </suspense>
  );
};

export default TutorsPage;
