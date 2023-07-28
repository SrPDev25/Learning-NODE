import React, { ReactElement, ReactNode } from 'react'

type AccordionProps={
  title:string,
  children:ReactNode
}

export const Accordion: (props:AccordionProps)=>ReactElement = ({
  title,
  children
}) => {
  return (
    <>
      <h1>{title}</h1>
      <>{children}</>
    </>
  )
}

export default Accordion