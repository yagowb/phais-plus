
const Urgency = ({ urgency }) => {
  const urgencyColors = {
    baixa: "bg-urgencyColor-green",
    media: "bg-urgencyColor-yellow",
    urgente: "bg-urgencyColor-red",
  };

  const badgeColor = urgencyColors[urgency];

  return (
    <span className={`inline-block py-2 px-4 rounded-full font-sm uppercase text-white ${badgeColor}`}>
      {urgency}
    </span>
  );
};

export default Urgency;
