
import cn from "classnames";
import styles from "./Raiting.module.css";
import {RaitingProps} from "./Raiting.props";
import {useEffect, useState} from "react";
import StarIcon from "./Star.svg";

export const Raiting = ({isEditable = false, raiting, setRaiting,...props}:RaitingProps):JSX.Element => {
    const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(() =>{
        constructRaiting(raiting);
    }, [raiting])

    const constructRaiting = (currentRaiting:number) => {
        const updatedArray = raitingArray.map((r:JSX.Element, i: number) =>{
            return (
                <StarIcon
                    className={cn(styles.star,{
                        [styles.fill]: i < currentRaiting
                    })}

                />
            )
        })
        setRaitingArray(updatedArray)
    }
    return(
        <div {...props}>
            {raitingArray.map((r,i) =>(<span key={i}>
                {r}
            </span>))}
        </div>
    )
}

