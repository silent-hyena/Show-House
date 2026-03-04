'use client'
import { useSearchParams } from "next/navigation";


export default function LoadingScreen(){

    const searchParams = useSearchParams();
    const status = searchParams.get("status");

    return <>
    <p>Current status: {status}</p>
    </>
}