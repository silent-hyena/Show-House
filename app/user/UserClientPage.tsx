"use client";

import { useEffect, useState } from "react";
import Link from "next/link";



type Props = {
  status?: string;
};

export default function HomeClientPage({ status }: Props) {

  const AuthenticationState = status;
  
  const [Name, setName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  

  useEffect(() => {
    async function getUserinfo() {
      try {
        const res = await fetch("/api/user/home", {
          credentials: "include",
        });

        if (!res.ok) return;

        const data = await res.json();

        setName(data.data.first_name);
        setUserEmail(data.data.email);
        setUserName(data.data.username);
      } catch (err) {
        console.error(err);
      }
    }

    getUserinfo();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white flex flex-column justify-center py-16 px-6">
        <div className="max-w-2xl w-full">
          <div className="custom_pill_box">
            <Link href="/">Go to Home Page</Link>
          </div>

          {AuthenticationState == "success" && (
            <>
              <h1 className="text-4xl font-bold text-[#F54927] mb-4">
                Welcome {Name}
              </h1>

              <p className="text-gray-600 leading-relaxed mb-10">
                You currently don&apos;t have any personal collection. Start
                creating your custom movie collections. You can also share them
                with others and follow profiles you like.
              </p>

              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Account Information
                </h2>

                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium text-gray-500">Name</span>
                    <span>{Name}</span>
                  </div>

                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium text-gray-500">Email</span>
                    <span>{userEmail}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500">Username</span>
                    <span>{userName}</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* UI in case of user denied the consent for giving data: */}
          {AuthenticationState == "fail" && (
            <>
              <p className="text-gray-600 leading-relaxed mb-10">
                Sorry, we can not log you in currently. Please try again.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
