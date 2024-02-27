interface props {
  img: string;
}

export const NewCarrouselContauiner = ({ img }: props) => {
  return <img src={img} alt="image 2" className="h-full w-full object-cover" />;
};

/*<div className="duration-700 ease-in-out" data-carousel-item>
      <img
        src={img}
        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
  </div>*/
