'use client';
import Chatbox from './components/Chatbox'
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            console.log('user signed out');

            if (pathname !== '/sign-up') {
              router.push('/sign-in');
            }
            else {
              router.push('/sign-up'); 
            }
          }
          setLoading(false)
        })
    })

    if (loading) {
      return <div>Loading...</div>
    }

  return (
    <Chatbox/>
  );
}
