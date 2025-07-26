"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, errorMessages } from "@/firebase";
import SignInForm from "@/app/components/SignInForm";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        try {
            e.preventDefault();
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
        }
        catch (error) {
            setError(errorMessages[error.code]);
            console.log(error);
        }
        setEmail('');
        setPassword('');
    }

    return (
        <SignInForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} handleSignIn={handleSignIn}/>
    );
}
