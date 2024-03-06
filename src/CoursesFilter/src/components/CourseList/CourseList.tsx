import Course from "../Course";
import { CourseData } from "./types";

function CourseList(props: { courses: CourseData[] }) {
  const { courses } = props;
  return (
    <div className="bg-white">
      <div className=" px-2 py-16 sm:px-6 sm:py-12 lg:px-8 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseList;
