"use client"

import Link from "next/link";
import {TextField, ThemeProvider} from "@mui/material";
import {theme} from "@/app/(theme)/theme";

const Register = () => {

    return (
        <>
            <div
                className="absolute w-full h-full flex flex-col justify-between py-15 px-10 items-center">
                <h1 className={"text-white text-[40px] mb-10 h-1/4"}>REGISTER</h1>
                <div className={"flex text-white items-start justify-around w-full h-150 flex-col "}>
                <ThemeProvider theme={theme}>
                    <TextField sx={{
                        "& .MuiInputBase-input": { color: "white !important" },
                        "& .MuiInputLabel-root": { color: "white !important" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "white !important" },
                        "& .MuiInput-underline:before": { borderBottomColor: "white !important" },
                        "& .MuiInput-underline:after": { borderBottomColor: "white !important" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottomColor: "white !important"
                        }
                    }}  color="black" variant={"standard"} className="my-input w-full h-15" type={"text"}
                               label={"Name"}/>
                    <TextField sx={{
                        "& .MuiInputBase-input": { color: "white !important" },
                        "& .MuiInputLabel-root": { color: "white !important" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "white !important" },
                        "& .MuiInput-underline:before": { borderBottomColor: "white !important" },
                        "& .MuiInput-underline:after": { borderBottomColor: "white !important" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottomColor: "white !important"
                        }
                    }} color="black" variant={"standard"} className=" w-full h-15" type={"text"}
                               label={"Email"}/>
                    <TextField sx={{
                        "& .MuiInputBase-input": { color: "white !important" },
                        "& .MuiInputLabel-root": { color: "white !important" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "white !important" },
                        "& .MuiInput-underline:before": { borderBottomColor: "white !important" },
                        "& .MuiInput-underline:after": { borderBottomColor: "white !important" },
                        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                            borderBottomColor: "white !important"
                        }
                    }} color="black" variant={"standard"} className=" w-full h-15" type={"text"}
                               label={"Password"}/>
                </ThemeProvider>
                    <div className={"flex items-center justify-start w-full pt-2"}>
                        <input className="mr-2" id={"Remember"} type={"checkbox"}/>
                        <label htmlFor={"Remember"}>Remember Me</label>
                    </div>
                </div>
                <div className="h-3/4 w-full justify-between items-center pt-20">
                    <button
                        className="w-full text-xl border-1 bg-linear-to-r bg-fuchsia-950 to-purple-950 rounded-full text-center justify-center items-center flex mb-3 h-10">
                        Sign in
                    </button>
                    <p>Already have an account ? <strong><Link
                        href={"/login"}> Login</Link></strong></p>
                </div>
                <div
                    className="w-15 h-15 justify-center z-10 items-center text-5xl flex  absolute right-10 rounded-bl-2xl rounded-tr-2xl">
                    <Link className="z-8" href={"/"}>×</Link>
                    <div
                        className="w-full h-full absolute z-2 rounded-bl-3xl rounded-tr-3xl opacity-40 bg-gray-800"></div>
                </div>
            </div>
        </>
    )
}

export default Register;