import PropTypes from 'prop-types'
import { VscBug } from 'react-icons/vsc'

export function Button({text,name}){
    return <button onClick={()=>{
        console.log("Hola")
    }}>
        <VscBug/>
        {text}  {name} 
    </button>
}

//plugin for control the objects
Button.propTypes={
    text:PropTypes.string.isRequired
}

//Default value from prop plugin
Button.defaultProps={
    name:'User'
}