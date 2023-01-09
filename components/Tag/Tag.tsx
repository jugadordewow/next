
import cn from "classnames";
import styles from "../Tag/Tag.module.css";
import {ITag} from "./Tag.props";

export const Tag = ({children, size = 'small', color = 'ghost', href, ...props}:ITag):JSX.Element => {
    return(
        <div className={cn(styles.tag,{
            [styles.small] :size === 'small',
            [styles.large] :size === 'large',
            [styles.ghost]:color === 'ghost',
            [styles.gray]:color === 'gray',
            [styles.green]:color === 'green',
            [styles.red]:color === 'red',
            [styles.primary]:color === 'primary'
        })}
             {...props}
        >
            { href? <a href={href}>{children}</a>:<>{children}</> }
        </div>
    )
}

