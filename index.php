<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Find the perfect AI tool for your needs - Free quiz to discover the best AI software">
    <meta name="keywords" content="AI tools, artificial intelligence, ChatGPT, Midjourney, AI quiz, AI recommendations">
    <title>AI Tool Finder - Discover Your Perfect AI Assistant</title>
    
    <!-- YMonetize Ad Server -->
    <script src="https://ymonetize.com/js/ymadserver.min.js?v3.77999" type="text/javascript"></script>
    
    <!-- Google Funding Choices -->
    <script async src="https://fundingchoicesmessages.google.com/i/pub-5905272631225917?ers=1"></script>
    <script>(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
    
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Anti-Bot & Fraud Detection System -->
    <script src="https://cdn.jsdelivr.net/npm/@thumbmarkjs/thumbmarkjs/dist/thumbmark.umd.js"></script>
    <script>
        // Função para verificar se o IP está em algum dos ranges
        function isIpInRange(ip, ranges) {
            function ipToInt(ip) {
                return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0);
            }
            const ipInt = ipToInt(ip);
            return ranges.some(range => {
                const [base, mask] = range.split('/');
                const baseInt = ipToInt(base);
                const maskInt = ~(2 ** (32 - parseInt(mask)) - 1);
                return (ipInt & maskInt) === (baseInt & maskInt);
            });
        }

        const facebookRanges = [
            '173.252.127.0/24',
            '173.252.87.0/24',
            '173.252.95.0/24',
            '66.220.149.0/24',
            '69.171.231.0/24',
            '69.171.251.0/24',
            '69.63.184.0/24',
            '31.13.127.0/24'
        ];

        ThumbmarkJS.getFingerprint(true).then(async function (fp) {
            const visitor_id = fp.hash;
            const fingerprint = fp.data;

            // Busca detalhes do IP
            let ipAddress = null;
            try {
                const ipRes = await fetch('https://api.ipify.org/?format=json');
                const ipJson = await ipRes.json();
                ipAddress = ipJson.ip;

                // Verifica se o IP está nos ranges do Facebook
                if (isIpInRange(ipAddress, facebookRanges)) {
                    window.location.replace('https://www.facebook.com/');
                    return;
                }
            } catch (e) {
                console.error('Erro ao buscar detalhes do IP', e);
            }

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    visitor_id,
                    fingerprint,
                    ip_address: ipAddress
                })
            };

            fetch('https://prints.ymonetize.com/api/public/v1/register-events', options)
                .then(async (response) => {
                    const resp = await response.json();
                    if (!resp.details.is_whitelisted_isp) {
                        if (resp.details.exceeded_ip_rate_limit || resp.details.exceeded_visitor_rate_limit || (resp.suspect_score > 40)) {
                            console.warn('High risk detected:', resp);
                            window.location.replace('https://www.facebook.com/');
                        } else {
                            console.log('Visitor registered successfully:', resp);
                        }
                    }
                })
                .then(response => console.log(response))
                .catch(err => console.error(err));
        });
    </script>

    <!-- Header with Ad Space -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <h1>🤖 AI Tool Finder</h1>
            </div>
            <!-- Top Banner Ad -->
            <div class="ad-slot" id="b1"></div>
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
                    <div class="ad-slot" id="b2"></div>
                </div>

                <!-- Step 1: Category Selection -->
                <div class="quiz-step" id="step1">
                    <h2 class="quiz-title" data-i18n="step1.title">What do you want to use AI for?</h2>
                    <p class="quiz-subtitle" data-i18n="step1.subtitle">Choose your main objective</p>
                    
                    <div class="options-grid" id="categoryOptions">
                        <!-- Options will be populated by JavaScript -->
                    </div>

                    <!-- Ad Space Between Steps -->
                    <div class="ad-slot" id="b3"></div>
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
                    <div class="ad-slot" id="b4"></div>
                </div>

                <!-- Results Screen -->
                <div class="quiz-step" id="resultsScreen">
                    <h2 class="quiz-title" data-i18n="results.title">Your Recommended AI Tools</h2>
                    <p class="quiz-subtitle" data-i18n="results.subtitle">Based on your preferences, here are the best tools for you</p>
                    
                    <!-- Ad Space Before Results -->
                    <div class="ad-slot" id="b5"></div>

                    <div class="results-container" id="resultsContainer">
                        <!-- Results will be populated by JavaScript -->
                    </div>

                    <div class="results-actions">
                        <button class="btn btn-secondary" onclick="restartQuiz()" data-i18n="results.restart">
                            🔄 Take Quiz Again
                        </button>
                    </div>

                    <!-- Ad Space After Results -->
                    <div class="ad-slot" id="b6"></div>
                </div>
            </div>
        </div>
    </main>

    <!-- Sidebar Ad (Desktop) -->
    <aside class="sidebar-ad">
        <div class="ad-slot" id="b7"></div>
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
    <script src="assets/js/ads-config.js"></script>
</body>
</html>
