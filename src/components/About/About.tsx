import { AboutPropTypes } from ".";

const About = ({ children, title }: AboutPropTypes) => {
  return (
    <>
      <h3>
        <b>{title}</b>
      </h3>
      {children?.split(/[\n]+/).map((itm: string, index: number) => (
        <span key={`${itm}-${index}`}>
          {itm}
          <br />
        </span>
      ))}
    </>
  );
};

export default About;
