export const MedicationType = ({ type }) => {
  const medicationTypes = {
    G: ["border-medication-generic", "text-medication-generic"],
    R: ["border-medication-reference", "text-medication-reference"],
    S: ["border-medication-similar", "text-medication-similar"],
    O: ["border-medication-other", "text-medication-other"],
  };

  if (!(type in medicationTypes)) {
    type = "O";
  }

  const [borderColor, textColor] = medicationTypes[type];

  return (
    <div
      className={`w-6 aspect-square border-2 rounded flex items-center justify-center ${borderColor}`}
    >
      <p className={`font-medium ${textColor}`}>{type}</p>
    </div>
  );
};
