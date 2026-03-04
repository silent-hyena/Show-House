export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold tracking-tight mb-6">
          Privacy Policy
        </h1>

        <p className="text-neutral-400 mb-10">
          Last updated: March 2026
        </p>

        <section className="space-y-6 text-neutral-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-medium mb-2">
              1. Information We Collect
            </h2>
            <p>
              When you sign in using Google authentication, we receive limited
              identity information from your Google account. This may include
              your name, email address, and profile picture.
            </p>
            <p className="mt-2">
              This information is provided through Google’s OpenID Connect
              authentication service and is used only to identify your account
              within our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              2. Google Sign-In Scopes
            </h2>
            <p>
              Our application requests the following Google authentication
              scopes:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>openid</strong> — used for secure authentication</li>
              <li><strong>email</strong> — used to identify your account</li>
              <li><strong>profile</strong> — used to display your name and profile picture</li>
            </ul>

            <p className="mt-2">
              We do not access your Google Drive, contacts, calendar, or any
              other personal Google data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              The information obtained from Google Sign-In is used solely to:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Create and maintain your user account</li>
              <li>Allow secure login to the service</li>
              <li>Display your profile identity within the platform</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              4. Cookies and Authentication
            </h2>
            <p>
              After authentication, we may store a secure session token in a
              browser cookie to keep you signed in. These cookies are used only
              for authentication and service functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              5. Third-Party Data Sources
            </h2>
            <p>
              Movie information, images, and metadata displayed on this website
              are provided by the TMDB API. This website uses the TMDB API but
              is not endorsed or certified by TMDB.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              6. Data Sharing
            </h2>
            <p>
              We do not sell, trade, or share your personal information with
              third parties except when necessary to operate the service or
              comply with legal requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              7. Data Security
            </h2>
            <p>
              We take reasonable steps to protect user information from
              unauthorized access or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              8. Account Deletion
            </h2>
            <p>
              Users may request deletion of their account and associated data
              at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">
              9. Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated periodically. Continued use of
              the service after changes indicates acceptance of the revised
              policy.
            </p>
          </div>

        </section>

        <div className="mt-12 text-sm text-neutral-500 border-t border-neutral-800 pt-6">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </div>

      </div>
    </main>
  );
}