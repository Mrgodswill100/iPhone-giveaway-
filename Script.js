document.getElementById('forwardButton').addEventListener('click', function() {
    // Replace this URL with the actual link you want users to share
    const linkToShare = "https://yourgiveawaylink.com"; // Your giveaway link
    const message = encodeURIComponent(`Check out this giveaway: ${linkToShare}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
});
