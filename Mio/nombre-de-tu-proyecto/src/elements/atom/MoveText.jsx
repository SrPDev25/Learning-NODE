

export const PokemonContentText=(prop)=>{
    console.log(prop)
    return <div
                style={{
                  background: prop.color,
                  border: "1px solid black",
                  borderRadius: "50px",
                  height: "15px",
                  width: "auto",
                  overflow: "hidden",
                  padding: "5px",
                }}
              >
                <p style={{ margin: "0px" }}>{prop.text}</p>
              </div>
}