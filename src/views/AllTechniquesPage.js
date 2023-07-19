import SingleAreaElement from "./SingleAreaElement";

const AllTechniquesPage = () => {
  const gasaAreas = [
    {
      id: "gasa-technique-0",
      name: "CHEST",
      techniques: ["CHEST_V", "CHEST_OPEN_BOOK", "CHEST_X"],
    },
    {
      id: "gasa-technique-1",
      name: "THORACIC_LIMB",
      techniques: [
        "THORACIC_LIMB_PAT",
        "THORACIC_LIMB_ROLLING",
        "THORACIC_LIMB_ROCKING",
        "THORACIC_LIMB_PAW_PAT",
        "THORACIC_LIMB_PAW_MASSAGE",
      ],
    },
    {
      id: "gasa-technique-2",
      name: "BELLY",
      techniques: [
        "BELLY_PAT",
        "BELLY_I_LOVE_YOU",
        "BELLY_CIRCLE",
        "BELLY_Z",
        "BELLY_PAT_WITH_FOREARM",
      ],
    },
    {
      id: "gasa-technique-3",
      name: "SIDE_OF_THE_BODY_AND_TAIL",
      techniques: [
        "SIDE_PAT",
        "SIDE_OPEN_BOOK",
        "SIDE_BETWEEN_RIBS",
        "SIDE_V",
        "TAIL_PAT",
        "TAIL_PULL",
      ],
    },
    {
      id: "gasa-technique-4",
      name: "MUZZLE",
      techniques: [
        "MUZZLE_NECK",
        "MUZZLE_ENFOLD",
        "MUZZLE_CIRCLE",
        "MUZZLE_EAR_PAT",
        "MUZZLE_EAR_CIRCLE",
        "MUZZLE_EAR_CIRCLE_ALL",
      ],
    },
    {
      id: "gasa-technique-5",
      name: "PELVIC_LIMB",
      techniques: [
        "PELVIC_LIMB_PAT",
        "PELVIC_LIMB_ROLLING",
        "PELVIC_LIMB_ROCKING",
        "PELVIC_LIMB_PAW",
      ],
    },
  ];

  const gasaAreaElementsToDisplay = gasaAreas.map((area) => (
    <SingleAreaElement area={area} key={area.id} />
  ));

  return (
    <>
      <div>WSZYSTKIE TECHNIKI</div>
      {gasaAreaElementsToDisplay}
    </>
  );
};

export default AllTechniquesPage;
