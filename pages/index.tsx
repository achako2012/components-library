import {Button} from "../stories/Button";
import classes from '../styles/app.module.scss'


const App = () => {
    return (
        <>
            <p className={classes.text}>Welcome to the app</p>
            <Button label={'sd'}/>
        </>
    )
}

export default App
