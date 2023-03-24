

export const Logo = (props) => {
  const size = props.width + "px";
  
  return (
    <>
    <img
      alt="logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"
      width={size}
      onClick={props.action}
    />
    </>
  );
};
