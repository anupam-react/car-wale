import axios from "axios";
import { useEffect, useState } from "react";
import { errorToast, successToast } from "../components/Toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  console.log(user, profile);
  useEffect(() => {
    // if (user) {
    //   axios
    //     .get(
    //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${user.access_token}`,
    //           Accept: "application/json",
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       setProfile(res.data);
    //     })
    //     .catch((err) => console.log(err));
    // }
  }, [user]);

  const handleLogin = async (event) => {
    event.preventDefault();
    // if (!email || !password) {
    //   return errorToast("Fill all the fields");
    // }
    // console.log(email, password);
    // const formData = {
    //   email,
    //   password,
    // };
    navigate("/dashboard");
    // try {
    //   const response = await axios.post(
    //     "https://blubo0qb46.execute-api.ap-south-1.amazonaws.com/dev/api/v1/admin/api/admin/login",
    //     formData
    //   );
    //   successToast("LogIn Successfully");
    //   sessionStorage.setItem("token", response?.data?.token);
    //   navigate("/dashboard");
    //   console.log(response?.data?.token);
    // } catch (error) {
    //   console.log(error);
    //   errorToast("Wrong email or password");
    //   return error;
    // }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    showPassword,
    setShowPassword,
    togglePasswordVisibility,
    handleCheckboxChange,
    handleLogin,
  };
};

export default useLogin;
