import React, { useMemo, useState } from "react";
import { ProductData } from "../ProductList/types";
import { customRound } from "../../helpers/FilterHelper";
import Star from "../StarRating/Star";
import MyModal from "../../Modal";
import { CourseData } from "../CourseList/types";
import { StepFormOk } from "../../../../stepForms/src/App";

const Course = ({ course }: { course: CourseData }) => {
  const [openModal, setModal] = useState(false);

  console.log(openModal);
  const handleOpenModal = () => {
    setModal(!openModal);
  };

  const handleCloseModal = () => {
    setModal(!openModal);
  };

  const stars = useMemo(
    () => Array.from({ length: 5 }, (_, index) => index + 1),
    []
  );

  return (
    <div className="cursor-pointer border-t-4 border-gray-500 rounded-lg">
      {/*<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none object-contain group-hover:opacity-75 lg:h-80">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
  </div>*/}
      <h4 className="mt-4 text-md text-gray-700 font-semibold">
        {course.title}
      </h4>
      <h3 className="mt-2 text-sm text-gray-600">
        {course.modality == "Pós-Graduação"
          ? "A partir de 6 meses"
          : course.type + course.semesters
          ? " - " + course.semesters + " semestres"
          : ""}
      </h3>
      {course.modality == "Pós-Graduação" ? (
        ""
      ) : (
        <div className="mt-1 text-lg font-medium text-gray-700 bg-gray-200 rounded-sm px-2 py-3 mb-2">
          <p className="text-sm text-gray-600">a partir de</p>
          <p>
            R$ {course.price},00{" "}
            <span className="text-sm text-gray-600">por mês</span>
          </p>
        </div>
      )}
      <div className="flex gap-1 ">
        {/*stars.map((star, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              star <= customRound(course.popularity.rate)
                ? 'text-yellow-500'
                : 'text-gray-300'
            }`}
          />
          ))*/}
      </div>
      <div
        className="bg-orange-500 h-10 w-66 text-gray-100 flex flex-wrap justify-center rounded-lg align-center font-semibold"
        style={{ alignItems: "center" }}
        onClick={handleOpenModal}
      >
        Inscreva-se
      </div>
      {openModal && (
        <div
          className="w-full h-full absolute z-45 top-0 left-0 bottom-0"
          //style={{ border: "2px solid red" }}
        >
          <StepFormOk handleClose={handleCloseModal} show={openModal} />
        </div>
      )}
    </div>
  );
};

export default React.memo(Course);

{
  /*<MyModal
          isOpen={openModal}
          openModal={handleOpenModal}
          closeModal={handleCloseModal}
        >
          <div className="relative">
            <img
              src={course.image}
              alt="Loaded Image"
              className={`w-full h-full object-contain`}
            />
          </div>
      </MyModal>*/
}