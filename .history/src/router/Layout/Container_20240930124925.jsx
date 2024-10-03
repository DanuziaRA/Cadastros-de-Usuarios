import styles from './Container.modules.css'

function Container(props){
    return(
        <div>
            {props.child}
        </div>
    )
    
}
export default Container;