// import React from "react";
// import PropTypes from "prop-types";

// class RegisterInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       confirmPassword: "", // Tambahkan state untuk confirmPassword
//     };

//     this.onNameChange = this.onNameChange.bind(this);
//     this.onEmailChange = this.onEmailChange.bind(this);
//     this.onPasswordChange = this.onPasswordChange.bind(this);
//     this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this); // Tambahkan metode untuk konfirmasi password
//     this.onSubmitHandler = this.onSubmitHandler.bind(this);
//   }

//   onNameChange(event) {
//     this.setState(() => {
//       return {
//         name: event.target.value,
//       };
//     });
//   }

//   onEmailChange(event) {
//     this.setState(() => {
//       return {
//         email: event.target.value,
//       };
//     });
//   }

//   onPasswordChange(event) {
//     this.setState(() => {
//       return {
//         password: event.target.value,
//       };
//     });
//   }

//   onConfirmPasswordChange(event) {
//     this.setState(() => {
//       return {
//         confirmPassword: event.target.value,
//       };
//     });
//   }

//   onSubmitHandler(event) {
//     event.preventDefault();

//     // Periksa apakah password dan konfirmasi password cocok
//     if (this.state.password !== this.state.confirmPassword) {
//       alert("Password dan konfirmasi password tidak cocok");
//       return;
//     }

//     this.props.register({
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmitHandler} className="input-register">
//         <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChange} />
//         <input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
//         <input type="password" placeholder="Password" autoComplete="current-password" value={this.state.password} onChange={this.onPasswordChange} />
//         <input type="password" placeholder="Konfirmasi Password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
//         <button>Register</button>
//       </form>
//     );
//   }
// }

// RegisterInput.propTypes = {
//   register: PropTypes.func.isRequired,
// };

// export default RegisterInput;

import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirmPassword do not match");
      return;
    }

    register({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <input type="text" placeholder="Name" value={name} onChange={onNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={onConfirmPasswordChange} />
      <button>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
