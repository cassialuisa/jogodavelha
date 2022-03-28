import { FC} from "react"
import './style.css'
const TicTacToe:FC<{children:any}> = (props) => (
    <div className="ticTacToe">{props.children}</div>
)
export default TicTacToe