import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "./StudentsCarousel.css";
import "keen-slider/keen-slider.min.css";
import gabi from "./gabi.jpeg";

function StudentsCarrousel() {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img src={gabi} alt="fotoDeGabi" />
          <span>
            Llegué a Martina por consejo de una amiga en común. Arrastraba
            dolores recurrentes en la zona lumbar de años causados en su mayoría
            por malos hábitos en entrenamiento de musculación. <br />
            Me encontré con un ambiente muy cálido en lo personal, y con una
            profesora muy comprometida con sus alumnos, desde el día uno estuvo
            muy cerca enseñando y transmitiéndome una practicá totalmente ajena
            a mi. Logré mejorar mucho mi elongacion en general, pero lo mejor
            fue que los dolores desaparecieron casi totalmente... <br />
            Le debo un gracias eterno.
            <br />
            <br />
            Gaby.
          </span>
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-giraffe-spots-nationalgeographic_2424106.jpg?w=1600&h=900" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque
            tortor, imperdiet id ligula sit amet, elementum consequat neque.
            Quisque pretium erat nulla, ac convallis mauris finibus sed. Proin
            vehicula, felis sed sollicitudin sagittis, diam velit mattis ante,
            ut tempus dolor massa id lectus. Sed faucibus, justo nec lobortis
            faucibus, turpis nisi molestie mauris, eu porttitor ligula ante eget
            orci. Sed convallis non dui sed dictum. Duis sit amet aliquet lacus,
            a finibus nisi. Mauris in condimentum dolor. Aenean scelerisque
            libero at nisi cursus dignissim.
          </span>
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="https://i.pinimg.com/originals/80/04/12/800412661240d62b8677aae31ee418ab.jpg" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque
            tortor, imperdiet id ligula sit amet, elementum consequat neque.
            Quisque pretium erat nulla, ac convallis mauris finibus sed. Proin
            vehicula, felis sed sollicitudin sagittis, diam velit mattis ante,
            ut tempus dolor massa id lectus. Sed faucibus, justo nec lobortis
            faucibus, turpis nisi molestie mauris, eu porttitor ligula ante eget
            orci. Sed convallis non dui sed dictum. Duis sit amet aliquet lacus,
            a finibus nisi. Mauris in condimentum dolor. Aenean scelerisque
            libero at nisi cursus dignissim.
          </span>
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="https://cdni.rt.com/actualidad/public_images/b38/b38e0f8efc90cabf68f570e42cffd8f4_article.jpg" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque
            tortor, imperdiet id ligula sit amet, elementum consequat neque.
            Quisque pretium erat nulla, ac convallis mauris finibus sed. Proin
            vehicula, felis sed sollicitudin sagittis, diam velit mattis ante,
            ut tempus dolor massa id lectus. Sed faucibus, justo nec lobortis
            faucibus, turpis nisi molestie mauris, eu porttitor ligula ante eget
            orci. Sed convallis non dui sed dictum. Duis sit amet aliquet lacus,
            a finibus nisi. Mauris in condimentum dolor. Aenean scelerisque
            libero at nisi cursus dignissim.
          </span>
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src="https://cdni.rt.com/actualidad/public_images/b38/b38e0f8efc90cabf68f570e42cffd8f4_article.jpg" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque
            tortor, imperdiet id ligula sit amet, elementum consequat neque.
            Quisque pretium erat nulla, ac convallis mauris finibus sed. Proin
            vehicula, felis sed sollicitudin sagittis, diam velit mattis ante,
            ut tempus dolor massa id lectus. Sed faucibus, justo nec lobortis
            faucibus, turpis nisi molestie mauris, eu porttitor ligula ante eget
            orci. Sed convallis non dui sed dictum. Duis sit amet aliquet lacus,
            a finibus nisi. Mauris in condimentum dolor. Aenean scelerisque
            libero at nisi cursus dignissim.
          </span>
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src="https://cdni.rt.com/actualidad/public_images/b38/b38e0f8efc90cabf68f570e42cffd8f4_article.jpg" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque
            tortor, imperdiet id ligula sit amet, elementum consequat neque.
            Quisque pretium erat nulla, ac convallis mauris finibus sed. Proin
            vehicula, felis sed sollicitudin sagittis, diam velit mattis ante,
            ut tempus dolor massa id lectus. Sed faucibus, justo nec lobortis
            faucibus, turpis nisi molestie mauris, eu porttitor ligula ante eget
            orci. Sed convallis non dui sed dictum. Duis sit amet aliquet lacus,
            a finibus nisi. Mauris in condimentum dolor. Aenean scelerisque
            libero at nisi cursus dignissim.
          </span>
        </div>
      </div>
    </>
  );
}

export default StudentsCarrousel;
