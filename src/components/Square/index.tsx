import { FC } from "react";
import './style.css'

interface Iprops {
    dataCol1:string;
    dataCol2:string;
    dataCol3:string;
    onClick:(row:number,column:number)=> void;
    column:number;
}
//o dataCol foi usado para retirar a necessidade de repetir o mesmo numero da coluna 3 vezes pra cada square la no index
const Square: FC<Iprops> = (props) => (
    <div>
        <span onClick={() => props.onClick(props.column,0)} className="square" data-col={props.column} data-row="0">{props.dataCol1}</span>
        <span onClick={() => props.onClick(props.column,1)} className="square" data-col={props.column} data-row="1">{props.dataCol2}</span>
        <span onClick={() => props.onClick(props.column,2)} className="square" data-col={props.column} data-row="2">{props.dataCol3}</span>
    </div>
)

export default Square