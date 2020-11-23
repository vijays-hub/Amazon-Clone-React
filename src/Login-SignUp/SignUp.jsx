// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../Login-SignUp/SignUp.css";
// import { db, auth } from "../firebase/index";
// import { useHistory } from "react-router-dom";

// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const history = useHistory();

//   let nameIsInvalid = false;
//   const emailIsInvalid = false;
//   const passwordIsInvalid = false;

//   let nameErrorMessage = "";
//   const emailErrorMessage = "";
//   const passwordErrorMessage = "";

//   useEffect(() => {
//     // Name Validation
//     if (name.length < 3) {
//       nameIsInvalid = true;
//       nameErrorMessage = "Name must be greater than 3 Characters";
//     } else if (name.length > 15) {
//       nameIsInvalid = true;
//       nameErrorMessage = "Name cannot be greater than 15 Characters";
//     } else {
//       nameIsInvalid = false;
//       nameErrorMessage = "";
//     }
//   }, [name, email, password]);

//   return (
//     <div className="signup">
//       <Link to="/">
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//           alt=""
//           className="signup__img"
//         />
//       </Link>
//       <div className="signup__container">
//         <h1>Create Account</h1>
//         <form>
//           <h5>Name</h5>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <span>{nameIsInvalid ? nameErrorMessage : ""}</span>
//           <h5>Email</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </form>
//         <p>
//           By continuing, you agree to Amazon's{" "}
//           <span style={{ color: "blue" }}>Conditions of Use</span> and{" "}
//           <span style={{ color: "blue" }}>Privacy Notice</span>.
//         </p>
//         <br />
//         <Link to="/">
//           <button className="signup__signUpButton">
//             <span> Create Your Amazon Account</span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
