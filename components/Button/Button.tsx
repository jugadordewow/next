import styles from './Button.module.css';
import {ButtonProps} from "./Button.props";
import cn from 'classnames'
import ArrowIcon from './arrow.svg'

export const Button = ({apperance, arrow = 'none', children, className, ...props}:ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, {
                [styles.primary]: apperance === 'primary',
                [styles.ghost]: apperance === 'ghost'
            })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(styles.arrow,{
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    )
}