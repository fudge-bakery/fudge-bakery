document.getElementById('orderForm').addEventListener('submit', function(e) {
e.preventDefault();

// Replace with your business WhatsApp phone number (with country code, no + or spaces)
const phoneNumber = "919876543210";

const name = document.getElementById('custName').value;
const item = document.getElementById('selectedItem').value;
const notes = document.getElementById('notes').value;

const message = `Hello Fudge Bakery Co.! %0A%0A` +
`*New Order Details:*%0A` +
`• *Name:* ${encodeURIComponent(name)}%0A` +
`• *Item:* ${encodeURIComponent(item)}%0A` +
`• *Notes/Customization:* ${encodeURIComponent(notes)}`;

const whatsappUrl = `https://wa.me/${8296538496}?text=${8296538496}`;

window.open(whatsappUrl, '_blank');
});