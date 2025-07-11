<script type="text/javascript" data-cfasync="false">
/*<![CDATA[/* */
(function(){var i=window,t="f5d51f582260e7a431e2091cdf755c44",c=[["siteId",320*131-402*825-255+5503372],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],w=["d3d3LmJldHRlcmFkc3lzdGVtLmNvbS9Wai9Pcy93cGF0aC5taW4uanM=","ZDJrazBvM2ZyN2VkMDEuY2xvdWRmcm9udC5uZXQveGJvb3RzdHJhcC5taW4uanM="],q=-1,n,a,f=function(){clearTimeout(a);q++;if(w[q]&&!(1778161970000<(new Date).getTime()&&1<q)){n=i.document.createElement("script");n.type="text/javascript";n.async=!0;var g=i.document.getElementsByTagName("script")[0];n.src="https://"+atob(w[q]);n.crossOrigin="anonymous";n.onerror=f;n.onload=function(){clearTimeout(a);i[t.slice(0,16)+t.slice(0,16)]||f()};a=setTimeout(f,5E3);g.parentNode.insertBefore(n,g)}};if(!i[t]){try{Object.freeze(i[t]=c)}catch(e){}f()}})();
/*]]>/* */
</script>
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
