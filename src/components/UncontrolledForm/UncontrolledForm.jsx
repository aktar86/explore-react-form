import React, { useRef, useState } from 'react';

const UncontrolledForm = () => {

    const emailRef = useRef()
    const passRef = useRef()
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        const passLength = passRef.current.value;
        if(passLength.length < 10) {
            setError('your pass is smaller')
        }
        else{
            setError('')
        }

        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }
    return (
        <div>
            <h3>Uncontrolled Form</h3>
            <form onSubmit={handleSubmit}>
    
                <input ref={emailRef} type="mail" name="" />
                <br />

                <input ref={passRef} type="password" name="" />
                <br />

                <input type="submit" value="submit" />
            </form>

            {/* show alert */}
            <p>
                <small> {error} </small>
            </p>
        </div>
    );
};

export default UncontrolledForm;