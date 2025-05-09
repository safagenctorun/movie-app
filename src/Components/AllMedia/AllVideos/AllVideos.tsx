import React, { useState, useContext } from "react";
import "./AllVideos.scss";
import { Context } from "../../../context/GlobalContext";
import OverlayVideo from "../../MovieMedia/MovieVideos/OverlayVideo/OverlayVideo";
import moment from "moment";
import { MovieVideosOutput } from "../../../Models";

interface Props {
  movieVideos: MovieVideosOutput;
}

const AllVideos = ({ movieVideos }: Props) => {
  const [selectedType, setSelectedType] = useState<string>("Trailer");
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [videoUrl, setvideoUrl] = useState<string>("");
  const { setisVideoOpen } = useContext(Context);

  const activateOverlay = (url: string) => {
    setIsOverlayOpen(true);
    setisVideoOpen(true);
    setvideoUrl(url);
  };
  const uniqueTypes = Array.from(
    new Set(movieVideos.results.map((img: any) => img.type))
  ).sort();

  return (
    <div className="videos">
      <div className="video-choices">
        {uniqueTypes.map((img: string) => (
          <p
            key={img}
            style={{
              borderBottom: selectedType === img ? "2px solid #000" : "",
            }}
            onClick={(e) => setSelectedType(e.currentTarget.innerText)}
          >
            {img}
          </p>
        ))}
      </div>

      <div className="video-images">
        {movieVideos.results.map(
          (img: any, index: number) =>
            img.type === selectedType && (
              <div className="video-image" key={img.id}>
                <img
                  onClick={(e) => activateOverlay(img.key)}
                  key={img.key}
                  className="image"
                  src={`https://i.ytimg.com/vi/${img.key}/hqdefault.jpg`}
                  alt={img.name}
                />
                <h4>{img.name}</h4>
                <div className="type-date">
                  <p className="type">{img.type}</p>
                  <p>{moment(img.published_at).format("DD MMM YYYY")}</p>
                </div>
              </div>
            )
        )}
      </div>
      {isOverlayOpen === true && (
        <OverlayVideo
          isOverlayOpen={isOverlayOpen}
          setIsOverlayOpen={setIsOverlayOpen}
          videoUrl={videoUrl}
        />
      )}
    </div>
  );
};

export default AllVideos;
