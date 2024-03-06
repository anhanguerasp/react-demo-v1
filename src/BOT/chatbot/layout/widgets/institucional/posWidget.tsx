import { Link } from "react-router-dom";

export const PosWidget = () => {
  return (
    <div>
      {/*<iframe
        src="https://drive.google.com/file/d/1U7ldMWffZDWO8ObObQNzhkGG5eOHVL99/preview"
        width="100%"
        height="300px"
        allow="autoplay"
  ></iframe>*/}
      <div className="flex justify-center">
        <Link to={"../cursos"}>
          <p className="text-md text-gray-200 bg-orange-500 py-2 px-2 rounded-lg">
            Clique aqui e confira
          </p>
        </Link>
      </div>
    </div>
  );
};
