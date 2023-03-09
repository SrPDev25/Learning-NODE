//First character must be a great letter
export function Greeting() {
  const married = false;
  const moods = {
    casado: "Casado 😍",
    soltero: "Soltero 🦾",
  };

  return <h1>{married ? moods.casado : moods.soltero}</h1>;
}

export function UserCard(props) {
  console.log(props)
  return <h1>UserCard of {props.user}</h1>;
}
