
import useInputField from '../../hooks/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField()
    const [mail, mailOnChange] = useInputField()
    const [password, passwordOnChange] = useInputField()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', mail);
        console.log('Password:', password);

        // const x = {
        //     name: name,
        //     mail: mail,
        //     password: password
        // }

        // // Jodi already "users" thake taile setake parse korbo, na thakle empty array
        // let users = JSON.parse(localStorage.getItem("users")) || [];
        // console.log(users);

        // const existUser = users.find(user => {
        //     if(user.name === x.name && user.mail === x.mail && user.password === x.password){
        //         return user;
        //     }
        // })

        // if(!existUser) {
        //     // Notun user add korlam
        //     users.push(x);
        //     // Abr save kore dilam
        //     localStorage.setItem("users", JSON.stringify(users));
        // }




    } 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} onChange={nameOnChange} type="text" placeholder='name'/>
                <br />
                <input defaultValue={mail} onChange={mailOnChange} type="email" placeholder='email'/>
                <br />
                <input defaultValue={password} onChange={passwordOnChange}  type="password" placeholder='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;