import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { userAuthStore } from "../../store/auth/auth.js";

export default function Form() {
  const { signup } = userAuthStore(); 
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    Identity: "",
    phoneNo: ""
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // 🔹 Normal signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await signup(
        data.name,
        data.email,
        data.password,
        data.Identity,
        data.phoneNo
      );
      if (result?.success) {
        setData({ name: "", email: "", password: "", Identity: "", phoneNo: "" });
        navigate("/verify-email");
      } else {
        alert(result?.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.message || "An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // 🔹 Google redirect signup/login
  const handleGoogleSignup = () => {
    window.open("http://localhost:4000/api/auth/google", "_self");
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="bg-white rounded-xl text-black py-4 px-4">
        {/* Google Signup Button */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="bg-black flex items-center justify-center gap-3 text-[20px] py-2 px-5 w-full rounded-lg mb-3"
        >
          <FcGoogle size={30} />
          <span className="text-white">Sign Up with Google</span>
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-3">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Normal Signup Form */}
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!data.email.includes("@")) {
              alert("Email must include '@'");
              return;
            }
            // Password validation: min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(data.password)) {
              alert("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
              return;
            }
            handleSubmit(e);
          }}
        >
          <div className="flex flex-col mb-2">
            <label className="text-[16px] mb-1">Name</label>
            <input type="text" name="name" value={data.name} onChange={getValue} className="border-[1px] border-black rounded-lg py-2 px-3" required />
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-[16px] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={getValue}
              className="border-[1px] border-black rounded-lg py-2 px-3"
              required
              pattern="[^@]+@[^@]+\.[^@]+"
              title="Email must include '@'"
            />
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-[16px] mb-1">Password</label>
            <div className="relative">
              <input
                type={visible ? "text" : "password"}
                name="password"
                value={data.password}
                onChange={getValue}
                className="border-[1px] border-black rounded-lg py-2 px-3 w-full pr-10"
                required
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
                title="Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
              />
              <button type="button" onClick={() => setVisible(!visible)} className="absolute right-3 top-2">
                {visible ? <MdOutlineVisibilityOff size={20} /> : <MdOutlineVisibility size={20} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-[16px] mb-1">Phone No</label>
            <input type="text" name="phoneNo" value={data.phoneNo} onChange={getValue} className="border-[1px] border-black rounded-lg py-2 px-3" required />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-[16px] mb-1">Identity</label>
            <select name="Identity" value={data.Identity} onChange={getValue} className="border-[1px] border-black rounded-lg py-2 px-3" required>
              <option value="" disabled>Select Identity</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <button type="submit" disabled={isLoading} className="bg-black text-white py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2 disabled:opacity-50">
            {isLoading ? <><RiLoader2Fill className="animate-spin" size={20} /> Signing up...</> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
