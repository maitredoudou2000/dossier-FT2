import * as React from "react";
import "./Deuxièmepage.css";
import line5 from "./assets/line5.svg";
import halfFullSlider from "./assets/halfFullSlider.svg";
import vector19 from "./assets/vector19.svg";
import vector12 from "./assets/vector12.svg";
import vector15 from "./assets/vector15.svg";
import car47419903945475 from "./assets/car47419903945475.png";
import ellipse87 from "./assets/ellipse87.svg";
import group69 from "./assets/group69.svg";
import vector10 from "./assets/vector10.svg";
import main1 from "./assets/main1.svg";
import rectangle73 from "./assets/rectangle73.png";
import vector11 from "./assets/vector11.svg";
import vector2 from "./assets/vector2.svg";
import main from "./assets/main.svg";
import rectangle74 from "./assets/rectangle74.svg";
import vector9 from "./assets/vector9.svg";
import ellipse49 from "./assets/ellipse49.svg";
import group103 from "./assets/group103.svg";
import vector14 from "./assets/vector14.svg";
import vector from "./assets/vector.svg";
import vector1 from "./assets/vector1.svg";
import vector3 from "./assets/vector3.svg";
import Group91 from "./components/Group91";
import FirstButton from "./components/FirstButton";
const App = () => {
  const propsData = {
    firstButton: {
      vector14: vector14,
      marqueModleCatgori: "Marque, mod\xe8le, cat\xe9gorie...",
    },
    group100: {
      currentStepPaidT: "Current step : Paid to suppliers ",
      renaultClio: "Renault Clio ",
      num986689: "986689",
      line5: line5,
      vector15: vector15,
      voirLeVhicule: "VOIR LE V\xe9hicule",
    },
    group103: {
      voirLeVhicule: "VOIR LE V\xe9hicule",
      line5: line5,
      currentStepPaidT: "Current step : Paid to suppliers ",
      renaultClio: "Renault Clio ",
      num986689: "986689",
      vector15: vector15,
    },
    group101: {
      renaultClio: "Renault Clio ",
      voirLeVhicule: "VOIR LE V\xe9hicule",
      currentStepPaidT: "Current step : Paid to suppliers ",
      num986689: "986689",
      line5: line5,
      vector15: vector15,
    },
    group104: {
      vector15: vector19,
      line5: line5,
      voirLeVhicule: "VOIR LE V\xe9hicule",
      renaultClio: "Renault Clio ",
      currentStepPaidT: "Current step : Paid to suppliers ",
      num986689: "986689",
    },
    group102: {
      num986689: "986689",
      renaultClio: "Renault Clio ",
      voirLeVhicule: "VOIR LE V\xe9hicule",
      vector15: vector15,
      line5: line5,
      currentStepPaidT: "Current step : Paid to suppliers ",
    },
    group105: {
      line5: line5,
      renaultClio: "Renault Clio ",
      voirLeVhicule: "VOIR LE V\xe9hicule",
      currentStepPaidT: "Current step : Paid to suppliers ",
      vector15: vector19,
      num986689: "986689",
    },
  };
  return (
    <div className="mes-vhicules">
      <div className="rectangle-71">
        <img className="vector-1" src={vector1} />
        <div className="flex-container">
          <img className="vector-2" src={vector2} />
          <img className="ellipse-49" src={ellipse49} />
        </div>
        <div className="flex-container-1">
          <img className="vector-8" src={group103} />
          <div className="cat-absolute-container">+</div>
        </div>
        <div className="flex-container-2">
          <img className="group-103" src={group103} />
          <div className="cat-absolute-container-1">
            <div className="cat-absolute-container-2">€</div>
            <img className="ellipse-87" src={ellipse87} />
          </div>
        </div>
        <img className="vector-9" src={vector9} />
        <img className="vector-10" src={vector10} />
        <img className="vector-11" src={vector11} />
      </div>
      <div className="rectangle-70">
        <div className="flex-container-3">
          <div className="flex-container-4">
            <span className="mes-vhicules-1"> Mes véhicules</span>
            <span className="num-9-janvier-2023">9 Janvier 2023</span>
          </div>
          <div className="rectangle-78">
            <FirstButton
              className="first-button-instance-1"
              {...propsData.firstButton}
            />
            <div className="flex-container-5">
              <div className="flex-container-6">
                <button className="cat-absolute-container-3">
                  <span>Filtrer</span>
                  <img className="vector-13" src={vector12} />
                </button>
                <img className="main-1" src={main1} />
              </div>
              <div className="flex-container-7">
                <div className="cat-absolute-container-4">
                  <span className="trier-par">Trier par</span>
                  <img className="vector-12" src={vector12} />
                </div>
                <img className="main" src={main} />
              </div>
            </div>
            <div className="flex-container-8">
              <div className="flex-container-9">
                <Group91
                  className="group-100-instance-1"
                  {...propsData.group100}
                />
                <Group91
                  className="group-103-instance"
                  {...propsData.group103}
                />
              </div>
              <div className="flex-container-10">
                <Group91
                  className="group-101-instance"
                  {...propsData.group101}
                />
                <Group91
                  className="group-104-instance"
                  {...propsData.group104}
                />
              </div>
              <div className="flex-container-11">
                <Group91
                  className="group-102-instance"
                  {...propsData.group102}
                />
                <Group91
                  className="group-105-instance"
                  {...propsData.group105}
                />
              </div>
              <img className="half-full-slider" src={halfFullSlider} />
            </div>
          </div>
        </div>
        <div className="rectangle-72">
          <div className="flex-container-12">
            <img className="vector" src={vector} />
            <img className="group-69" src={group69} />
          </div>
          <img className="rectangle-73" src={rectangle73} />
          <span className="la-delagrange">Léa Delagrange</span>
          <span className="mes-voitures-priorit">
            Mes voitures prioritaires
          </span>
          <div className="flex-container-13">
            <img className="vector-3" src={vector3} />
            <span>Dacia Sandero - 930564 </span>
            <span className="step-47">STEP 4&#x2F;7</span>
          </div>
          <img className="rectangle-74" src={rectangle74} />
          <span className="current-step-trc">Current step : TRC</span>
          <div className="flex-container-14">
            <img className="vector-4" src={vector3} />
            <span className="toyota-yaris-67846">Toyota Yaris - 678465</span>
            <span className="step-67">STEP 6&#x2F;7</span>
          </div>
          <img className="rectangle-74-1" src={rectangle74} />
          <span className="current-step-shippi">
            Current step : Shipping to customer
          </span>
          <div className="flex-container-15">
            <img className="vector-5" src={vector3} />
            <span className="renault-clio-2-432">Renault Clio 2 - 432456</span>
            <span className="step-27">STEP 2&#x2F;7</span>
          </div>
          <img className="rectangle-74-2" src={rectangle74} />
          <span className="current-step-reserv">Current step : Reserved</span>
          <div className="flex-container-16">
            <img className="vector-6" src={vector3} />
            <div className="flex-container-17">
              <div className="cat-absolute-container-5">Audi A1 - 674578</div>
              <span>Audi A1 - 674578</span>
            </div>
            <div className="flex-container-18">
              <div className="cat-absolute-container-6">STEP 5&#x2F;7</div>
              <span>STEP 5&#x2F;7</span>
            </div>
          </div>
          <img className="rectangle-74-3" src={rectangle74} />
          <div className="flex-container-19">
            <span className="current-step-trc-1">Current step : TRC</span>
            <div className="cat-absolute-container-7">Current step : TRC</div>
          </div>
          <div className="flex-container-20">
            <img className="vector-7" src={vector3} />
            <span>Dacia Sandero - 678575</span>
            <span className="step-57">STEP 5&#x2F;7</span>
          </div>
          <img className="rectangle-74-4" src={rectangle74} />
          <span className="current-step-trc-2">Current step : TRC</span>
        </div>
      </div>
      <img className="car-4741990-3945475" src={car47419903945475} />
    </div>
  );
};
export default App;