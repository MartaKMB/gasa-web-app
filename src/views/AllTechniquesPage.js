import { useEffect, useState } from "react";

import SingleAreaElement from "../components/PageElements/SingleAreaElement";

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
    <section className="all-techniques-container">
      <header className="all-techniques-title">WSZYSTKIE TECHNIKI</header>
      {gasaAreaElementsToDisplay}
    </section>
  );
};

export default AllTechniquesPage;
