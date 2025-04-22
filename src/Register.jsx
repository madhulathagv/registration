import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let errors = {};
        const trimmedData = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            password: formData.password.trim(),
            confirmPassword: formData.confirmPassword.trim(),
        };

        if (!trimmedData.firstName) errors.firstName = "First Name is required";
        if (!trimmedData.lastName) errors.lastName = "Last Name is required";
        if (!trimmedData.email.match(/^\S+@\S+\.\S+$/)) errors.email = "Invalid Email format";
        if (trimmedData.password.length < 6) errors.password = "Password must be at least 6 characters";
        if (trimmedData.password !== trimmedData.confirmPassword) errors.confirmPassword = "Passwords do not match";
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Registration Successful!");
        }
    };

    return (
        <div className="container">
            <form className="register-page" role="form" aria-labelledby="Registration form" onSubmit={handleSubmit}>
                <h2>Register</h2>

                {Object.values(errors).map((error, index) => (
                    <p key={index} className="error">{error}</p>
                ))}

                <input type="text" id="firstName" name="firstName" placeholder="First Name" aria-required="true" onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" aria-required="true" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" aria-required="true" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" aria-required="true" onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" aria-required="true" onChange={handleChange} />

                <button type="submit" aria-label="Register">Register</button>
            </form>
        </div>
    );
};

export default Register;
