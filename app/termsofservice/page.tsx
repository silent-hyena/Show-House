export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 px-6 py-16">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-semibold tracking-tight mb-6">
          Terms of Service
        </h1>

        <p className="text-neutral-400 mb-10">
          Last updated: March 2026
        </p>

        <section className="space-y-6 text-neutral-300 leading-relaxed">

          <div>
            <h2 className="text-xl font-medium mb-2">1. Overview</h2>
            <p>
              This website provides movie discovery, ratings, and informational
              content for films. By using this service you agree to these Terms
              of Service. If you do not agree, please discontinue use of the
              website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">2. Accounts</h2>
            <p>
              You may create an account using Google authentication. When you
              sign in with Google, we receive basic profile information such as
              your name and email address solely for account identification and
              service functionality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">3. Use of the Service</h2>
            <p>
              The service allows users to browse movie information, maintain
              watchlists, track viewing history, and rate films. Users agree not
              to misuse the platform, attempt to disrupt its operation, or use
              it for unlawful activities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">4. Movie Data Source</h2>
            <p>
              Movie information, images, and metadata are provided by the
              TMDB API. This website uses the TMDB API but is not endorsed or
              certified by TMDB.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">5. Intellectual Property</h2>
            <p>
              All trademarks, movie titles, images, and related media belong to
              their respective copyright holders. The platform displays this
              content solely for informational and discovery purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">6. User Content</h2>
            <p>
              Users may submit ratings, lists, or reviews. By submitting
              content, you grant the service a non-exclusive license to display
              and distribute that content within the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">7. Service Availability</h2>
            <p>
              The service may be modified, suspended, or discontinued at any
              time without prior notice. We do not guarantee uninterrupted
              availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">8. Limitation of Liability</h2>
            <p>
              The website is provided on an “as-is” basis. We are not liable for
              inaccuracies in movie data, third-party API disruptions, or any
              damages resulting from use of the service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">9. Changes to These Terms</h2>
            <p>
              These Terms may be updated periodically. Continued use of the
              service after changes indicates acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">10. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us through
              the website.
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