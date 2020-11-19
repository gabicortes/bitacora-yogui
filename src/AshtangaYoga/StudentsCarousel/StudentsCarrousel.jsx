import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "./StudentsCarousel.css";
import "keen-slider/keen-slider.min.css";
import gabi from "./gabi.jpeg";
import chica2 from "./chica2.jpeg";
import nico from "./nico.jpeg";
import facu from "./facu1.jpeg";

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
        <div className="keen-slider__slide number-slide3">
          <img src={facu} />
          <span>
            La práctica de Ashtanga me ayuda a mantenerme equilibrado física y
            mentalmente. Gané mucha flexibilidad, equilibrio y mejoré los
            dolores provocados por la postura laboral.
            <br />
            También cambió la forma de interpretar lo que le hace bien a mi
            cuerpo, llevándome a una alimentación más saludable.
            <br />
            <br />
            Facu.
          </span>
        </div>
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
          <img src={chica2} />
          <span>
            El yoga para mi es más que la práctica en el mat. Si bien tiene
            varios beneficios físicos, el mundo qué hay detrás del yoga es muy
            grande.
            <br />
            Te invita a cuestionar lo que sabías, a adquirir nuevos
            conocimientos y a encontrar herramientas para el día a día.
            <br />
            <br />
            Juana.
          </span>
        </div>

        <div className="keen-slider__slide number-slide4">
          <img src={nico} />
          <span>
            Espero que estén aprendiendo tanto como yo sobre el ego, sobre la
            omnipotencia, sobre olvidarnos que lugar ocupamos en cada espacio.
            Todos estamos revalorizando nuestra existencia. <br />
            La tierra otra vez pregunta y hay que responder. <br />
            Gracias Martu por la paciencia y la garra que le pones a cada clase.
            <br />
            <br />
            Nico.
          </span>
        </div>
      </div>
    </>
  );
}

export default StudentsCarrousel;
