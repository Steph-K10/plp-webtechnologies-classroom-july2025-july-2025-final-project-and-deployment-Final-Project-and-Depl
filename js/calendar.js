// Simple Calendar for Events
class PuppyCalendar {
    constructor() {
        this.currentDate = new Date();
        this.events = [
            { date: '2024-12-15', title: 'Puppy Playdate 🐾', type: 'playdate' },
            { date: '2024-12-21', title: 'KSPCA Info 🏥', type: 'info' },
            { date: '2025-01-05', title: 'Puppy Cafe ☕', type: 'social' },
            { date: '2025-01-12', title: 'Training Session 🎾', type: 'training' },
            { date: '2025-01-19', title: 'Vet Check-up 🩺', type: 'health' },
            { date: '2025-01-26', title: 'Adoption Fair 🏠', type: 'adoption' }
        ];
        this.init();
    }

    init() {
        this.renderCalendar();
        this.addEventListeners();
    }

    renderCalendar() {
        const calendarEl = document.getElementById('calendar');
        const monthYearEl = document.getElementById('currentMonth');
        
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        monthYearEl.textContent = this.currentDate.toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
        });

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        let calendarHTML = '<div class="calendar-header">';
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
            calendarHTML += `<div class="calendar-day-header">${day}</div>`;
        });
        calendarHTML += '</div><div class="calendar-days">';

        // Empty cells for days before the first day of month
        for (let i = 0; i < startingDay; i++) {
            calendarHTML += '<div class="calendar-day empty"></div>';
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEvents = this.events.filter(event => event.date === dateStr);
            
            calendarHTML += `<div class="calendar-day ${dayEvents.length ? 'has-event' : ''}">`;
            calendarHTML += `<span class="day-number">${day}</span>`;
            
            if (dayEvents.length) {
                calendarHTML += `<div class="event-indicator">${this.getEventEmoji(dayEvents[0].type)}</div>`;
            }
            
            calendarHTML += '</div>';
        }

        calendarHTML += '</div>';
        calendarEl.innerHTML = calendarHTML;
    }

    getEventEmoji(type) {
        const emojis = {
            playdate: '🐾',
            info: '🏥',
            social: '☕',
            training: '🎾',
            health: '🩺',
            adoption: '🏠'
        };
        return emojis[type] || '📅';
    }

    addEventListeners() {
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });
    }
}

// Initialize calendar when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PuppyCalendar();
});