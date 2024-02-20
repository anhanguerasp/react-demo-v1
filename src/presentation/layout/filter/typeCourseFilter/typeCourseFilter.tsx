import "./styles.scss";

export const TypeCourseFilter = () => {
  return (
    <div className="type-course-filter-container flex md:flexr">
      <p>
        Está em dúvida? Combine as opções e descubra o curso ideal para você.
      </p>
      <div className="type-course-filter rounded-full bg-gray-400 flex mt-5">
        <div className="course-filter px-5 py-2">Graduação</div>
        <div className="course-filter px-5 py-2">Pós-graduação</div>
        <div className="course-filter px-5 py-2">Cursos Técnicos</div>
      </div>
    </div>
  );
};
