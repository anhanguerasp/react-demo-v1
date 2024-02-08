import { useEffect, useState } from "react";

const DogPicture = (props: any) => {
  const [imageUrl, setImageUrl] = useState("");

  const options = [
    {
      name: "Got It!",
      handler: props.actionProvider.handleGotIt,
      id: 1,
    },
  ];

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <button></button>
    </div>
  );
};

export default DogPicture;
