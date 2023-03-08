//First character must be a great letter
function Greeting() {
    const married = true;
    const moods={
      casado:'Casado 😍',
      soltero:'Soltero 🦾'
    }
  
    return (
      <div>
        <h1>{married ?  moods.casado: moods.soltero}</h1>
      </div>
    );
  }