import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect');
    const handleSocialLogin = async(provider) =>{
        const resp = signIn(provider, {
            redirect: true,
            callbackUrl: path ? path : '/'
        });
    }
    return (
        <div className="flex justify-center">
            <button onClick={()=>handleSocialLogin('google')} className="btn mx-3 hover:bg-gray-200 btn-circle border-none"><FcGoogle className="text-2xl" /></button>
            <button onClick={()=>handleSocialLogin('facebook')} className="btn mx-3 hover:bg-gray-200 btn-circle border-none"><FaFacebook className="text-2xl" /></button>
            <button onClick={()=>handleSocialLogin('github')} className="btn mx-3 hover:bg-gray-200 btn-circle border-none"><FaGithub className="text-2xl" /></button>
        </div>
    );
};

export default SocialLogin;