"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function handleFormSubmit(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const form = document.getElementById('contactForm');
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            contact: document.getElementById('contact').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };
        try {
            const response = yield fetch('https://6717e2d4b910c6a6e02a72a7.mockapi.io/api/v1/ContactForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const result = yield response.json();
            console.log('Form successfully submitted:', result);
            alert("Form Submitted Successfully");
        }
        catch (error) {
            console.error('Failed to submit form:', error);
            alert("Failed to Submit Form");
        }
    });
}
const form = document.getElementById('contactForm');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleFormSubmit);
