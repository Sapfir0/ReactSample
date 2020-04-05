import React from "react";

import "./style.css"
// именование по бэм, подразумевется, что есть блок с классом form

export default function InputField({label, type, value, onChange}) {
    return (<label className="form__label">
            {label}
            <input className="form__field" placeholder={label} type={type} value={value} onChange={onChange}/>
        </label>
    );
}

