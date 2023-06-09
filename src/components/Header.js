export const Header = ({ heading, subHeading }) => {
  return (
    <section className="header">
      <h1 className="heading">{heading}</h1>
      <p className="subHeading">{subHeading}</p>
    </section>
  );
};
