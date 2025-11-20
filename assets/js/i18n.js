// Internationalization System
const i18n = {
    currentLang: 'en',
    translations: {},
    
    // Initialize i18n system
    async init() {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        let detectedLang = 'en'; // Default to English
        
        // Check if browser language matches supported languages
        if (browserLang.startsWith('pt')) {
            detectedLang = 'pt';
        } else if (browserLang.startsWith('es')) {
            detectedLang = 'es';
        }
        
        // Check if language is stored in localStorage
        const storedLang = localStorage.getItem('preferredLanguage');
        if (storedLang && ['en', 'pt', 'es'].includes(storedLang)) {
            detectedLang = storedLang;
        }
        
        // Load the detected language
        await this.loadLanguage(detectedLang);
        
        // Update active language button
        this.updateLanguageButtons();
    },
    
    // Load language file
    async loadLanguage(lang) {
        try {
            const response = await fetch(`lang/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language: ${lang}`);
            }
            this.translations = await response.json();
            this.currentLang = lang;
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            // Save preference
            localStorage.setItem('preferredLanguage', lang);
            
            // Translate all elements
            this.translatePage();
            
            return true;
        } catch (error) {
            console.error('Error loading language:', error);
            
            // Fallback to English if current language fails
            if (lang !== 'en') {
                console.log('Falling back to English');
                return await this.loadLanguage('en');
            }
            return false;
        }
    },
    
    // Get translation by key
    t(key) {
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }
        
        return value;
    },
    
    // Translate with variables
    tVar(key, variables) {
        let text = this.t(key);
        
        if (typeof text === 'string' && variables) {
            Object.keys(variables).forEach(varKey => {
                const placeholder = `{{${varKey}}}`;
                text = text.replace(placeholder, variables[varKey]);
            });
        }
        
        return text;
    },
    
    // Translate all elements on the page
    translatePage() {
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (translation && typeof translation === 'string') {
                // Check if element has placeholder attribute
                if (element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Translate elements with data-i18n-html attribute (for HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = this.t(key);
            
            if (translation && typeof translation === 'string') {
                element.innerHTML = translation;
            }
        });
    },
    
    // Update language button states
    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
};

// Change language function (called from HTML)
async function changeLanguage(lang) {
    await i18n.loadLanguage(lang);
    i18n.updateLanguageButtons();
    
    // Re-render quiz if it's active
    if (window.quizApp && window.quizApp.currentStep) {
        window.quizApp.renderCurrentStep();
    }
}

// Initialize i18n when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
