"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.ok) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        e.target.reset(); // Clear the form
      } else {
        throw new Error(resData.error?.message || `Failed to send message (${response.status})`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setError(error.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project and bring your ideas to life.
          </p>
        </div>

        {/* Main Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#1a1a2e] border border-[#2a2a4e] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Send me a message</h3>
              
              {emailSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-500 text-lg font-medium">Message sent successfully!</p>
                  <p className="text-gray-400 mt-2">Thank you for reaching out. I'll get back to you soon!</p>
                  <button 
                    onClick={() => setEmailSubmitted(false)}
                    className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">{error}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Email and Subject Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full bg-[#0f0f1e] border border-[#2a2a4e] text-white placeholder-gray-500 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        name="subject"
                        type="text"
                        required
                        className="w-full bg-[#0f0f1e] border border-[#2a2a4e] text-white placeholder-gray-500 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-sm sm:text-base"
                        placeholder="Project Discussion"
                      />
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-[#0f0f1e] border border-[#2a2a4e] text-white placeholder-gray-500 px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project and how I can help you..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-medium py-3 sm:py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-blue-900 transform hover:scale-105'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        SEND MESSAGE
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Contact Info and Social Links */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Contact Information Box */}
            <div className="bg-[#1a1a2e] border border-[#2a2a4e] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
              {/* Location */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">Location</p>
                  <p className="text-white font-medium text-sm sm:text-base">Colombo, Sri Lanka</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base break-all">amsadhanisulakshani@gmail.com</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs sm:text-sm mb-1">Phone</p>
                  <p className="text-white font-medium text-sm sm:text-base">+94 77 3943026</p>
                </div>
              </div>
            </div>
          </div>

            {/* Follow Me Box */}
            <div className="bg-[#1a1a2e] border border-[#2a2a4e] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Follow Me</h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {/* GitHub */}
              <Link
                href="https://github.com/Sadhani721"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 sm:p-4 bg-[#0f0f1e] border border-[#2a2a4e] rounded-lg hover:border-blue-900 hover:bg-blue-900/20 transition-all duration-200 group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium text-sm sm:text-base">GitHub</span>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/sadhani-sulakshani-437228302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 sm:p-4 bg-[#0f0f1e] border border-[#2a2a4e] rounded-lg hover:border-blue-900 hover:bg-blue-900/20 transition-all duration-200 group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-900 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
                <span className="text-white font-medium text-sm sm:text-base">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default EmailSection;