import Link from "next/link";

const navlinks=[
    {name:"Login",href:"/login"},
    {name:"Register",href:"/register"},
    {name:"Forgot Password",href:"/forgot-password"},
];

export default function AuthLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div>
        {navlinks.map((link)=>{
            return (
                <Link href={link.href}key={link.name}>
                {link.name}
                </Link>
            );
        })}
        </div>
    );
}