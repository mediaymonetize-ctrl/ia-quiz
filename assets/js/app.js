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
                <button class="tool-link" onclick="openToolModal('${tool.id}')">
                    ${i18n.t('results.learn_more')} →
                </button>
            `;
            
            container.appendChild(card);
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


// Modal Functions
function openToolModal(toolId) {
    const tool = aiToolsDatabase.find(t => t.id === toolId);
    if (!tool) return;
    
    const lang = i18n.currentLang;
    const modal = document.getElementById('toolModal');
    
    // Populate modal content
    document.getElementById('modalToolName').textContent = tool.name;
    document.getElementById('modalDescription').textContent = tool.description[lang];
    
    // Badge
    const badge = document.getElementById('modalToolBadge');
    badge.className = 'modal-tool-badge';
    if (tool.pricing === 'free') {
        badge.className += ' badge-free';
        badge.textContent = 'FREE';
    } else if (tool.pricing === 'freemium') {
        badge.className += ' badge-freemium';
        badge.textContent = 'FREEMIUM';
    } else {
        badge.className += ' badge-paid';
        badge.textContent = 'PAID';
    }
    
    // Features
    const features = getToolFeatures(tool, lang);
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = features.map(f => `<li>${f}</li>`).join('');
    
    // Stats
    document.getElementById('modalRankValue').textContent = tool.rank > 0 ? `#${tool.rank}` : 'N/A';
    document.getElementById('modalTrafficValue').textContent = tool.traffic || 'N/A';
    document.getElementById('modalPriceValue').textContent = tool.price || (tool.pricing === 'free' ? 'Free' : 'Varies');
    
    // Reviews
    const review = getToolReview(tool, lang);
    document.getElementById('modalReviewText').textContent = review;
    
    // Visit button
    document.getElementById('modalVisitBtn').href = tool.url;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeToolModal() {
    const modal = document.getElementById('toolModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('toolModal');
    if (e.target === modal) {
        closeToolModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeToolModal();
    }
});

// Get tool features based on category
function getToolFeatures(tool, lang) {
    const categoryFeatures = {
        'assistant': {
            'en': [
                'Natural language conversations',
                'Context-aware responses',
                'Multi-turn dialogue support',
                'Knowledge base integration'
            ],
            'pt': [
                'Conversas em linguagem natural',
                'Respostas contextualizadas',
                'Suporte a diálogos múltiplos',
                'Integração com base de conhecimento'
            ],
            'es': [
                'Conversaciones en lenguaje natural',
                'Respuestas contextuales',
                'Soporte de diálogo múltiple',
                'Integración de base de conocimientos'
            ]
        },
        'programming': {
            'en': [
                'Code generation and completion',
                'Multi-language support',
                'Bug detection and fixes',
                'Code explanation and documentation'
            ],
            'pt': [
                'Geração e completação de código',
                'Suporte multi-linguagem',
                'Detecção e correção de bugs',
                'Explicação e documentação de código'
            ],
            'es': [
                'Generación y completación de código',
                'Soporte multi-idioma',
                'Detección y corrección de errores',
                'Explicación y documentación de código'
            ]
        },
        'writing': {
            'en': [
                'Grammar and spelling check',
                'Style and tone suggestions',
                'Content generation',
                'Plagiarism detection'
            ],
            'pt': [
                'Verificação gramatical e ortográfica',
                'Sugestões de estilo e tom',
                'Geração de conteúdo',
                'Detecção de plágio'
            ],
            'es': [
                'Verificación gramatical y ortográfica',
                'Sugerencias de estilo y tono',
                'Generación de contenido',
                'Detección de plagio'
            ]
        },
        'design': {
            'en': [
                'AI-powered image generation',
                'Style transfer and editing',
                'High-resolution output',
                'Multiple format support'
            ],
            'pt': [
                'Geração de imagens com IA',
                'Transferência e edição de estilo',
                'Saída em alta resolução',
                'Suporte a múltiplos formatos'
            ],
            'es': [
                'Generación de imágenes con IA',
                'Transferencia y edición de estilo',
                'Salida de alta resolución',
                'Soporte de múltiples formatos'
            ]
        },
        'video': {
            'en': [
                'AI video generation',
                'Automated editing',
                'Text-to-video conversion',
                'Effects and transitions'
            ],
            'pt': [
                'Geração de vídeo com IA',
                'Edição automatizada',
                'Conversão texto para vídeo',
                'Efeitos e transições'
            ],
            'es': [
                'Generación de video con IA',
                'Edición automatizada',
                'Conversión de texto a video',
                'Efectos y transiciones'
            ]
        },
        'audio': {
            'en': [
                'AI voice synthesis',
                'Music generation',
                'Audio enhancement',
                'Multiple voice options'
            ],
            'pt': [
                'Síntese de voz com IA',
                'Geração de música',
                'Aprimoramento de áudio',
                'Múltiplas opções de voz'
            ],
            'es': [
                'Síntesis de voz con IA',
                'Generación de música',
                'Mejora de audio',
                'Múltiples opciones de voz'
            ]
        },
        'productivity': {
            'en': [
                'Task automation',
                'Workflow optimization',
                'Team collaboration',
                'Integration with popular tools'
            ],
            'pt': [
                'Automação de tarefas',
                'Otimização de fluxo de trabalho',
                'Colaboração em equipe',
                'Integração com ferramentas populares'
            ],
            'es': [
                'Automatización de tareas',
                'Optimización del flujo de trabajo',
                'Colaboración en equipo',
                'Integración con herramientas populares'
            ]
        },
        'research': {
            'en': [
                'AI-powered search',
                'Source citation',
                'Summary generation',
                'Real-time information'
            ],
            'pt': [
                'Busca com IA',
                'Citação de fontes',
                'Geração de resumos',
                'Informações em tempo real'
            ],
            'es': [
                'Búsqueda con IA',
                'Citación de fuentes',
                'Generación de resúmenes',
                'Información en tiempo real'
            ]
        },
        'marketing': {
            'en': [
                'Content creation',
                'SEO optimization',
                'Social media management',
                'Analytics and insights'
            ],
            'pt': [
                'Criação de conteúdo',
                'Otimização SEO',
                'Gestão de redes sociais',
                'Análises e insights'
            ],
            'es': [
                'Creación de contenido',
                'Optimización SEO',
                'Gestión de redes sociales',
                'Análisis e insights'
            ]
        },
        'translation': {
            'en': [
                'Neural machine translation',
                'Multiple language support',
                'Context-aware translation',
                'Document translation'
            ],
            'pt': [
                'Tradução automática neural',
                'Suporte a múltiplos idiomas',
                'Tradução contextual',
                'Tradução de documentos'
            ],
            'es': [
                'Traducción automática neural',
                'Soporte de múltiples idiomas',
                'Traducción contextual',
                'Traducción de documentos'
            ]
        }
    };
    
    return categoryFeatures[tool.category]?.[lang] || categoryFeatures['assistant'][lang];
}

// Get tool review based on rank and traffic
function getToolReview(tool, lang) {
    const reviews = {
        'en': {
            'top': 'Highly rated by millions of users worldwide. Industry-leading tool with exceptional performance and reliability.',
            'popular': 'Popular choice among professionals. Consistently delivers quality results with great user experience.',
            'good': 'Well-regarded tool with positive user feedback. Offers solid features and good value for money.',
            'emerging': 'Growing tool with promising features. Users appreciate its innovative approach and ease of use.'
        },
        'pt': {
            'top': 'Altamente avaliado por milhões de usuários em todo o mundo. Ferramenta líder do setor com desempenho e confiabilidade excepcionais.',
            'popular': 'Escolha popular entre profissionais. Entrega consistentemente resultados de qualidade com ótima experiência do usuário.',
            'good': 'Ferramenta bem conceituada com feedback positivo dos usuários. Oferece recursos sólidos e bom custo-benefício.',
            'emerging': 'Ferramenta em crescimento com recursos promissores. Usuários apreciam sua abordagem inovadora e facilidade de uso.'
        },
        'es': {
            'top': 'Altamente calificado por millones de usuarios en todo el mundo. Herramienta líder en la industria con rendimiento y confiabilidad excepcionales.',
            'popular': 'Elección popular entre profesionales. Ofrece consistentemente resultados de calidad con gran experiencia de usuario.',
            'good': 'Herramienta bien considerada con comentarios positivos de los usuarios. Ofrece características sólidas y buena relación calidad-precio.',
            'emerging': 'Herramienta en crecimiento con características prometedoras. Los usuarios aprecian su enfoque innovador y facilidad de uso.'
        }
    };
    
    let category = 'emerging';
    if (tool.rank > 0 && tool.rank <= 20) {
        category = 'top';
    } else if (tool.rank > 20 && tool.rank <= 50) {
        category = 'popular';
    } else if (tool.rank > 50 || quizApp.parseTraffic(tool.traffic) > 5000000) {
        category = 'good';
    }
    
    return reviews[lang][category];
}
