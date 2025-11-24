// Simple Event Card Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Event info toggle
    document.querySelectorAll('.event-info-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.event-card');
            const fullInfo = card.querySelector('.event-full-info');
            const isActive = fullInfo.classList.contains('active');
            
            // Close all other info sections
            document.querySelectorAll('.event-full-info').forEach(info => {
                info.classList.remove('active');
            });
            document.querySelectorAll('.event-info-btn').forEach(button => {
                button.textContent = 'More Info';
            });
            
            // Toggle current section
            if (!isActive) {
                fullInfo.classList.add('active');
                e.target.textContent = 'Less Info';
            }
        });
    });
});