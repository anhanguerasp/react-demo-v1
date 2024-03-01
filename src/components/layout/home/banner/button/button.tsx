interface props {
  content: string;
  onClick: () => void;
}

export const BannerButton = ({ onClick, content }: props) => {
  return <div className="h-full w-full" onClick={onClick}></div>;
};
