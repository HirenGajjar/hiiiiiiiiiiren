import ParallaxImage from "../ParallaxImage/ParallaxImage";

const imageData = [
  {
    src: "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg",
    alt: "A space launch",
    start: -200,
    end: 200,
    className: "w-1/3",
  },
  {
    src: "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3",
    alt: "Space launch",
    start: 200,
    end: -250,
    className: "mx-auto w-2/3",
  },
  {
    src: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2",
    alt: "Orbiting satellite",
    start: -200,
    end: 200,
    className: "ml-auto w-1/3",
  },
  {
    src: "https://wallpapercave.com/wp/wp4989672.jpg",
    alt: "Cybertruck design",
    start: 0,
    end: -500,
    className: "ml-24 w-5/12",
  },
];

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {imageData.map((image, index) => (
        <ParallaxImage
          key={index}
          src={image.src}
          alt={image.alt}
          start={image.start}
          end={image.end}
          className={image.className}
        />
      ))}
    </div>
  );
};

export default ParallaxImages;
