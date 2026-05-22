import TutorInfo from "@/components/tutorInfo/TutorInfo";


const TutorInfoPage = async({ params }) => {
  const {id} = await params;
  return (
    <div className='mt-22'>
      <TutorInfo id={id}/>
    </div>
  );
};

export default TutorInfoPage;