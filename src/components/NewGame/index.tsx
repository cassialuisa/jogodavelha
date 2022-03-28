import { FC } from "react"
import './style.css'

interface Iprops {
    onClick: () => void;
}
const NewGame: FC <Iprops>= (props) => (

    <button onClick={() => props.onClick()} className="newGame">New Game</button>
)
export default NewGame