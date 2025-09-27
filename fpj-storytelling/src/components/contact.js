import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Helper to encode form data for Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] ?? ''))
      .join('&');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Include form-name for Netlify static form processing
    const submission = {
      'form-name': 'contact',
      ...formData
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(submission)
    })
      .then(() => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          experience: '',
          message: ''
        });
      })
      .catch(() => setSubmitStatus('error'))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your pharmaceutical career? Let's discuss how we can help you achieve your professional goals.
          </p>
        </div>
      </section>

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Start Your Journey</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you for your submission! We'll get back to you soon.
                </div>
              )}

              {/* Netlify form attributes: name matches hidden input below */}
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field" 
                onSubmit={handleSubmit} 
                className="space-y-6" 
                aria-labelledby="contact-form-heading"
              >
                {/* Hidden input required for Netlify to register the form */}
                <input type="hidden" name="form-name" value="contact" />
                {/* Honeypot field to reduce spam (hidden from users) */}
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={handleInputChange} />
                  </label>
                </p>
                <h3 id="contact-form-heading" className="sr-only">Contact form</h3>
                <div>
                  <label htmlFor="contact-name" className="sr-only">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="sr-only">Phone</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="sr-only">Service</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a Service</option>
                    <option value="cdm">Clinical Data Management</option>
                    <option value="sas">Clinical SAS Programming</option>
                    <option value="pharmacovigilance">Pharmacovigilance</option>
                    <option value="regulatory">Regulatory Affairs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 disabled:bg-gray-400"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Sent!' : 'Send Message'}
                </button>
                {submitStatus === 'error' && (
                  <div className="text-sm text-red-600">There was a problem sending your message. Please try again.</div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Commitment</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Personalized career coaching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-aligned training programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 support from experts</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Response Promise</h3>
                <p className="text-gray-600 mb-4">
                  We understand that timing is crucial in career decisions. Our team commits to responding to all inquiries within 24 hours.
                </p>
                <div className="flex items-center gap-2 text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">24-hour response guarantee</span>
                </div>
                {/* Social / Direct Contact */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">Connect Directly</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.linkedin.com/in/firstpharmajob"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0A66C2] text-white font-medium shadow hover:shadow-md hover:bg-[#0d74db] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2]"
                      aria-label="Visit our LinkedIn profile"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M4.983 3.5C4.983 4.604 4.105 5.5 3 5.5 1.895 5.5 1 4.604 1 3.5 1 2.395 1.895 1.5 3 1.5c1.105 0 1.983.895 1.983 2zM1.25 22h3.5V7.75h-3.5V22zM8.75 7.75h-3.5V22h3.5v-7.164c0-3.258 4.25-3.521 4.25 0V22h3.5v-8.902c0-5.217-5.979-5.034-7.75-2.466V7.75z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href="https://wa.me/919100514968?text=Hi%20FirstPharmaJob%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20programs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-green-500 text-white font-medium shadow hover:shadow-md hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      aria-label="Chat with us on WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12.04 2c-5.52 0-10 4.42-10 9.86 0 1.74.51 3.41 1.48 4.87L2 22l5.4-1.72a10.2 10.2 0 0 0 4.64 1.12h.01c5.52 0 10-4.42 10-9.86 0-2.64-1.07-5.12-3.01-6.99A10.37 10.37 0 0 0 12.04 2m5.84 14.21c-.24.68-1.39 1.3-1.92 1.38-.49.07-1.1.1-1.77-.11-.41-.13-.94-.3-1.63-.59-2.87-1.24-4.75-4.14-4.89-4.33-.14-.19-1.17-1.55-1.17-2.96 0-1.4.74-2.08 1-2.36.24-.26.64-.38 1.03-.38h.15c.3.01.46.03.66.52.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.27.48-.14.17-.29.38-.41.51-.13.13-.27.28-.12.55.15.26.68 1.12 1.46 1.81 1 .9 1.81 1.18 2.09 1.31.27.13.43.11.59-.06.19-.21.43-.56.68-.91.17-.25.39-.28.62-.19.23.09 1.47.7 1.72.83.26.13.43.19.49.3.07.11.07.63-.17 1.31Z" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                  <p className="text-xs text-gray-500">WhatsApp number: +91 91005 14968</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;