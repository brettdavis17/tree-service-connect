// src/app/components/LeadForm.tsx  
'use client';

import { useState } from 'react';

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    services: [] as string[],
    treeCount: '1',
    urgency: 'Planning ahead',
    description: ''
  });

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          name: '',
          phone: '',
          address: '',
          services: [],
          treeCount: '1',
          urgency: 'Planning ahead',
          description: ''
        });
      } else {
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="lead-form" onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input 
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input 
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="(903) 555-0123"
          />
        </div>
      </div>

      {/* Address Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address *
          </label>
          <input 
            type="text"
            required
            value={formData.streetAddress}
            onChange={(e) => setFormData(prev => ({ ...prev, streetAddress: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="123 Main St"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City *
          </label>
          <input 
            type="text"
            required
            value={formData.city}
            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Kilgore"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State *
          </label>
          <select 
            value={formData.state}
            onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select State</option>
            <option value="TX">Texas</option>
            <option value="LA">Louisiana</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <input 
            type="text"
            value={formData.zipCode}
            onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="75662"
          />
        </div>
      </div>

      {/* <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="Street Address" />
        <input placeholder="City" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <select>
          <option>TX</option>
          <option>LA</option>
        </select>
        <input placeholder="ZIP Code" />
      </div> */}

      {/* <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Property Address *
        </label>
        <input 
          type="text"
          required
          value={formData.address}
          onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="123 Main St, Kilgore, TX 75662"
        />
      </div> */}

      {/* Service Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What service do you need? *
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            'Tree Removal',
            'Tree Trimming', 
            'Stump Grinding',
            'Emergency Service'
          ].map((service) => (
            <label key={service} className="flex items-center">
              <input 
                type="checkbox" 
                checked={formData.services.includes(service)}
                onChange={(e) => handleServiceChange(service, e.target.checked)}
                className="mr-2 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Job Details */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Trees
          </label>
          <select 
            value={formData.treeCount}
            onChange={(e) => setFormData(prev => ({ ...prev, treeCount: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>1</option>
            <option>2-3</option>
            <option>4-6</option>
            <option>7+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Urgency
          </label>
          <select 
            value={formData.urgency}
            onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>Planning ahead</option>
            <option>Within 2-4 weeks</option>
            <option>This week</option>
            <option>Emergency</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea 
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Describe the trees, location, special requirements..."
        />
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors disabled:bg-green-400"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Quotes from Tree Services'}
      </button>

      {/* Submit Message */}
      {submitMessage && (
        <div className={`text-sm text-center p-3 rounded ${
          submitMessage.includes('Thank you') 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {submitMessage}
        </div>
      )}

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted by tree service companies in your area.
      </p>
    </form>
  );
}

