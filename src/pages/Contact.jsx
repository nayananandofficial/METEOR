import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import FadeInWhenVisible from '../components/animations/FadeInWhenVisible';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
  ];

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      details: ['123 Innovation Drive', 'San Francisco, CA 94102', 'United States'],
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', 'Mon-Fri 9AM-6PM PST'],
    },
    {
      icon: HiMail,
      title: 'Email Us',
      details: ['hello@techcorp.com', 'We respond within 24 hours'],
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-24 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <HiCheckCircle className="mx-auto text-6xl text-green-500 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <Button variant='link' onClick={() => window.location.reload()}>
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInWhenVisible className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our solutions 
            can help you achieve your goals.
          </p>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <FadeInWhenVisible>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="p-6">
                    <div className="flex items-start space-x-4">
                      <info.icon className="mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeInWhenVisible>
              <Card className="p-8">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">Send us a message</h2>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Step {currentStep} of 3
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-black dark:bg-white h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(currentStep / 3) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        label="Company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  )}

                  {/* Step 2: Contact Details */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-6"
                    >
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300/30 dark:border-gray-600/30 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all duration-200"
                        >
                          {subjects.map((subject) => (
                            <option key={subject.value} value={subject.value}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Message */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300/30 dark:border-gray-600/30 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue transition-all duration-200 resize-none"
                          placeholder="Tell us about your project or inquiry..."
                          required
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="link"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className={currentStep === 1 ? 'invisible' : ''}
                    >
                      Previous
                    </Button>
                    
                    {currentStep < 3 ? (
                      <Button variant='link' type="button" onClick={nextStep}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit">
                        Send Message
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;