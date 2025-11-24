// Interactive Timeline Functionality
class PuppyTimeline {
    constructor() {
        this.init();
    }

    init() {
        this.addTimelineInteractions();
        this.addScrollAnimations();
    }

    addTimelineInteractions() {
        const timelineMarkers = document.querySelectorAll('.timeline-marker');
        const timelineItems = document.querySelectorAll('.timeline-item');

        timelineMarkers.forEach(marker => {
            marker.addEventListener('click', (e) => {
                const timelineItem = e.target.closest('.timeline-item');
                const details = timelineItem.querySelector('.timeline-details');
                
                // Close all other details
                document.querySelectorAll('.timeline-details').forEach(detail => {
                    if (detail !== details) {
                        detail.classList.remove('active');
                    }
                });

                // Toggle current details
                details.classList.toggle('active');

                // Add visual feedback
                timelineItems.forEach(item => item.classList.remove('active'));
                timelineItem.classList.add('active');
            });
        });

        // Close details when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.timeline-item')) {
                document.querySelectorAll('.timeline-details').forEach(detail => {
                    detail.classList.remove('active');
                });
                document.querySelectorAll('.timeline-item').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }

    addScrollAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Staggered animation delay
                    const index = Array.from(timelineItems).indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        timelineItems.forEach(item => {
            observer.observe(item);
        });
    }
}

// Initialize timeline when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PuppyTimeline();
});