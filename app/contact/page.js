'use client';
import { useState } from 'react';

export default function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submittedEmails, setSubmittedEmails] = useState(new Set()); // To track duplicate entries in current session

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.project.trim()) newErrors.project = "Project description is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (submittedEmails.has(formData.email)) {
      setStatus({ type: 'error', msg: 'You have already submitted a request with this email.' });
      return;
    }

    setStatus({ type: 'loading', msg: 'Sending message...' });

    // Mocking an API call
    setTimeout(() => {
      setSubmittedEmails(prev => new Set(prev).add(formData.email));
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setFormData({ name: '', email: '', project: '' }); // Reset form
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-accent-blue text-sm font-bold tracking-widest uppercase mb-2 block">Get In Touch</span>
        <h2 className="font-display text-4xl font-bold">Let's Work <span className="gradient-text">Together</span></h2>
      </div>

      <div className="glass-card p-8 md:p-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          <div>
            <label className="block text-sm font-semibold text-gray-400 uppercase mb-2">Your Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-400 uppercase mb-2">Email Address</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-400 uppercase mb-2">Project Description</label>
            <textarea 
              rows="5"
              value={formData.project}
              onChange={(e) => setFormData({...formData, project: e.target.value})}
              className={`w-full bg-white/5 border ${errors.project ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-colors resize-y`}
              placeholder="Tell me about your project..."
            ></textarea>
            {errors.project && <p className="text-red-500 text-sm mt-1">{errors.project}</p>}
          </div>

          <button 
            type="submit" 
            disabled={status?.type === 'loading'}
            className="w-full py-4 bg-gradient-main text-white rounded-lg font-bold shadow-lg hover:opacity-90 disabled:opacity-50 transition-all"
          >
            {status?.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status && status.type !== 'loading' && (
            <p className={`text-center font-medium ${status.type === 'success' ? 'text-accent-green' : 'text-red-500'}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}