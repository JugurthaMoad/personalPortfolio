const ProDeco = ({ name, ...props }) => {
  return (
    <div {...props} className="project">
      <div>{name}</div>
      <div className="pro_deco"></div>
    </div>
  );
};

export default ProDeco;
