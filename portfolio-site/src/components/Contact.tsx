'use client';

import React, { useState } from 'react';
import { submitContactForm } from '@/services/contact';
import styles from './Contact.module.css';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback(null);

    try {
      await submitContactForm(formData);
      setStatus('success');
      setFeedback('Thanks for reaching out! I will get back to you within 24 hours.');
      setFormData(initialFormState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again later or email me directly.';
      setStatus('error');
      setFeedback(message);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.linesDecoration}>
        <div className={styles.connectionLine}></div>
        <div className={styles.connectionLine}></div>
        <div className={styles.connectionLine}></div>
        <div className={styles.connectionDot}></div>
        <div className={styles.connectionDot}></div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Work Together</h2>
        <p className={styles.subtitle}>
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3>Email</h3>
              <a href="mailto:srinu.fe@gmail.com">srinu.fe@gmail.com</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📞</div>
              <h3>Phone</h3>
              <a href="tel:+919391339072">+91 9391339072</a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>🕒</div>
              <h3>Availability</h3>
              <p>Available for freelance and full-time opportunities</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={status === 'loading'}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                disabled={status === 'loading'}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
                disabled={status === 'loading'}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows={5}
                disabled={status === 'loading'}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>

            {feedback && (
              <div
                className={`${styles.formFeedback} ${
                  status === 'success' ? styles.success : status === 'error' ? styles.error : ''
                }`}
                role="status"
                aria-live="polite"
              >
                {feedback}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
