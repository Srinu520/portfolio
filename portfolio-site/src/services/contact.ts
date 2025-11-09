export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const DEFAULT_CONTACT_API_PATH = '/api/contact';
const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL ?? DEFAULT_CONTACT_API_PATH;

const isLocalHostname = (hostname: string) => ['localhost', '127.0.0.1', '[::1]'].includes(hostname);

const resolveContactApiUrl = () => {
  if (!CONTACT_API_URL) {
    return DEFAULT_CONTACT_API_PATH;
  }

  try {
    const parsedUrl = new URL(CONTACT_API_URL, typeof window === 'undefined' ? 'http://localhost' : window.location.origin);

    if (
      typeof window !== 'undefined' &&
      isLocalHostname(parsedUrl.hostname) &&
      window.location.hostname !== parsedUrl.hostname
    ) {
      // Avoid using a localhost API target when the site itself isn't running on localhost.
      return DEFAULT_CONTACT_API_PATH;
    }

    return parsedUrl.toString();
  } catch {
    // Treat non-URL strings (e.g., relative paths) as-is.
    return CONTACT_API_URL;
  }
};

interface ErrorResponse {
  message?: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  const endpoint = resolveContactApiUrl();
  console.log('Submitting contact form data to:', endpoint);
  const response = await fetch(endpoint, {
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
