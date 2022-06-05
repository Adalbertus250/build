import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

// @ts-ignore
const Portal = ({ children }) => {

    return createPortal(children, document.querySelector("#mw_portal") as Element);
}

export default Portal