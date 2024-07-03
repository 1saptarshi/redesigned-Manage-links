document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    const clickCounts = {};

    socialLinks.forEach(link => {
        const platform = link.dataset.link;
        clickCounts[platform] = 0;
        const countElement = document.getElementById(`${platform}-count`);
        link.addEventListener('click', () => {
            clickCounts[platform]++;
            countElement.textContent = clickCounts[platform];
            console.log(`Link: ${platform}, Count: ${clickCounts[platform]}`);
        });
    });

     

     
     
});
