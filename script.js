// Main Page Functionality
if (document.getElementById('share-btn')) {
    let shareCount = 0;
    const shareBtn = document.getElementById('share-btn');
    const shareCountEl = document.getElementById('share-count');
    const rewardSection = document.getElementById('reward-section');

    shareBtn.addEventListener('click', function() {
        // Generate unique referral link
        const referralLink = window.location.href + "?ref=" + Math.random().toString(36).substring(7);

        // Create WhatsApp share link
        const message = `Hey! I just found this amazing way to earn ₹5000 instantly. Check it out: ${referralLink}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

        // Open WhatsApp share dialog
        window.open(whatsappUrl, '_blank');

        // Simulate share tracking
        shareCount++;
        shareCountEl.textContent = shareCount;

        // Show reward section when 10 shares are reached
        if (shareCount >= 10) {
            rewardSection.classList.remove('hidden');
            shareBtn.disabled = true;
            shareBtn.textContent = "Task Completed!";
            shareBtn.style.backgroundColor = "#4CAF50";
        }
    });
}

// Reward Page Functionality
if (document.getElementById('reward-form')) {
    const form = document.getElementById('reward-form');
    const popup = document.getElementById('success-popup');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const fullname = document.getElementById('fullname').value;
        const phone = document.getElementById('phone').value;
        const upi = document.getElementById('upi').value;
        const method = document.getElementById('bank').value;

        // Show popup
        showPopup();

        // Reset form
        form.reset();
    });

    function showPopup() {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closePopup() {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Close popup if clicked outside content
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
}