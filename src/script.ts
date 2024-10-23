interface ContactForm {
    name: string;
    email: string;
    contact: string;
    subject: string;
    message: string;
  }
  
async function handleFormSubmit(event: Event): Promise<void> {
event.preventDefault();

const form = document.getElementById('contactForm') as HTMLFormElement;

const formData: ContactForm = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    contact: (document.getElementById('contact') as HTMLInputElement).value,
    subject: (document.getElementById('subject') as HTMLInputElement).value,
    message: (document.getElementById('message') as HTMLTextAreaElement).value,
};


try {
    const response = await fetch('https://6717e2d4b910c6a6e02a72a7.mockapi.io/api/v1/ContactForm', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    });

    if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Form successfully submitted:', result);
    alert("Form Submitted Successfully");
} catch (error) {
    console.error('Failed to submit form:', error);
    alert("Failed to Submit Form");
}
}

const form = document.getElementById('contactForm');
form?.addEventListener('submit', handleFormSubmit);
