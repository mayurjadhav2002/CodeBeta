import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { FcGoogle } from 'react-icons/fc'
import {RxGithubLogo} from 'react-icons/rx'
import { Link } from "react-router-dom";
export default function Register() {
    return (
        <div className="py-5 w-full justify-center flex bg-gray-50">

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <h1 className="text-3xl font-bold ">Sign Up</h1>
                <p className="text-sm text-ellipsis pt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente! Ex ea quia facere expedita? Rem eum molestias aspernatu
                </p>
                <div className="flex flex-col py-6 gap-4 text-center">
                    <Button
                        size="lg"
                        color="white"
                        className="flex items-center gap-3 text-center "
                    >
                        <FcGoogle  className=" w-6 h-6"/>
                        Continue with Google
                    </Button>



                    <Button
                        size="lg"
                        
                        className="flex items-center gap-3 text-center "
                    >
                        <RxGithubLogo className="text-white w-6 h-6"/>
                        Continue with Github
                    </Button>

                </div>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px my-8 bg-gray-700 border-0 dark:bg-gray-700" />
                    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-gray-50  left-1/2 dark:text-white dark:bg-gray-900">or</span>
                </div>

                <div className="mb-4 flex flex-col gap-6">
                    <Input size="lg" label="Name" />
                    <Input size="lg" label="Email" />
                    <Input type="password" size="lg" label="Password" />
                </div>
                <Checkbox
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <a
                                href="#"
                                className="font-medium transition-colors hover:text-gray-900"
                            >
                                &nbsp;Terms and Conditions
                            </a>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button color="blue" className="mt-6" fullWidth>
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link to={'/login'} className="font-medium text-gray-900">
                        Sign In
                    </Link>
                </Typography>
            </form>
        </div>
    );
}