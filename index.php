<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Find the perfect AI tool for your needs - Free quiz to discover the best AI software">
    <meta name="keywords" content="AI tools, artificial intelligence, ChatGPT, Midjourney, AI quiz, AI recommendations">
    <title>AI Tool Finder - Discover Your Perfect AI Assistant</title>
    
    
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>

    <!-- Header with Ad Space -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <h1>🤖 AI Tool Finder</h1>
            </div>
            <!-- Top Banner Ad -->
        </div>
    </header>

    <!-- Main Quiz Container -->
    <main class="quiz-container">
        <div class="container">
            <!-- Progress Bar -->
            <div class="progress-wrapper" id="progressWrapper" style="display: none;">
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <p class="progress-text" id="progressText">Step 1 of 2</p>
            </div>

            <!-- Quiz Content -->
            <div class="quiz-content" id="quizContent">
                <!-- Welcome Screen -->
                <div class="quiz-step active" id="welcomeScreen">
                    <div class="welcome-content">
                        <h2 class="quiz-title" data-i18n="welcome.title">Find Your Perfect AI Tool</h2>
                        <p class="quiz-subtitle" data-i18n="welcome.subtitle">Answer 2 quick questions and discover the best AI tools for your needs</p>
                        
                        <div class="welcome-features">
                            <div class="feature-item">
                                <span class="feature-icon">⚡</span>
                                <span data-i18n="welcome.feature1">Quick & Easy</span>
                            </div>
                            <div class="feature-item">
                                <span class="feature-icon">🆓</span>
                                <span data-i18n="welcome.feature2">Free & Paid Options</span>
                            </div>
                            <div class="feature-item">
                                <span class="feature-icon">🎯</span>
                                <span data-i18n="welcome.feature3">Personalized Results</span>
                            </div>
                        </div>

                        <button class="btn btn-primary btn-large" onclick="startQuiz()" data-i18n="welcome.start">
                            Start Quiz
                        </button>
                    </div>

                    <!-- Ad Space Below Welcome -->
                </div>

                <!-- Step 1: Category Selection -->
                <div class="quiz-step" id="step1">
                    <h2 class="quiz-title" data-i18n="step1.title">What do you want to use AI for?</h2>
                    <p class="quiz-subtitle" data-i18n="step1.subtitle">Choose your main objective</p>
                    
                    <div class="options-grid" id="categoryOptions">
                        <!-- Options will be populated by JavaScript -->
                    </div>

                    <!-- Ad Space Between Steps -->
                </div>

                <!-- Step 2: Pricing Preference -->
                <div class="quiz-step" id="step2">
                    <h2 class="quiz-title" data-i18n="step2.title">What's your budget preference?</h2>
                    <p class="quiz-subtitle" data-i18n="step2.subtitle">Choose your preferred pricing model</p>
                    
                    <div class="options-grid" id="pricingOptions">
                        <!-- Options will be populated by JavaScript -->
                    </div>

                    <button class="btn btn-secondary" onclick="previousStep()" data-i18n="common.back">
                        ← Back
                    </button>
                    
                    <!-- Ad Space After Step 2 -->
                </div>

                <!-- Results Screen -->
                <div class="quiz-step" id="resultsScreen">
                    <h2 class="quiz-title" data-i18n="results.title">Your Recommended AI Tools</h2>
                    <p class="quiz-subtitle" data-i18n="results.subtitle">Based on your preferences, here are the best tools for you</p>
                    
                    <!-- Ad Space Before Results -->

                    <div class="results-container" id="resultsContainer">
                        <!-- Results will be populated by JavaScript -->
                    </div>

                    <div class="results-actions">
                        <button class="btn btn-secondary" onclick="restartQuiz()" data-i18n="results.restart">
                            🔄 Take Quiz Again
                        </button>
                    </div>

                    <!-- Ad Space After Results -->
                </div>
            </div>
        </div>
    </main>

    <!-- Sidebar Ad (Desktop) -->
    <aside class="sidebar-ad">
    </aside>

    <!-- Tool Info Modal -->
    <div class="modal-overlay" id="toolModal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeToolModal()">&times;</button>
            
            <div class="modal-header">
                <div class="modal-tool-icon">🤖</div>
                <h2 class="modal-tool-name" id="modalToolName"></h2>
                <span class="modal-tool-badge" id="modalToolBadge"></span>
            </div>
            
            <div class="modal-body">
                <div class="modal-section">
                    <h3 data-i18n="modal.about">About this tool</h3>
                    <p class="modal-description" id="modalDescription"></p>
                </div>
                
                <div class="modal-section">
                    <h3 data-i18n="modal.key_features">Key Features</h3>
                    <ul class="modal-features" id="modalFeatures">
                        <!-- Features will be dynamically inserted -->
                    </ul>
                </div>
                
                <div class="modal-section">
                    <h3 data-i18n="modal.stats">Stats & Info</h3>
                    <div class="modal-stats">
                        <div class="modal-stat" id="modalRank">
                            <span class="stat-icon">🏆</span>
                            <span class="stat-label" data-i18n="modal.global_rank">Global Rank</span>
                            <span class="stat-value" id="modalRankValue"></span>
                        </div>
                        <div class="modal-stat" id="modalTraffic">
                            <span class="stat-icon">📊</span>
                            <span class="stat-label" data-i18n="modal.monthly_traffic">Monthly Traffic</span>
                            <span class="stat-value" id="modalTrafficValue"></span>
                        </div>
                        <div class="modal-stat" id="modalPrice">
                            <span class="stat-icon">💰</span>
                            <span class="stat-label" data-i18n="modal.pricing">Pricing</span>
                            <span class="stat-value" id="modalPriceValue"></span>
                        </div>
                    </div>
                </div>
                
                <div class="modal-section">
                    <h3 data-i18n="modal.user_reviews">User Reviews</h3>
                    <div class="modal-reviews">
                        <div class="review-summary">
                            <div class="review-stars" id="modalStars">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <p class="review-text" id="modalReviewText"></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="modal-btn modal-btn-secondary" onclick="closeToolModal()" data-i18n="modal.close">Close</button>
                <a class="modal-btn modal-btn-primary" id="modalVisitBtn" href="#" target="_blank" rel="noopener noreferrer">
                    <span data-i18n="modal.visit_website">Visit Website</span> →
                </a>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 AI Tool Finder. All rights reserved.</p>
            <div class="language-selector">
                <button onclick="changeLanguage('en')" class="lang-btn" data-lang="en">🇺🇸 EN</button>
                <button onclick="changeLanguage('pt')" class="lang-btn" data-lang="pt">🇧🇷 PT</button>
                <button onclick="changeLanguage('es')" class="lang-btn" data-lang="es">🇪🇸 ES</button>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="assets/js/i18n.js"></script>
    <script src="assets/js/data.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>
