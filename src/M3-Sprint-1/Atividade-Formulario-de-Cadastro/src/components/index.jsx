import { useState } from "react"

export function RegisterForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const submitForm = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            name: "",
            email: "",
            password: ""
        })
    }

    return(
        <>
        <form onSubmit={submitForm}>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}