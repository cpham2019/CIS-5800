"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, errorMessages } from "@/firebase";
import SignUpForm from "@/app/components/SignUpForm";

export default function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        try {
            e.preventDefault();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: username,
            });
        }
        catch (error) {
            setError(errorMessages[error.code]);
            console.log(error);
        }
        setUsername('');
        setEmail('');
        setPassword('');
    }

    return (
        <SignUpForm username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} handleSignUp={handleSignUp}/>
    );
}
