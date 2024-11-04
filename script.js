function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}
function sendWhatsAppMessage(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // WhatsApp message format
    const whatsappMessage = `Hello, I am ${name}.%0AEmail: ${email}%0AMessage: ${message}`;

    // WhatsApp API link with a placeholder for the phone number
    const whatsappURL = `https://wa.me/<8788428240>?text=${whatsappMessage}`;

    // Open WhatsApp with the message
    window.open(whatsappURL, '_blank');
}
// Video IDs for each course
const videos = {
    "HTML": "HcOc7P5BMi4",         // HTML course video
    "CSS": "ESnrn1kAD4E",    // Replace with the YouTube video ID for CSS course
    "JavaScript": "VlPiVmYuoqw" // Replace with the YouTube video ID for JavaScript course
};

// Function to load the selected course's video
function showVideo(course) {
    const videoId = videos[course];
    const videoFrame = document.getElementById("video-frame");
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
}
