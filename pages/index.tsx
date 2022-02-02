import {FileInput} from "../stories/inputs/file-input/FileInput";
import {useState} from "react";
import {TextInput} from "../stories/inputs/text-input/TextInput";
import {PasswordInput} from "../stories/inputs/password-input/PasswordInput";
import {Button} from "../stories/buttons/button/Button";


const App = () => {

    const [textInput, setTextInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [fileInput, setFileInput] = useState('')


    return (
        <>
            <div className="m-10">
                <FileInput label={ 'Upload photo' } onChange={ (event) => setFileInput(event.target.value) }/>
            </div>

            <div className="m-10">
                <TextInput placeholderText={ 'type some text' } legend={ 'Input' } id={ 'input' } state={ textInput }
                           setState={ (event) => setTextInput(event.target.value) }/>
            </div>

            <div className="m-10">
                <PasswordInput placeholderText={ 'type your password' } legend={ 'Password' } id={ 'password' }
                               state={ passwordInput } setState={ (event) => setPasswordInput(event.target.value) }/>
            </div>

            <div className="m-10">
                <Button label={'Foo button'}/>
            </div>
        </>
    )
}

export default App
