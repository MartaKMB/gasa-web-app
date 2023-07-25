import SingleAreaElement from "../components/PageElements/SingleAreaElement";
import pngImage from "../assets/pngImages/chest-v.png";
import { useEffect, useState } from "react";

const AllTechniquesPage = () => {
  const [gasaData, setGasaData] = useState(null);

  const getTechniquesData = () => {
    fetch("gasa-app-data/gasa-techniques.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGasaData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    getTechniquesData();
  }, []);

  const gasaAreaElementsToDisplay =
    gasaData &&
    gasaData.techniquesForGasaAreas.map((area) => (
      <SingleAreaElement area={area} key={area.id} />
    ));

  return (
    <>
      <div>WSZYSTKIE TECHNIKI</div>
      <img src={pngImage} alt="klatka piersiowa V" />
      {gasaAreaElementsToDisplay}
    </>
  );
};

export default AllTechniquesPage;
