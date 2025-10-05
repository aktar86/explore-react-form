import { useState } from "react"

const useInputField = (defauldValue) => {
    const [fieldValue, setFieldValue] = useState(defauldValue)

    const handleFieldOnChange = e => {
        setFieldValue(e.target.value)
    }

    return [fieldValue, handleFieldOnChange]
}

export default useInputField;
