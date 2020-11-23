import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InstagramPhotos.css";

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
      <div className="bitacoraYoguiInstagram">#bitacorayogui</div>
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
