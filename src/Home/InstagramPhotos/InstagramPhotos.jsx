import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InstagramPhotos.css";
import { IoLogoInstagram } from "react-icons/io";

function InstagramPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      `https://us-central1-bitacora-yogui.cloudfunctions.net/photos`
    );
    const photosToShow = response.data.data.slice(0, 6);
    setPhotos(photosToShow);

    console.log(response);
  }, []);

  return (
    <div>
      <div className="wrapperTitleAPI">
        <a
          href="https://www.instagram.com/bitacorayogui.martu/"
          target="_blank"
          className="bitacoraYoguiInstagram"
        >
          #bitacorayogui #
        </a>
        <a
          href="https://www.instagram.com/bitacorayogui.martu/"
          className="instagramLogoSectionAPI bitacoraYoguiInstagram"
        >
          <IoLogoInstagram />
        </a>
      </div>
      <div className="instagramPhotosWrapper">
        {photos.map((photo) => (
          <a className="photosOneByOne" href={photo.permalink} target="_blank">
            <img
              className="photoInstagram"
              src={photo.media_url}
              key={photo.id}
            />
          </a>
        ))}
        <hr />
        <hr />
      </div>
    </div>
  );
}

export { InstagramPhotos };
