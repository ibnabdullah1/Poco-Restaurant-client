import "./SectionTitle.css";

const SectionTitle = ({ heading, subHeading, color }) => {
  return (
    <div className="mx-auto text-center  my-8">
      <p className="Norican text-2xl text-[#ffcc00] mb-2">{subHeading}</p>
      <h3 className={`text-3xl font-semibold uppercase text-${color}`}>
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
