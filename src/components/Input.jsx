import React  from 'react'
const Input = ({name, value, label, onChange}) =>{
    return(
 
<div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input 
               
                value = {value}
                onChange={onChange}              
                //ref={this.username}
                type="text" 
                id={name}
                name={name} 
                className="form-control" />

            </div>
 
);
};

export default Input;
