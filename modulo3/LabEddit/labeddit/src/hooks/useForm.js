import { useState } from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeInput = (event) => {
    const {value, name} = event.target
    setForm({...FormData, [name]: value})
}
    const clear = () => {
        setForm(initialState)
    }

    return [form,onChangeInput,clear]
}