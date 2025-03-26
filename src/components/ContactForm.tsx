
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from "sonner";
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success("Thank you for your feedback!", {
      description: "We'll be in touch soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-serendipity-dark/80 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 bg-white border border-serendipity-teal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-serendipity-teal"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-serendipity-dark/80 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 bg-white border border-serendipity-teal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-serendipity-teal"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-serendipity-dark/80 mb-2">
          Your Feedback
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 bg-white border border-serendipity-teal/30 rounded-md focus:outline-none focus:ring-2 focus:ring-serendipity-teal resize-none"
        />
      </div>
      
      <Button type="submit" variant="primary" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
