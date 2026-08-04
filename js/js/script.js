document.getElementById('orderForm').addEventListener('submit', function(e) {
e.preventDefault();

// Replace with your business WhatsApp phone number (with country code, no + or spaces)
const phoneNumber = "918296538496";

const name = document.getElementById('custName').value;
const item = document.getElementById('selectedItem').value;
const notes = document.getElementById('notes').value;

const message = `Hello Fudge Bakery Co.!\n\n` +
`*New Order Details:*\n` +
`*Name:* ${name}\n` +
`*Item:* ${item}\n` +
`*Notes/Customization:* ${notes}`;

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl, '_blank');
});