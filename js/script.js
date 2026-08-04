document.getElementById('orderForm').addEventListener('submit', function(e) {
e.preventDefault();

// WhatsApp Phone Number (with India country code 91)
const phoneNumber = "918296538496";

// Grab input values from HTML
const name = document.getElementById('custName').value;
const item = document.getElementById('selectedItem').value;
const notes = document.getElementById('notes').value;

// Create the order text message
const message = `Hello Fudge Bakery Co.!\n\n` +
`*New Order Details:*\n` +
`*Name:* ${name}\n` +
`*Item:* ${item}\n` +
`*Notes:* ${notes}`;

// Properly encode the message string for WhatsApp URL
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

// Open WhatsApp
window.open(whatsappUrl, '_blank');
});

