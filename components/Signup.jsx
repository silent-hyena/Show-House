"use client";

function Signup() {
  function handleSignup() {
    const params = new URLSearchParams({
      client_id:
        "368086568163-a62ma0ff03hdtecucl6fqufuq5mjru8a.apps.googleusercontent.com",
      redirect_uri: "https://show-house.vercel.app/api/auth",
      response_type: "code",
      scope: "email profile openid",
      display: "popup",
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  }

  return (
    <div>
      <button className="cursor-pointer custom_pill_box " onClick={handleSignup}>
        Signup with Google
      </button>
    </div>
  );
}

export default Signup;
