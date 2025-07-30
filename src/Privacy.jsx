import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi"; // Importing back arrow icon from react-icons

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-0 left-0 flex items-center cursor-pointer text-blue-600 hover:text-blue-800 transition-colors mb-4"
        >
          <FiArrowLeft className="mr-1" /> Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Your trust is important to us. Learn how we protect your
            information.
          </p>
        </div>

        {/* Rest of your existing privacy policy content remains the same */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-8 sm:p-10">
            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                Overview
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to{" "}
                <span className="font-semibold text-blue-600">GlucoseCare</span>
                . We are committed to protecting your privacy and providing a
                safe online experience. This Privacy Policy explains how we
                collect, use, and protect your personal and health information.
              </p>
              <p className="text-gray-700">
                By using our services, you agree to the terms of this Privacy
                Policy. If you do not agree, please do not use our services.
              </p>
            </section>

            {/* Information We Collect Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                Information We Collect
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Personal Information:
                  </h3>
                  <p className="text-gray-700">
                    We collect personal details like your name, email, phone
                    number, and address when you register, book appointments, or
                    contact us.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Health Information:
                  </h3>
                  <p className="text-gray-700">
                    We collect health-related information such as your blood
                    sugar levels, test results, medical history, and treatment
                    details to provide you with the best care.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Usage Information:
                  </h3>
                  <p className="text-gray-700">
                    We may collect non-personal data, such as your IP address,
                    browser type, and device details to improve our website and
                    services.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                How We Use Your Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-blue-100 p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Healthcare Services:
                  </h3>
                  <p className="text-gray-700">
                    We use your information to provide personalized care and
                    treatment based on your health needs.
                  </p>
                </div>

                <div className="bg-white border border-blue-100 p-5 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Communication:
                  </h3>
                  <p className="text-gray-700">
                    We may send you appointment reminders, health updates, or
                    newsletters. You can opt-out at any time by unsubscribing
                    from our emails.
                  </p>
                </div>

                <div className="bg-white border border-blue-100 p-5 rounded-lg shadow-sm md:col-span-2">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Improving Our Services:
                  </h3>
                  <p className="text-gray-700">
                    We analyze usage data to improve our website and overall
                    service experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Information Sharing Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                Information Sharing
              </h2>
              <p className="text-gray-700">
                We do not sell or rent your personal information. We may share
                your data with trusted partners only to provide our services and
                improve your healthcare.
              </p>
            </section>

            {/* Security Measures Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                Security Measures
              </h2>
              <p className="text-gray-700">
                We take steps to protect your personal and health information
                with industry-standard security measures including encryption,
                secure servers, and restricted access to your data.
              </p>
            </section>

            {/* Your Choices Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                Your Choices
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-700 mb-1">
                    Access and Correction:
                  </h3>
                  <p className="text-gray-700">
                    You can view and update your personal information through
                    your account or by contacting us.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-700 mb-1">Opt-Out:</h3>
                  <p className="text-gray-700">
                    You can unsubscribe from promotional emails at any time by
                    clicking the unsubscribe link in our emails.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Policy Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                Changes to this Privacy Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. Please
                check this page regularly for any changes. Your continued use of
                our services after any modifications indicates your acceptance
                of the updated policy.
              </p>
            </section>

            {/* Contact Us Section */}
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-6 pb-2 border-b border-blue-100">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about our Privacy Policy or how we
                handle your information, please don't hesitate to reach out.
              </p>
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Email Us:</h3>
                <a
                  href="mailto:yourglucosedoctor@gmail.com"
                  className="text-blue-100 hover:text-white underline"
                >
                  yourglucosedoctor@gmail.com
                </a>
              </div>
            </section>
          </div>

          {/* Last Updated */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
