// AI Tools Database - 150+ Tools Ranked by Popularity
// Data sources: FlexOS Top 100, RankmyAI, Toolify, Market Research 2025

const aiToolsDatabase = [
    // === ASSISTANT / CHATBOT (10 tools) ===
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        category: 'assistant',
        description: {
            en: 'Most popular AI chatbot with 4B+ monthly visits. Supports text, voice, image input, code execution, and custom GPTs.',
            pt: 'Chatbot de IA mais popular com +4B de visitas mensais. Suporta texto, voz, entrada de imagem, execução de código e GPTs personalizados.',
            es: 'Chatbot de IA más popular con +4B de visitas mensuales. Soporta texto, voz, entrada de imagen, ejecución de código y GPTs personalizados.'
        },
        free: true,
        paid: true,
        price: '$20/month',
        url: 'https://chat.openai.com',
        rank: 1,
        traffic: '4024M'
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        category: 'assistant',
        description: {
            en: 'Free AI chatbot growing +88% in 2025. Offers advanced conversational AI with 815M monthly visits.',
            pt: 'Chatbot de IA gratuito crescendo +88% em 2025. Oferece IA conversacional avançada com 815M de visitas mensais.',
            es: 'Chatbot de IA gratuito creciendo +88% en 2025. Ofrece IA conversacional avanzada con 815M de visitas mensuales.'
        },
        free: true,
        paid: false,
        price: 'Free',
        url: 'https://chat.deepseek.com',
        rank: 2,
        traffic: '815M'
    },
    {
        id: 'gemini',
        name: 'Google Gemini',
        category: 'assistant',
        description: {
            en: 'Google\'s multimodal AI assistant. Integrates with Google Workspace for productivity and research.',
            pt: 'Assistente de IA multimodal do Google. Integra-se com Google Workspace para produtividade e pesquisa.',
            es: 'Asistente de IA multimodal de Google. Se integra con Google Workspace para productividad e investigación.'
        },
        free: true,
        paid: true,
        price: '$19.99/month',
        url: 'https://gemini.google.com',
        rank: 5,
        traffic: '294M'
    },
    {
        id: 'claude',
        name: 'Claude',
        category: 'assistant',
        description: {
            en: 'Anthropic\'s AI with low hallucination rates and 200K token context. Ideal for document analysis and coding.',
            pt: 'IA da Anthropic com baixas taxas de alucinação e contexto de 200K tokens. Ideal para análise de documentos e programação.',
            es: 'IA de Anthropic con bajas tasas de alucinación y contexto de 200K tokens. Ideal para análisis de documentos y programación.'
        },
        free: true,
        paid: true,
        price: '$20/month',
        url: 'https://claude.ai',
        rank: 9,
        traffic: '73M'
    },
    {
        id: 'copilot',
        name: 'Microsoft Copilot',
        category: 'assistant',
        description: {
            en: 'Microsoft\'s AI assistant integrated with Bing, Office 365, and Windows. 67M monthly visits.',
            pt: 'Assistente de IA da Microsoft integrado com Bing, Office 365 e Windows. 67M de visitas mensais.',
            es: 'Asistente de IA de Microsoft integrado con Bing, Office 365 y Windows. 67M de visitas mensuales.'
        },
        free: true,
        paid: true,
        price: '$20/month',
        url: 'https://copilot.microsoft.com',
        rank: 8,
        traffic: '67M'
    },
    {
        id: 'poe',
        name: 'Poe',
        category: 'assistant',
        description: {
            en: 'Access multiple AI chatbots (GPT-4, Claude, Gemini) in one platform. 22M monthly visits.',
            pt: 'Acesse múltiplos chatbots de IA (GPT-4, Claude, Gemini) em uma plataforma. 22M de visitas mensais.',
            es: 'Accede a múltiples chatbots de IA (GPT-4, Claude, Gemini) en una plataforma. 22M de visitas mensuales.'
        },
        free: true,
        paid: true,
        price: '$19.99/month',
        url: 'https://poe.com',
        rank: 19,
        traffic: '22M'
    },
    {
        id: 'grok',
        name: 'Grok',
        category: 'assistant',
        description: {
            en: 'X/Twitter\'s AI chatbot with real-time information and state-of-the-art reasoning capabilities.',
            pt: 'Chatbot de IA do X/Twitter com informações em tempo real e capacidades de raciocínio de ponta.',
            es: 'Chatbot de IA de X/Twitter con información en tiempo real y capacidades de razonamiento de vanguardia.'
        },
        free: true,
        paid: true,
        price: '$16/month',
        url: 'https://x.com',
        rank: 20,
        traffic: 'N/A'
    },
    {
        id: 'mistral',
        name: 'Mistral Le Chat',
        category: 'assistant',
        description: {
            en: 'European AI chatbot with strong privacy focus. Growing +53 positions in 2025 rankings.',
            pt: 'Chatbot de IA europeu com forte foco em privacidade. Crescendo +53 posições nos rankings de 2025.',
            es: 'Chatbot de IA europeo con fuerte enfoque en privacidad. Creciendo +53 posiciones en rankings de 2025.'
        },
        free: true,
        paid: false,
        price: 'Free',
        url: 'https://chat.mistral.ai',
        rank: 23,
        traffic: '10M'
    },
    {
        id: 'you',
        name: 'You.com',
        category: 'assistant',
        description: {
            en: 'AI search engine with chatbot integration. Combines web search with conversational AI.',
            pt: 'Motor de busca com IA e integração de chatbot. Combina busca na web com IA conversacional.',
            es: 'Motor de búsqueda con IA e integración de chatbot. Combina búsqueda web con IA conversacional.'
        },
        free: true,
        paid: true,
        price: '$15/month',
        url: 'https://you.com',
        rank: 32,
        traffic: '6M'
    },
    {
        id: 'pi',
        name: 'Pi AI',
        category: 'assistant',
        description: {
            en: 'Personal AI assistant focused on empathetic conversations and emotional support.',
            pt: 'Assistente de IA pessoal focado em conversas empáticas e suporte emocional.',
            es: 'Asistente de IA personal enfocado en conversaciones empáticas y apoyo emocional.'
        },
        free: true,
        paid: false,
        price: 'Free',
        url: 'https://pi.ai',
        rank: 110,
        traffic: '2M'
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = aiToolsDatabase;
}
