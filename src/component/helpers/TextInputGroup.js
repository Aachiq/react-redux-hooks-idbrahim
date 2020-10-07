import React from 'react';
import classnames from 'classnames';

const TextInputGroup = (props) => {
    const { name, label, type, value, onChange, error } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className={classnames('form-control', {
                    'is-invalid': error
                })}
                name={name}
                value={value}
                onChange={onChange}
            />
            <div className="invalid-feedback">{props.error}</div>
        </div>
    );
};
export default TextInputGroup;
