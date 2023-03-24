export const Line = (prop) => {
  switch (prop.type) {
    case "long":
      return (
        <hr
          style={{
            marginRight: "5px",
            marginLeft: "5px",
            border: "1px solid",
          }}
        />
      );
    case "short":
      return <hr style={{ width: "40%", border: "0.5px black solid" }} />;
    default:
      return <hr />;
  }
};
