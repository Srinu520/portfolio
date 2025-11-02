export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL ?? '/api/contact';

interface ErrorResponse {
  message?: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  console.log('Submitting contact form data to:', CONTACT_API_URL);
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    let errorMessage = 'Failed to send your message.';

    try {
      const data = (await response.json()) as ErrorResponse;
      if (data?.message) {
        errorMessage = data.message;
      }
    } catch {
      // noop - keep default message
    }

    throw new Error(errorMessage);
  }
};
