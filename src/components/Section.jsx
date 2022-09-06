import Biblio from "./Biblio";
const Section = ({ change, choice, element }) => {
  return (
    <>
      {!change && !choice && (
        <div>
          <Biblio />
        </div>
      )}
      {choice && <div>{element.item()}</div>}
    </>
  );
};

export default Section;
