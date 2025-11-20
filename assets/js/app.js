// Quiz Application - Single Page Application
const quizApp = {
    currentStep: 'welcome',
    selectedCategory: null,
    selectedPricing: null,
    totalSteps: 2,
    
    // Initialize the application
    init() {
        console.log('Quiz App Initialized');
        window.quizApp = this; // Make available globally for i18n
    },
    
    // Render current step
    renderCurrentStep() {
        switch(this.currentStep) {
            case 'welcome':
                this.showStep('welcomeScreen');
                this.hideProgress();
                break;
            case 'step1':
                this.renderStep1();
                this.showStep('step1');
                this.updateProgress(1);
                break;
            case 'step2':
                this.renderStep2();
                this.showStep('step2');
                this.updateProgress(2);
                break;
            case 'results':
                this.renderResults();
                this.showStep('resultsScreen');
                this.hideProgress();
                break;
        }
    },
    
    // Show specific step
    showStep(stepId) {
        // Hide all steps
        document.querySelectorAll('.quiz-step').forEach(step => {
            step.classList.remove('active');
        });
        
        // Show target step
        const targetStep = document.getElementById(stepId);
        if (targetStep) {
            targetStep.classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
    
    // Update progress bar
    updateProgress(step) {
        const progressWrapper = document.getElementById('progressWrapper');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressWrapper && progressFill && progressText) {
            const percentage = (step / this.totalSteps) * 100;
            progressFill.style.width = `${percentage}%`;
            
            // Use i18n for progress text
            const text = i18n.tVar('progress.step', {
                current: step,
                total: this.totalSteps
            });
            progressText.textContent = text;
        }
    },
    
    // Show progress bar
    showProgress() {
        const progressWrapper = document.getElementById('progressWrapper');
        if (progressWrapper) {
            progressWrapper.style.display = 'block';
        }
    },
    
    // Hide progress bar
    hideProgress() {
        const progressWrapper = document.getElementById('progressWrapper');
        if (progressWrapper) {
            progressWrapper.style.display = 'none';
        }
    },
    
    // Render Step 1: Category Selection
    renderStep1() {
        const container = document.getElementById('categoryOptions');
        if (!container) return;
        
        container.innerHTML = '';
        
        Object.keys(categories).forEach(categoryKey => {
            const category = categories[categoryKey];
            const lang = i18n.currentLang;
            
            const card = document.createElement('div');
            card.className = 'option-card';
            card.onclick = () => this.selectCategory(categoryKey);
            
            card.innerHTML = `
                <span class="option-icon">${category.icon}</span>
                <h3 class="option-title">${category.name[lang]}</h3>
                <p class="option-description">${category.description[lang]}</p>
            `;
            
            container.appendChild(card);
        });
    },
    
    // Render Step 2: Pricing Preference
    renderStep2() {
        const container = document.getElementById('pricingOptions');
        if (!container) return;
        
        container.innerHTML = '';
        
        Object.keys(pricingOptions).forEach(pricingKey => {
            const pricing = pricingOptions[pricingKey];
            const lang = i18n.currentLang;
            
            const card = document.createElement('div');
            card.className = 'option-card';
            card.onclick = () => this.selectPricing(pricingKey);
            
            card.innerHTML = `
                <span class="option-icon">${pricing.icon}</span>
                <h3 class="option-title">${pricing.name[lang]}</h3>
                <p class="option-description">${pricing.description[lang]}</p>
            `;
            
            container.appendChild(card);
        });
    },
    
    // Select category and move to next step
    selectCategory(category) {
        this.selectedCategory = category;
        this.currentStep = 'step2';
        this.renderCurrentStep();
        
        // Track event (for analytics)
        console.log('Category selected:', category);
    },
    
    // Select pricing and show results
    selectPricing(pricing) {
        this.selectedPricing = pricing;
        this.currentStep = 'results';
        this.renderCurrentStep();
        
        // Track event (for analytics)
        console.log('Pricing selected:', pricing);
    },
    
    // Render Results
    renderResults() {
        const container = document.getElementById('resultsContainer');
        if (!container) return;
        
        // Step 1: Filter tools based on category and pricing
        let filteredTools = aiToolsDatabase.filter(tool => {
            // Filter by category
            if (tool.category !== this.selectedCategory) {
                return false;
            }
            
            // Filter by pricing preference
            if (this.selectedPricing === 'free') {
                return tool.free && tool.pricing === 'free';
            } else if (this.selectedPricing === 'freemium') {
                return tool.pricing === 'freemium';
            } else if (this.selectedPricing === 'paid') {
                return tool.paid;
            }
            // 'all' - show everything
            return true;
        });
        
        // Step 2: Remove duplicates by ID (using Set for O(1) lookup)
        const seenIds = new Set();
        filteredTools = filteredTools.filter(tool => {
            if (seenIds.has(tool.id)) {
                return false; // Skip duplicate
            }
            seenIds.add(tool.id);
            return true;
        });
        
        // Step 3: Sort by rank (lower is better) and traffic
        filteredTools.sort((a, b) => {
            // Prioritize tools with rank
            const aHasRank = a.rank && a.rank > 0;
            const bHasRank = b.rank && b.rank > 0;
            
            if (aHasRank && !bHasRank) return -1;
            if (!aHasRank && bHasRank) return 1;
            
            // Both have rank - compare
            if (aHasRank && bHasRank) {
                return a.rank - b.rank;
            }
            
            // Neither has rank - sort by traffic
            const aTraffic = this.parseTraffic(a.traffic);
            const bTraffic = this.parseTraffic(b.traffic);
            return bTraffic - aTraffic; // Higher traffic first
        });
        
        // Step 4: Limit to top 15 results (increased from 6)
        const maxResults = 15;
        filteredTools = filteredTools.slice(0, maxResults);
        
        // Clear container
        container.innerHTML = '';
        
        // Check if we have results
        if (filteredTools.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <p>${i18n.t('results.no_results') || 'No tools found for your selection. Try different options.'}</p>
                </div>
            `;
            return;
        }
        
        // Render each tool
        const lang = i18n.currentLang;
        filteredTools.forEach((tool, index) => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            
            // Determine badge
            let badgeClass = 'badge-freemium';
            let badgeText = i18n.t('results.free_plan');
            
            if (tool.pricing === 'free') {
                badgeClass = 'badge-free';
                badgeText = 'Free';
            } else if (tool.pricing === 'paid') {
                badgeClass = 'badge-paid';
                badgeText = i18n.t('results.paid_plan');
            }
            
            card.innerHTML = `
                <div class="tool-header">
                    <div class="tool-info">
                        <h3>${tool.name}</h3>
                        <span class="tool-badge ${badgeClass}">${badgeText}</span>
                    </div>
                    ${tool.rank > 0 ? `<div class="tool-rank">#${tool.rank}</div>` : ''}
                </div>
                <p class="tool-description">${tool.description[lang]}</p>
                <div class="tool-stats">
                    ${tool.traffic !== 'N/A' ? `<span>📊 ${tool.traffic}</span>` : ''}
                    ${tool.price ? `<span>💰 ${tool.price}</span>` : ''}
                </div>
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    ${i18n.t('results.visit')} →
                </a>
            `;
            
            container.appendChild(card);
            
            // Add native ads strategically among results (after positions 2, 5, 8, 11)
            if (index === 1) { // After 2nd tool
                const adSpace = document.createElement('div');
                adSpace.className = 'ad-slot';
                adSpace.id = 'b8';
                adSpace.style.gridColumn = 'span 1';
                container.appendChild(adSpace);
                
                if (typeof window.reinitializeAds === 'function') {
                    setTimeout(() => window.reinitializeAds(), 100);
                }
            }
            
            if (index === 4) { // After 5th tool
                const adSpace = document.createElement('div');
                adSpace.className = 'ad-slot';
                adSpace.id = 'b9';
                adSpace.style.gridColumn = 'span 1';
                container.appendChild(adSpace);
                
                if (typeof window.reinitializeAds === 'function') {
                    setTimeout(() => window.reinitializeAds(), 100);
                }
            }
            
            if (index === 7) { // After 8th tool
                const adSpace = document.createElement('div');
                adSpace.className = 'ad-slot';
                adSpace.id = 'b10';
                adSpace.style.gridColumn = 'span 1';
                container.appendChild(adSpace);
                
                if (typeof window.reinitializeAds === 'function') {
                    setTimeout(() => window.reinitializeAds(), 100);
                }
            }
            
            if (index === 10) { // After 11th tool
                const adSpace = document.createElement('div');
                adSpace.className = 'ad-slot';
                adSpace.id = 'b11';
                adSpace.style.gridColumn = 'span 1';
                container.appendChild(adSpace);
                
                if (typeof window.reinitializeAds === 'function') {
                    setTimeout(() => window.reinitializeAds(), 100);
                }
            }
        });
    },
    
    // Helper function to parse traffic string to number for sorting
    parseTraffic(traffic) {
        if (!traffic || traffic === 'N/A') return 0;
        
        // Remove spaces and convert to uppercase
        const cleaned = traffic.replace(/\s/g, '').toUpperCase();
        
        // Extract number and multiplier
        const match = cleaned.match(/([0-9.]+)([KMB]?)/);
        if (!match) return 0;
        
        const num = parseFloat(match[1]);
        const multiplier = match[2];
        
        // Convert to actual number
        switch(multiplier) {
            case 'K': return num * 1000;
            case 'M': return num * 1000000;
            case 'B': return num * 1000000000;
            default: return num;
        }
    }
};

// Global functions called from HTML
function startQuiz() {
    quizApp.currentStep = 'step1';
    quizApp.showProgress();
    quizApp.renderCurrentStep();
}

function previousStep() {
    if (quizApp.currentStep === 'step2') {
        quizApp.currentStep = 'step1';
        quizApp.renderCurrentStep();
    }
}

function restartQuiz() {
    quizApp.selectedCategory = null;
    quizApp.selectedPricing = null;
    quizApp.currentStep = 'welcome';
    quizApp.renderCurrentStep();
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    quizApp.init();
});
