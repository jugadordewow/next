import cn from "classnames";
import styles from "./Raiting.module.css";
import {RaitingProps} from "./Raiting.props";
import {useEffect, useState, KeyboardEvent} from "react";
import StarIcon from "./Star.svg";

export const Raiting = ({isEditable = false, raiting, setRaiting,...props}:RaitingProps):JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() =>{
        constructRaiting(raiting);
    }, [raiting])

    const constructRaiting = (currentRaiting:number) => {
        const updatedArray = raitingArray.map((r:JSX.Element, i: number) =>{
            return (
                <span
                    className={cn(styles.star,{
                        [styles.filled]: i < currentRaiting,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave = {() => changeDisplay(raiting)}
                    onClick = {() => onClick(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i+1, e)}
                    />
                </span>

            )
        })
        setRaitingArray(updatedArray)
    }

    const changeDisplay = (i:number) => {
        if(!isEditable) {
            return;
        }
        constructRaiting(i);
    }

    const onClick = (i:number) => {
        if(!isEditable || !setRaiting) {
            return;
        }
        setRaiting(i);
    }

    const handleSpace = (i:number, e: KeyboardEvent<SVGElement>) => {
        if(e.code != 'Space' || !setRaiting) {
            return;
        }
        setRaiting(i);
    }

    return(
        <div {...props}>
            {raitingArray.map((r,i) =>(<span key={i}>
                {r}
            </span>))}
        </div>
    )
}



