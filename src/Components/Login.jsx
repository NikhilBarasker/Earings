// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import {varifyUser} from './BackendConnection.js'
//   import '../App.css'

//   export default function Login() {

    
//     const [email, setEmail] = useState('')
//     const [password, setpassword] = useState('')


//     const handleEmail = (e) => {
//        e.preventDefault();
//       setEmail(e.target.value);
//       console.log(e.target.value)
//     }
//     const handlePassword = (e) => {
//       e.preventDefault();
//       setpassword(e.target.value)
//       console.log(e.target.value)
//     }
//     const handleclick = async() => {
//       if (email === '' || password === '') {
//         alert(`Any of the fields is empty`)
//       }
//       else {
//         let info = { email, password };
//       await  varifyUser(info)
//       } 
//   }
//     return (
//       <div>
//         <form className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] loginfrm">
//           <p style={{ fontSize: "25px" }}>Login</p>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleEmail}
//             placeholder="Enter Email"
//             className="px-4 py-3 bg-gray-100 w-full text-sm outline-[#333] rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handlePassword}
//             placeholder="Enter Password"
//             className="px-4 py-3 bg-gray-100 w-full text-sm outline-[#333] rounded"
//           />
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <div>
//               <input type="checkbox" className="w-4" />
//               <label className="text-sm ml-4">Remember me</label>
//             </div>
//             <div className="text-sm ml-4 newAdminLink">
//               <Link to="/registration">New Admin</Link>
//             </div>
//           </div>
//           <button
//             type="button"
//             onClick={() => handleclick()}
//             className="!mt-8 px-6 py-2 text-sm bg-[#333] text-white rounded hover:bg-[#222]"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }

import React from 'react'

const Login = () => {
  return (
    <div>
      
    </div>
  )
}

export default Login
