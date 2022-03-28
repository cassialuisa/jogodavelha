
import {FC} from "react"
import './style.css'

const Column:FC<{children:any}> = (props) => (
    <div className="column">
       {props.children}
    </div>
)
export default Column