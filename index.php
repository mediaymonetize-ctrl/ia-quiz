<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Find the perfect AI tool for your needs - Free quiz to discover the best AI software">
    <meta name="keywords" content="AI tools, artificial intelligence, ChatGPT, Midjourney, AI quiz, AI recommendations">
    <title>AI Tool Finder - Discover Your Perfect AI Assistant</title>
    
    <!-- Google AdSense / ADX -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    
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
            <div class="ad-banner-top" id="ad-banner-top">
                <!-- Google ADX Ad Unit -->
            </div>
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
                    <div class="ad-native" id="ad-welcome">
                        <!-- Google ADX Native Ad -->
                    </div>
                </div>

                <!-- Step 1: Category Selection -->
                <div class="quiz-step" id="step1">
                    <h2 class="quiz-title" data-i18n="step1.title">What do you want to use AI for?</h2>
                    <p class="quiz-subtitle" data-i18n="step1.subtitle">Choose your main objective</p>
                    
                    <div class="options-grid" id="categoryOptions">
                        <!-- Options will be populated by JavaScript -->
                    </div>

                    <!-- Ad Space Between Steps -->
                    <div class="ad-native" id="ad-step1">
                        <!-- Google ADX Native Ad -->
                    </div>
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
                </div>

                <!-- Results Screen -->
                <div class="quiz-step" id="resultsScreen">
                    <h2 class="quiz-title" data-i18n="results.title">Your Recommended AI Tools</h2>
                    <p class="quiz-subtitle" data-i18n="results.subtitle">Based on your preferences, here are the best tools for you</p>
                    
                    <!-- Ad Space Before Results -->
                    <div class="ad-banner" id="ad-results-top">
                        <!-- Google ADX Ad Unit -->
                    </div>

                    <div class="results-container" id="resultsContainer">
                        <!-- Results will be populated by JavaScript -->
                    </div>

                    <div class="results-actions">
                        <button class="btn btn-secondary" onclick="restartQuiz()" data-i18n="results.restart">
                            🔄 Take Quiz Again
                        </button>
                    </div>

                    <!-- Ad Space After Results -->
                    <div class="ad-banner" id="ad-results-bottom">
                        <!-- Google ADX Ad Unit -->
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Sidebar Ad (Desktop) -->
    <aside class="sidebar-ad" id="sidebarAd">
        <!-- Google ADX Sidebar Ad -->
    </aside>

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
