"use client"
import Link from "next/link";
import {TextField, ThemeProvider} from "@mui/material";
import {theme} from "@/app/(theme)/theme";
import users from "../data/users.json"
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {useRouter} from "next/navigation";

const Page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleSubmit = () => {
        if (email.trim() !== "") {
            const currentUser = users.find(user => user.email === email)
            if (currentUser) {
                if (password === currentUser.password) {
                    toast.success('Welcome back!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        onClose: () => router.push("/")
                    });

                    setError(false);
                } else {
                    setError(true);
                }
            } else {
                setError(true);
            }
        }else {
            setError(true);
        }

    }

    return (
        <>
            <div
                className="absolute w-full h-full flex flex-col justify-between py-15 px-10 items-center">
                <h1 className={"text-white text-[40px] h-1/4"}>LOGIN</h1>
                <div className={"flex items-start justify-around w-full h-150 flex-col "}>

                    <ThemeProvider theme={theme}>
                        <TextField sx={{
                            "& .MuiInputBase-input": {color: "white !important"},
                            "& .MuiInputLabel-root": {color: "white !important"},
                            "& .MuiInputLabel-root.Mui-focused": {color: "white !important"},
                            "& .MuiInput-underline:before": {borderBottomColor: "white !important"},
                            "& .MuiInput-underline:after": {borderBottomColor: "white !important"},
                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                borderBottomColor: "white !important"
                            }
                        }}
                                   onChange={e => (setEmail(e.target.value))}
                                   color="black" variant={"standard"}
                                   className=" w-full h-15" type={"email"}
                                   label={"Email"}/>
                        <TextField
                                        onChange={e => (setPassword(e.target.value))}
                                        sx={{
                                            "& .MuiInputBase-input": {color: "white !important"},
                                            "& .MuiInputLabel-root": {color: "white !important"},
                                            "& .MuiInputLabel-root.Mui-focused": {color: "white !important"},
                                            "& .MuiInput-underline:before": {borderBottomColor: "white !important"},
                                            "& .MuiInput-underline:after": {borderBottomColor: "white !important"},
                                            "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                                                borderBottomColor: "white !important"
                                            }
                                        }} color="black" variant={"standard"}
                                        className=" w-full h-15"
                                        type={"text"}
                                        label={"Password"}/>
                        {error && (<p className="-mt-13 text-[1.2rem] text-red-500">Incorrect Email or Password</p>)}
                    </ThemeProvider>
                </div>
                <div className="h-3/4 w-full justify-between items-center pt-20">
                    <button type="submit" onClick={handleSubmit}
                            className="w-full z-999 text-xl border-1 cursor-pointer bg-linear-to-r bg-fuchsia-950 to-purple-950 rounded-full text-center justify-center items-center flex mb-3 h-10">
                        Log In
                    </button>
                    <p>Dont have an account?<strong><Link
                        href={"/register"}> Register</Link></strong></p>
                </div>
                <div
                    className="w-15 h-15 justify-center z-10 items-center text-5xl flex  absolute right-10 rounded-bl-2xl rounded-tr-2xl">
                    <Link className="z-8" href={"/"}>×</Link>
                    <div
                        className="w-full h-full absolute z-2 rounded-bl-3xl rounded-tr-3xl opacity-40 bg-gray-800"></div>
                </div>
                <ToastContainer/>
            </div>

        </>
    )
}

export default Page;