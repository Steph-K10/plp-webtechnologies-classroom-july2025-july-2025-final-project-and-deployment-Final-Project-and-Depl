// Dog Personality Quiz
class DogQuiz {
    constructor() {
        this.questions = [
            {
                question: "What's your ideal weekend?",
                options: [
                    { text: "Hiking and outdoor adventures 🏞️", score: { active: 2, outdoor: 2, energetic: 1 } },
                    { text: "Cozy movie marathon at home 🎬", score: { calm: 2, indoor: 2, loyal: 1 } },
                    { text: "Social gathering with friends 🎉", score: { social: 2, playful: 1, friendly: 1 } },
                    { text: "Learning something new 📚", score: { intelligent: 2, calm: 1, focused: 1 } }
                ]
            },
            {
                question: "How do you handle challenges?",
                options: [
                    { text: "Face them head-on with energy 💪", score: { active: 2, confident: 2, energetic: 1 } },
                    { text: "Think carefully and plan 🧠", score: { intelligent: 2, calm: 1, focused: 1 } },
                    { text: "Ask friends for help and support 👥", score: { social: 2, friendly: 1, loyal: 1 } },
                    { text: "Take a relaxed approach and go with the flow 😊", score: { calm: 2, gentle: 1, adaptable: 1 } }
                ]
            },
            {
                question: "What's your social style?",
                options: [
                    { text: "Life of the party - love meeting new people 🎊", score: { social: 2, friendly: 2, energetic: 1 } },
                    { text: "Small circles with close friends ❤️", score: { loyal: 2, calm: 1, gentle: 1 } },
                    { text: "Independent but friendly when approached 👍", score: { independent: 2, calm: 1, intelligent: 1 } },
                    { text: "Reserved but very loyal to a few people 🤝", score: { loyal: 2, calm: 2, protective: 1 } }
                ]
            },
            {
                question: "Choose your energy level:",
                options: [
                    { text: "High energy - always on the go! ⚡", score: { energetic: 2, active: 2, playful: 1 } },
                    { text: "Moderate - active but need rest too 🔄", score: { active: 1, calm: 1, adaptable: 1 } },
                    { text: "Low key - peaceful and relaxed 🌿", score: { calm: 2, gentle: 2, loyal: 1 } },
                    { text: "Bursts of energy followed by calm 🎯", score: { playful: 1, calm: 1, intelligent: 1 } }
                ]
            },
            {
                question: "What's your learning style?",
                options: [
                    { text: "Quick learner, love new challenges 🚀", score: { intelligent: 2, active: 1, energetic: 1 } },
                    { text: "Steady and methodical 📝", score: { focused: 2, calm: 1, loyal: 1 } },
                    { text: "Learn best with others 👥", score: { social: 2, friendly: 1, playful: 1 } },
                    { text: "Take my time, enjoy the process 🕰️", score: { calm: 2, gentle: 1, adaptable: 1 } }
                ]
            },
            {
                question: "How do you show affection?",
                options: [
                    { text: "Big gestures and enthusiastic hugs! 🫂", score: { friendly: 2, social: 1, energetic: 1 } },
                    { text: "Quiet, consistent support and loyalty 💝", score: { loyal: 2, calm: 1, gentle: 1 } },
                    { text: "Playful teasing and fun activities 🎾", score: { playful: 2, friendly: 1, active: 1 } },
                    { text: "Thoughtful words and deep conversations 💬", score: { intelligent: 2, calm: 1, focused: 1 } }
                ]
            },
            {
                question: "What's your ideal living space?",
                options: [
                    { text: "Big yard or near parks - space to run! 🌳", score: { active: 2, outdoor: 2, energetic: 1 } },
                    { text: "Cozy apartment with comfy spots 🏠", score: { calm: 2, indoor: 2, loyal: 1 } },
                    { text: "Social neighborhood with friendly people 🏘️", score: { social: 2, friendly: 1, playful: 1 } },
                    { text: "Quiet area with personal space 🤫", score: { calm: 2, independent: 1, focused: 1 } }
                ]
            },
            {
                question: "How do you handle stress?",
                options: [
                    { text: "Physical activity and movement 🏃‍♂️", score: { active: 2, energetic: 1, playful: 1 } },
                    { text: "Quiet time alone or with close ones 🧘‍♀️", score: { calm: 2, loyal: 1, gentle: 1 } },
                    { text: "Talk it out with friends 🗣️", score: { social: 2, friendly: 1, loyal: 1 } },
                    { text: "Analyze and solve the problem logically 🔍", score: { intelligent: 2, focused: 1, calm: 1 } }
                ]
            },
            {
                question: "What's your communication style?",
                options: [
                    { text: "Expressive and enthusiastic! 🗯️", score: { social: 2, friendly: 1, energetic: 1 } },
                    { text: "Warm and reassuring 🤗", score: { loyal: 2, gentle: 1, calm: 1 } },
                    { text: "Playful and humorous 😄", score: { playful: 2, friendly: 1, social: 1 } },
                    { text: "Thoughtful and precise 💭", score: { intelligent: 2, focused: 1, calm: 1 } }
                ]
            },
            {
                question: "What quality do you value most?",
                options: [
                    { text: "Adventure and excitement 🌟", score: { active: 2, energetic: 1, playful: 1 } },
                    { text: "Loyalty and trust ❤️", score: { loyal: 2, calm: 1, gentle: 1 } },
                    { text: "Friendship and connection 👥", score: { social: 2, friendly: 1, playful: 1 } },
                    { text: "Intelligence and wisdom 🧠", score: { intelligent: 2, focused: 1, calm: 1 } }
                ]
            }
        ];
        
        this.currentQuestion = 0;
        this.scores = {
            active: 0, calm: 0, social: 0, intelligent: 0,
            energetic: 0, loyal: 0, friendly: 0, playful: 0,
            outdoor: 0, indoor: 0, focused: 0, gentle: 0,
            independent: 0, protective: 0, confident: 0, adaptable: 0
        };
        
        this.dogBreeds = [
            {
                name: "Golden Retriever 🐕",
                image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop",
                description: "Friendly, intelligent, and devoted! You're the life of the party and everyone's best friend. You bring joy wherever you go and have a heart full of love for everyone you meet.",
                traits: ["Social Butterfly", "Always Playful", "Extremely Loyal", "Family-Friendly"]
            },
            {
                name: "Border Collie 🐕",
                image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
                description: "Brilliant and energetic! You're always on the move and love mental challenges. You excel at everything you do and need constant stimulation to stay happy.",
                traits: ["Highly Intelligent", "Very Active", "Super Focused", "Quick Learner"]
            },
            {
                name: "French Bulldog 🐶",
                image: "https://images.unsplash.com/photo-1517423447168-cb804aafa6e0?w=400&h=400&fit=crop",
                description: "Charming and adaptable! You're the perfect companion - low maintenance but full of personality. You love comfort and have a great sense of humor.",
                traits: ["Easy-Going", "Great Companion", "Funny", "Adaptable"]
            },
            {
                name: "Siberian Husky 🐺",
                image: "https://images.unsplash.com/photo-1517423738875-5ce310acd3da?w=400&h=400&fit=crop",
                description: "Adventurous and free-spirited! You love exploration and have a wild, independent streak. You're energetic and need plenty of space to roam.",
                traits: ["Very Active", "Independent", "Adventurous", "Vocal"]
            },
            {
                name: "Corgi 🦊",
                image: "https://images.unsplash.com/photo-1612536057832-2ff7ead6ad3e?w=400&h=400&fit=crop",
                description: "Big personality in a small package! You're clever, confident, and always the center of attention. You're playful but also love your comfort.",
                traits: ["Very Smart", "Playful", "Confident", "Alert"]
            },
            {
                name: "Labrador Retriever 🐕",
                image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?w=400&h=400&fit=crop",
                description: "Outgoing and even-tempered! You're the reliable friend everyone can count on. You're athletic but also know how to relax with family.",
                traits: ["Very Friendly", "Athletic", "Trustworthy", "Family-Oriented"]
            },
            {
                name: "Poodle 🦢",
                image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400&h=400&fit=crop",
                description: "Elegant and highly intelligent! You're sophisticated with a keen mind and love learning new things. You're active but also appreciate the finer things.",
                traits: ["Extremely Smart", "Elegant", "Active", "Trainable"]
            },
            {
                name: "Shih Tzu 🦁",
                image: "https://images.unsplash.com/photo-1593705114312-a0ee03a3f7d1?w=400&h=400&fit=crop",
                description: "Affectionate and outgoing! You're a true companion who loves being with people. You're alert, happy, and enjoy the good life.",
                traits: ["Loving", "Alert", "Happy", "Companionable"]
            },
            {
                name: "German Shepherd 🐺",
                image: "https://images.unsplash.com/photo-1615751072497-5f5169febe17?w=400&h=400&fit=crop",
                description: "Confident and courageous! You're a natural leader who's always ready to protect and serve. You're intelligent, loyal, and take your responsibilities seriously.",
                traits: ["Highly Loyal", "Confident", "Intelligent", "Protective"]
            },
            {
                name: "Beagle 🐕",
                image: "https://images.unsplash.com/photo-1558322394-8d0f9e4e0c83?w=400&h=400&fit=crop",
                description: "Curious and merry! You're a true adventurer who loves following scents and exploring. You're friendly, great with kids, and always up for fun.",
                traits: ["Very Curious", "Friendly", "Merry", "Great Nose"]
            }
        ];
        
        this.init();
    }

    init() {
        this.showQuestion(0);
        this.updateProgress();
    }

    showQuestion(index) {
        const quizContainer = document.getElementById('quizContainer');
        const question = this.questions[index];
        
        let questionHTML = `
            <div class="question-card fade-in visible">
                <h3>Question ${index + 1} of 10</h3>
                <h2>${question.question}</h2>
                <div class="options-container">
        `;
        
        question.options.forEach((option, i) => {
            questionHTML += `
                <label class="option">
                    <input type="radio" name="question${index}" value="${i}">
                    <span class="option-text">${option.text}</span>
                </label>
            `;
        });
        
        questionHTML += `</div></div>`;
        quizContainer.innerHTML = questionHTML;
        
        // Add event listeners to options
        this.addOptionListeners();
    }

    addOptionListeners() {
        const options = document.querySelectorAll('.option input');
        options.forEach(option => {
            option.addEventListener('change', (e) => {
                this.handleAnswer(parseInt(e.target.value));
            });
        });
    }

    handleAnswer(optionIndex) {
        const currentQ = this.questions[this.currentQuestion];
        const selectedOption = currentQ.options[optionIndex];
        
        // Update scores
        Object.keys(selectedOption.score).forEach(trait => {
            this.scores[trait] += selectedOption.score[trait];
        });
        
        // Move to next question or show results
        this.currentQuestion++;
        
        if (this.currentQuestion < this.questions.length) {
            setTimeout(() => {
                this.showQuestion(this.currentQuestion);
                this.updateProgress();
            }, 300);
        } else {
            this.showResults();
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const progress = ((this.currentQuestion) / this.questions.length) * 100;
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Question ${this.currentQuestion} of ${this.questions.length}`;
    }

    showResults() {
        const quizContainer = document.getElementById('quizContainer');
        const progressText = document.getElementById('progressText');
        
        // Show loading
        quizContainer.innerHTML = `
            <div class="loading-results">
                <div class="spinner">🐕</div>
                <h3>Analyzing your puppy personality...</h3>
                <p>Finding your perfect dog match! 🎯</p>
            </div>
        `;
        
        progressText.textContent = "Calculating your results...";
        
        setTimeout(() => {
            const result = this.calculateResult();
            quizContainer.innerHTML = `
                <div class="result-card">
                    <h2>🎉 You're a ${result.name}!</h2>
                    <img src="${result.image}" alt="${result.name}" class="result-image" onerror="this.src='https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop'">
                    <p class="result-description">${result.description}</p>
                    <div class="traits">
                        ${result.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
                    </div>
                    <button id="retakeQuiz" class="cta-button">Take Quiz Again 🔄</button>
                </div>
            `;
            
            progressText.textContent = "Quiz Complete! 🎊";
            
            document.getElementById('retakeQuiz').addEventListener('click', () => {
                this.resetQuiz();
            });
            
            // Add some celebration!
            this.createConfetti();
        }, 3000);
    }

    calculateResult() {
        // Calculate dominant traits
        const sortedTraits = Object.entries(this.scores)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 4)
            .map(([trait]) => trait);

        // Simple matching logic - you can make this more sophisticated
        const breedScores = this.dogBreeds.map((breed, index) => {
            let score = 0;
            sortedTraits.forEach(trait => {
                if (breed.traits.some(t => t.toLowerCase().includes(trait))) {
                    score += 2;
                }
            });
            return { breed, score, index };
        });

        // Find highest scoring breed
        const bestMatch = breedScores.sort((a, b) => b.score - a.score)[0];
        return bestMatch.breed;
    }

    createConfetti() {
        const colors = ['#FFB6C1', '#87CEEB', '#98FB98', '#FFD700', '#DDA0DD'];
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 2000);
        }
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.scores = {
            active: 0, calm: 0, social: 0, intelligent: 0,
            energetic: 0, loyal: 0, friendly: 0, playful: 0,
            outdoor: 0, indoor: 0, focused: 0, gentle: 0,
            independent: 0, protective: 0, confident: 0, adaptable: 0
        };
        this.showQuestion(0);
        this.updateProgress();
        
        // Scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new DogQuiz();
});