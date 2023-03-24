

export const CardTitlePokemon=(data)=>{
    const fontSize=data.fontSize+"px"
    return <p style={{width:"100%",marginTop:"0px",marginBottom:"0px",textAlign:"center",fontWeight:"bold",fontSize:fontSize}}>{data.title}</p>
}