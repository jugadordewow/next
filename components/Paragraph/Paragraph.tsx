import {ParagraphProps} from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({children, size = 'medium'}:ParagraphProps):JSX.Element => {
   return(
       <p className={cn(styles.paragraph,{
           [styles.small] :size === 'small',
           [styles.medium] :size === 'medium',
           [styles.large] :size === 'large'
       })}>
           {children}
       </p>
   )
}