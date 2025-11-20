// AI Tools Database
const aiToolsDatabase = [
    // ASSISTANT / CHATBOT
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        category: 'assistant',
        pricing: 'freemium',
        url: 'https://chat.openai.com',
        description: {
            en: 'Most popular AI chatbot for conversations, writing, coding, and research',
            pt: 'Chatbot de IA mais popular para conversas, escrita, programação e pesquisa',
            es: 'Chatbot de IA más popular para conversaciones, escritura, programación e investigación'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 1,
        traffic: '321.6M'
    },
    {
        id: 'gemini',
        name: 'Google Gemini',
        category: 'assistant',
        pricing: 'freemium',
        url: 'https://gemini.google.com',
        description: {
            en: 'Google\'s powerful AI assistant with multimodal capabilities',
            pt: 'Assistente de IA poderoso do Google com capacidades multimodais',
            es: 'Asistente de IA potente de Google con capacidades multimodales'
        },
        free: true,
        paid: true,
        price: '$19.99/month',
        rank: 5,
        traffic: '60.8M'
    },
    {
        id: 'claude',
        name: 'Claude',
        category: 'assistant',
        pricing: 'freemium',
        url: 'https://claude.ai',
        description: {
            en: 'AI assistant focused on safety, with excellent reasoning and coding abilities',
            pt: 'Assistente de IA focado em segurança, com excelente raciocínio e habilidades de programação',
            es: 'Asistente de IA enfocado en seguridad, con excelente razonamiento y habilidades de programación'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 14,
        traffic: '6M'
    },
    {
        id: 'perplexity',
        name: 'Perplexity AI',
        category: 'assistant',
        pricing: 'freemium',
        url: 'https://perplexity.ai',
        description: {
            en: 'AI-powered search engine with real-time citations and research features',
            pt: 'Motor de busca com IA com citações em tempo real e recursos de pesquisa',
            es: 'Motor de búsqueda con IA con citas en tiempo real y funciones de investigación'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 10,
        traffic: '10.6M'
    },
    {
        id: 'copilot',
        name: 'Microsoft Copilot',
        category: 'assistant',
        pricing: 'freemium',
        url: 'https://copilot.microsoft.com',
        description: {
            en: 'Microsoft\'s AI assistant integrated with Office and Windows',
            pt: 'Assistente de IA da Microsoft integrado com Office e Windows',
            es: 'Asistente de IA de Microsoft integrado con Office y Windows'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 9,
        traffic: '13.4M'
    },
    {
        id: 'deepseek',
        name: 'DeepSeek',
        category: 'assistant',
        pricing: 'free',
        url: 'https://chat.deepseek.com',
        description: {
            en: 'Free AI chatbot with excellent performance, growing +88% in 2025',
            pt: 'Chatbot de IA gratuito com excelente desempenho, crescendo +88% em 2025',
            es: 'Chatbot de IA gratuito con excelente rendimiento, creciendo +88% en 2025'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 15,
        traffic: '5M'
    },
    {
        id: 'poe',
        name: 'Poe',
        category: 'assistant',
        pricing: 'freemium',
        url: 'https://poe.com',
        description: {
            en: 'Access multiple AI chatbots (GPT-4, Claude, Gemini) in one platform',
            pt: 'Acesse múltiplos chatbots de IA (GPT-4, Claude, Gemini) em uma plataforma',
            es: 'Accede a múltiples chatbots de IA (GPT-4, Claude, Gemini) en una plataforma'
        },
        free: true,
        paid: true,
        price: '$19.99/month',
        rank: 18,
        traffic: '3.5M'
    },
    {
        id: 'you',
        name: 'You.com',
        category: 'assistant',
        pricing: 'freemium',
        url: 'https://you.com',
        description: {
            en: 'AI-powered search engine with chat and research capabilities',
            pt: 'Motor de busca com IA com recursos de chat e pesquisa',
            es: 'Motor de búsqueda con IA con capacidades de chat e investigación'
        },
        free: true,
        paid: true,
        price: '$15/month',
        rank: 22,
        traffic: '2.8M'
    },

    // PROGRAMMING
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        category: 'programming',
        pricing: 'paid',
        url: 'https://github.com/features/copilot',
        description: {
            en: 'AI pair programmer that suggests code completions in your editor',
            pt: 'Programador de IA que sugere completações de código no seu editor',
            es: 'Programador de IA que sugiere completaciones de código en tu editor'
        },
        free: false,
        paid: true,
        price: '$10/month',
        rank: 0,
        traffic: 'N/A'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://cursor.sh',
        description: {
            en: 'AI-first code editor with powerful autocomplete and chat features',
            pt: 'Editor de código com IA com autocompletar poderoso e recursos de chat',
            es: 'Editor de código con IA con autocompletado potente y funciones de chat'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 28,
        traffic: '1.6M'
    },
    {
        id: 'replit',
        name: 'Replit AI',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://replit.com',
        description: {
            en: 'Online IDE with AI coding assistance and instant deployment',
            pt: 'IDE online com assistência de IA para programação e deploy instantâneo',
            es: 'IDE en línea con asistencia de IA para programación y despliegue instantáneo'
        },
        free: true,
        paid: true,
        price: '$7/month',
        rank: 27,
        traffic: '1.8M'
    },
    {
        id: 'codeium',
        name: 'Codeium',
        category: 'programming',
        pricing: 'free',
        url: 'https://codeium.com',
        description: {
            en: 'Free AI code completion and chat, alternative to GitHub Copilot',
            pt: 'Completação de código e chat com IA gratuito, alternativa ao GitHub Copilot',
            es: 'Completación de código y chat con IA gratuito, alternativa a GitHub Copilot'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 30,
        traffic: '1.2M'
    },
    {
        id: 'tabnine',
        name: 'Tabnine',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://tabnine.com',
        description: {
            en: 'AI code completion with privacy-focused on-device processing',
            pt: 'Completação de código com IA focada em privacidade com processamento local',
            es: 'Completación de código con IA enfocada en privacidad con procesamiento local'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 32,
        traffic: '1M'
    },
    {
        id: 'windsurf',
        name: 'Windsurf',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://codeium.com/windsurf',
        description: {
            en: 'New AI-powered code editor with advanced flow state features',
            pt: 'Novo editor de código com IA com recursos avançados de fluxo',
            es: 'Nuevo editor de código con IA con características avanzadas de flujo'
        },
        free: true,
        paid: true,
        price: '$15/month',
        rank: 35,
        traffic: '800K'
    },
    {
        id: 'codewhisperer',
        name: 'Amazon CodeWhisperer',
        category: 'programming',
        pricing: 'free',
        url: 'https://aws.amazon.com/codewhisperer',
        description: {
            en: 'Amazon\'s free AI code generator with AWS integration',
            pt: 'Gerador de código com IA gratuito da Amazon com integração AWS',
            es: 'Generador de código con IA gratuito de Amazon con integración AWS'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 40,
        traffic: '600K'
    },

    // WRITING / COPYWRITING
    {
        id: 'jasper',
        name: 'Jasper AI',
        category: 'writing',
        pricing: 'paid',
        url: 'https://jasper.ai',
        description: {
            en: 'Professional AI copywriting tool for marketing teams',
            pt: 'Ferramenta profissional de copywriting com IA para equipes de marketing',
            es: 'Herramienta profesional de copywriting con IA para equipos de marketing'
        },
        free: false,
        paid: true,
        price: '$49/month',
        rank: 48,
        traffic: '356.5K'
    },
    {
        id: 'copyai',
        name: 'Copy.ai',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://copy.ai',
        description: {
            en: 'AI-powered copywriting for marketing, sales, and content creation',
            pt: 'Copywriting com IA para marketing, vendas e criação de conteúdo',
            es: 'Copywriting con IA para marketing, ventas y creación de contenido'
        },
        free: true,
        paid: true,
        price: '$49/month',
        rank: 52,
        traffic: '269.7K'
    },
    {
        id: 'quillbot',
        name: 'QuillBot',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://quillbot.com',
        description: {
            en: 'AI paraphrasing and writing enhancement tool',
            pt: 'Ferramenta de paráfrase e aprimoramento de escrita com IA',
            es: 'Herramienta de parafraseo y mejora de escritura con IA'
        },
        free: true,
        paid: true,
        price: '$8.33/month',
        rank: 4,
        traffic: '100.9M'
    },
    {
        id: 'grammarly',
        name: 'Grammarly',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://grammarly.com',
        description: {
            en: 'AI writing assistant for grammar, spelling, and style',
            pt: 'Assistente de escrita com IA para gramática, ortografia e estilo',
            es: 'Asistente de escritura con IA para gramática, ortografía y estilo'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 7,
        traffic: '38.4M'
    },
    {
        id: 'writesonic',
        name: 'Writesonic',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://writesonic.com',
        description: {
            en: 'AI writing assistant for articles, blogs, and marketing copy',
            pt: 'Assistente de escrita com IA para artigos, blogs e copy de marketing',
            es: 'Asistente de escritura con IA para artículos, blogs y copy de marketing'
        },
        free: true,
        paid: true,
        price: '$19/month',
        rank: 45,
        traffic: '450K'
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://notion.so/product/ai',
        description: {
            en: 'AI writing and productivity features integrated into Notion',
            pt: 'Recursos de escrita e produtividade com IA integrados ao Notion',
            es: 'Funciones de escritura y productividad con IA integradas en Notion'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 25,
        traffic: '2.2M'
    },
    {
        id: 'wordtune',
        name: 'Wordtune',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://wordtune.com',
        description: {
            en: 'AI writing companion for rewriting and improving your text',
            pt: 'Companheiro de escrita com IA para reescrever e melhorar seu texto',
            es: 'Compañero de escritura con IA para reescribir y mejorar tu texto'
        },
        free: true,
        paid: true,
        price: '$9.99/month',
        rank: 38,
        traffic: '700K'
    },
    {
        id: 'rytr',
        name: 'Rytr',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://rytr.me',
        description: {
            en: 'Affordable AI writing assistant for content creation',
            pt: 'Assistente de escrita com IA acessível para criação de conteúdo',
            es: 'Asistente de escritura con IA asequible para creación de contenido'
        },
        free: true,
        paid: true,
        price: '$9/month',
        rank: 50,
        traffic: '320K'
    },

    // DESIGN / IMAGES
    {
        id: 'canva',
        name: 'Canva',
        category: 'design',
        pricing: 'freemium',
        url: 'https://canva.com',
        description: {
            en: 'AI-powered graphic design tool with templates and Magic Studio',
            pt: 'Ferramenta de design gráfico com IA com templates e Magic Studio',
            es: 'Herramienta de diseño gráfico con IA con plantillas y Magic Studio'
        },
        free: true,
        paid: true,
        price: '$12.99/month',
        rank: 2,
        traffic: '285.7M'
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        category: 'design',
        pricing: 'paid',
        url: 'https://midjourney.com',
        description: {
            en: 'Leading AI image generator for artistic and creative visuals',
            pt: 'Gerador de imagens com IA líder para visuais artísticos e criativos',
            es: 'Generador de imágenes con IA líder para visuales artísticos y creativos'
        },
        free: false,
        paid: true,
        price: '$10/month',
        rank: 23,
        traffic: '2.6M'
    },
    {
        id: 'leonardo',
        name: 'Leonardo AI',
        category: 'design',
        pricing: 'freemium',
        url: 'https://leonardo.ai',
        description: {
            en: 'AI image generation with fine-tuned control and styles',
            pt: 'Geração de imagens com IA com controle refinado e estilos',
            es: 'Generación de imágenes con IA con control refinado y estilos'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 24,
        traffic: '2.5M'
    },
    {
        id: 'removebg',
        name: 'Remove.bg',
        category: 'design',
        pricing: 'freemium',
        url: 'https://remove.bg',
        description: {
            en: 'AI-powered background removal tool for images',
            pt: 'Ferramenta de remoção de fundo com IA para imagens',
            es: 'Herramienta de eliminación de fondo con IA para imágenes'
        },
        free: true,
        paid: true,
        price: '$9/month',
        rank: 6,
        traffic: '41.7M'
    },
    {
        id: 'flux',
        name: 'Flux AI',
        category: 'design',
        pricing: 'freemium',
        url: 'https://flux.ai',
        description: {
            en: 'New powerful AI image generator with photorealistic results',
            pt: 'Novo gerador de imagens com IA poderoso com resultados fotorrealistas',
            es: 'Nuevo generador de imágenes con IA potente con resultados fotorrealistas'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 20,
        traffic: '3M'
    },
    {
        id: 'ideogram',
        name: 'Ideogram',
        category: 'design',
        pricing: 'freemium',
        url: 'https://ideogram.ai',
        description: {
            en: 'AI image generator excellent at rendering text in images',
            pt: 'Gerador de imagens com IA excelente em renderizar texto em imagens',
            es: 'Generador de imágenes con IA excelente en renderizar texto en imágenes'
        },
        free: true,
        paid: true,
        price: '$8/month',
        rank: 26,
        traffic: '2M'
    },
    {
        id: 'firefly',
        name: 'Adobe Firefly',
        category: 'design',
        pricing: 'freemium',
        url: 'https://firefly.adobe.com',
        description: {
            en: 'Adobe\'s AI image generator integrated with Creative Cloud',
            pt: 'Gerador de imagens com IA da Adobe integrado com Creative Cloud',
            es: 'Generador de imágenes con IA de Adobe integrado con Creative Cloud'
        },
        free: true,
        paid: true,
        price: '$4.99/month',
        rank: 29,
        traffic: '1.5M'
    },
    {
        id: 'photoroom',
        name: 'PhotoRoom',
        category: 'design',
        pricing: 'freemium',
        url: 'https://photoroom.com',
        description: {
            en: 'AI photo editor for background removal and product photography',
            pt: 'Editor de fotos com IA para remoção de fundo e fotografia de produtos',
            es: 'Editor de fotos con IA para eliminación de fondo y fotografía de productos'
        },
        free: true,
        paid: true,
        price: '$9.99/month',
        rank: 33,
        traffic: '950K'
    },
    {
        id: 'recraft',
        name: 'Recraft',
        category: 'design',
        pricing: 'freemium',
        url: 'https://recraft.ai',
        description: {
            en: 'AI vector art and design generator with brand consistency',
            pt: 'Gerador de arte vetorial e design com IA com consistência de marca',
            es: 'Generador de arte vectorial y diseño con IA con consistencia de marca'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 36,
        traffic: '750K'
    },

    // VIDEO
    {
        id: 'capcut',
        name: 'CapCut',
        category: 'video',
        pricing: 'freemium',
        url: 'https://capcut.com',
        description: {
            en: 'AI video editing tool with auto-captions and effects',
            pt: 'Ferramenta de edição de vídeo com IA com legendas automáticas e efeitos',
            es: 'Herramienta de edición de video con IA con subtítulos automáticos y efectos'
        },
        free: true,
        paid: true,
        price: '$7.99/month',
        rank: 11,
        traffic: '9.9M'
    },
    {
        id: 'runway',
        name: 'Runway',
        category: 'video',
        pricing: 'freemium',
        url: 'https://runwayml.com',
        description: {
            en: 'AI video generation and editing platform with Gen-4',
            pt: 'Plataforma de geração e edição de vídeo com IA com Gen-4',
            es: 'Plataforma de generación y edición de video con IA con Gen-4'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 19,
        traffic: '3.2M'
    },
    {
        id: 'invideo',
        name: 'InVideo AI',
        category: 'video',
        pricing: 'freemium',
        url: 'https://invideo.io',
        description: {
            en: 'AI video creation from text prompts with templates',
            pt: 'Criação de vídeos com IA a partir de prompts de texto com templates',
            es: 'Creación de videos con IA desde prompts de texto con plantillas'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 21,
        traffic: '2.9M'
    },
    {
        id: 'synthesia',
        name: 'Synthesia',
        category: 'video',
        pricing: 'paid',
        url: 'https://synthesia.io',
        description: {
            en: 'AI video platform with avatars and voiceovers in 140+ languages',
            pt: 'Plataforma de vídeo com IA com avatares e narrações em 140+ idiomas',
            es: 'Plataforma de video con IA con avatares y narraciones en 140+ idiomas'
        },
        free: false,
        paid: true,
        price: '$22/month',
        rank: 31,
        traffic: '1.1M'
    },
    {
        id: 'pika',
        name: 'Pika',
        category: 'video',
        pricing: 'freemium',
        url: 'https://pika.art',
        description: {
            en: 'AI video generator with creative effects and animations',
            pt: 'Gerador de vídeo com IA com efeitos criativos e animações',
            es: 'Generador de video con IA con efectos creativos y animaciones'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 34,
        traffic: '900K'
    },
    {
        id: 'descript',
        name: 'Descript',
        category: 'video',
        pricing: 'freemium',
        url: 'https://descript.com',
        description: {
            en: 'AI video and audio editor - edit videos by editing text',
            pt: 'Editor de vídeo e áudio com IA - edite vídeos editando texto',
            es: 'Editor de video y audio con IA - edita videos editando texto'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 37,
        traffic: '720K'
    },
    {
        id: 'heygen',
        name: 'HeyGen',
        category: 'video',
        pricing: 'freemium',
        url: 'https://heygen.com',
        description: {
            en: 'AI video generator with customizable avatars and voices',
            pt: 'Gerador de vídeo com IA com avatares e vozes personalizáveis',
            es: 'Generador de video con IA con avatares y voces personalizables'
        },
        free: true,
        paid: true,
        price: '$29/month',
        rank: 39,
        traffic: '650K'
    },
    {
        id: 'pictory',
        name: 'Pictory',
        category: 'video',
        pricing: 'freemium',
        url: 'https://pictory.ai',
        description: {
            en: 'AI video creation from scripts, articles, and blog posts',
            pt: 'Criação de vídeos com IA a partir de scripts, artigos e posts de blog',
            es: 'Creación de videos con IA desde scripts, artículos y posts de blog'
        },
        free: true,
        paid: true,
        price: '$19/month',
        rank: 42,
        traffic: '550K'
    },

    // AUDIO / MUSIC / VOICE
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://elevenlabs.io',
        description: {
            en: 'AI voice cloning and text-to-speech with realistic voices',
            pt: 'Clonagem de voz e texto para fala com IA com vozes realistas',
            es: 'Clonación de voz y texto a voz con IA con voces realistas'
        },
        free: true,
        paid: true,
        price: '$5/month',
        rank: 17,
        traffic: '4.2M'
    },
    {
        id: 'suno',
        name: 'Suno AI',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://suno.ai',
        description: {
            en: 'AI music generator - create full songs with vocals from text',
            pt: 'Gerador de música com IA - crie músicas completas com vocais a partir de texto',
            es: 'Generador de música con IA - crea canciones completas con vocales desde texto'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 16,
        traffic: '4.5M'
    },
    {
        id: 'murf',
        name: 'Murf AI',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://murf.ai',
        description: {
            en: 'AI voice generator for voiceovers and narration',
            pt: 'Gerador de voz com IA para narrações e locuções',
            es: 'Generador de voz con IA para narraciones y locuciones'
        },
        free: true,
        paid: true,
        price: '$19/month',
        rank: 41,
        traffic: '580K'
    },
    {
        id: 'udio',
        name: 'Udio',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://udio.com',
        description: {
            en: 'AI music creation with high-quality vocals and instrumentals',
            pt: 'Criação de música com IA com vocais e instrumentais de alta qualidade',
            es: 'Creación de música con IA con vocales e instrumentales de alta calidad'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 43,
        traffic: '520K'
    },
    {
        id: 'soundraw',
        name: 'Soundraw',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://soundraw.io',
        description: {
            en: 'AI music generator with customizable royalty-free tracks',
            pt: 'Gerador de música com IA com faixas personalizáveis livres de royalties',
            es: 'Generador de música con IA con pistas personalizables libres de regalías'
        },
        free: true,
        paid: true,
        price: '$16.99/month',
        rank: 46,
        traffic: '420K'
    },
    {
        id: 'aiva',
        name: 'AIVA',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://aiva.ai',
        description: {
            en: 'AI music composition for soundtracks and background music',
            pt: 'Composição de música com IA para trilhas sonoras e música de fundo',
            es: 'Composición de música con IA para bandas sonoras y música de fondo'
        },
        free: true,
        paid: true,
        price: '$11/month',
        rank: 49,
        traffic: '350K'
    },
    {
        id: 'boomy',
        name: 'Boomy',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://boomy.com',
        description: {
            en: 'Create and monetize AI-generated music in seconds',
            pt: 'Crie e monetize música gerada por IA em segundos',
            es: 'Crea y monetiza música generada por IA en segundos'
        },
        free: true,
        paid: true,
        price: '$9.99/month',
        rank: 51,
        traffic: '280K'
    },

    // PRODUCTIVITY / BUSINESS
    {
        id: 'gamma',
        name: 'Gamma',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://gamma.app',
        description: {
            en: 'AI-powered presentation maker with beautiful templates',
            pt: 'Criador de apresentações com IA com templates bonitos',
            es: 'Creador de presentaciones con IA con plantillas hermosas'
        },
        free: true,
        paid: true,
        price: '$8/month',
        rank: 13,
        traffic: '7.8M'
    },
    {
        id: 'zapier',
        name: 'Zapier',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://zapier.com',
        description: {
            en: 'Automation platform connecting 5000+ apps with AI features',
            pt: 'Plataforma de automação conectando 5000+ apps com recursos de IA',
            es: 'Plataforma de automatización conectando 5000+ apps con funciones de IA'
        },
        free: true,
        paid: true,
        price: '$19.99/month',
        rank: 12,
        traffic: '8.5M'
    },
    {
        id: 'notebooklm',
        name: 'NotebookLM',
        category: 'productivity',
        pricing: 'free',
        url: 'https://notebooklm.google.com',
        description: {
            en: 'Google\'s AI note-taking and research assistant',
            pt: 'Assistente de anotações e pesquisa com IA do Google',
            es: 'Asistente de notas e investigación con IA de Google'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 44,
        traffic: '480K'
    },
    {
        id: 'clickup',
        name: 'ClickUp AI',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://clickup.com',
        description: {
            en: 'Project management platform with AI writing and automation',
            pt: 'Plataforma de gestão de projetos com escrita e automação com IA',
            es: 'Plataforma de gestión de proyectos con escritura y automatización con IA'
        },
        free: true,
        paid: true,
        price: '$7/month',
        rank: 47,
        traffic: '380K'
    },
    {
        id: 'otter',
        name: 'Otter.ai',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://otter.ai',
        description: {
            en: 'AI meeting transcription and note-taking assistant',
            pt: 'Assistente de transcrição de reuniões e anotações com IA',
            es: 'Asistente de transcripción de reuniones y notas con IA'
        },
        free: true,
        paid: true,
        price: '$8.33/month',
        rank: 53,
        traffic: '250K'
    },
    {
        id: 'fireflies',
        name: 'Fireflies.ai',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://fireflies.ai',
        description: {
            en: 'AI meeting assistant for recording and transcription',
            pt: 'Assistente de reuniões com IA para gravação e transcrição',
            es: 'Asistente de reuniones con IA para grabación y transcripción'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 54,
        traffic: '220K'
    },

    // TRANSLATION
    {
        id: 'deepl',
        name: 'DeepL',
        category: 'translation',
        pricing: 'freemium',
        url: 'https://deepl.com',
        description: {
            en: 'Most accurate AI translator with natural-sounding results',
            pt: 'Tradutor de IA mais preciso com resultados naturais',
            es: 'Traductor de IA más preciso con resultados naturales'
        },
        free: true,
        paid: true,
        price: '$7.49/month',
        rank: 3,
        traffic: '167M'
    },
    {
        id: 'google-translate',
        name: 'Google Translate',
        category: 'translation',
        pricing: 'free',
        url: 'https://translate.google.com',
        description: {
            en: 'Free translation service supporting 100+ languages',
            pt: 'Serviço de tradução gratuito suportando 100+ idiomas',
            es: 'Servicio de traducción gratuito que soporta 100+ idiomas'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 8,
        traffic: '35M'
    },
    {
        id: 'reverso',
        name: 'Reverso',
        category: 'translation',
        pricing: 'freemium',
        url: 'https://reverso.net',
        description: {
            en: 'AI translation with context examples and grammar checking',
            pt: 'Tradução com IA com exemplos de contexto e verificação gramatical',
            es: 'Traducción con IA con ejemplos de contexto y verificación gramatical'
        },
        free: true,
        paid: true,
        price: '$6.49/month',
        rank: 55,
        traffic: '180K'
    },

    // RESEARCH / ACADEMIC
    {
        id: 'consensus',
        name: 'Consensus',
        category: 'research',
        pricing: 'freemium',
        url: 'https://consensus.app',
        description: {
            en: 'AI-powered academic search engine for research papers',
            pt: 'Motor de busca acadêmico com IA para artigos de pesquisa',
            es: 'Motor de búsqueda académico con IA para artículos de investigación'
        },
        free: true,
        paid: true,
        price: '$8.99/month',
        rank: 56,
        traffic: '150K'
    },
    {
        id: 'elicit',
        name: 'Elicit',
        category: 'research',
        pricing: 'freemium',
        url: 'https://elicit.org',
        description: {
            en: 'AI research assistant for analyzing academic papers',
            pt: 'Assistente de pesquisa com IA para analisar artigos acadêmicos',
            es: 'Asistente de investigación con IA para analizar artículos académicos'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 57,
        traffic: '120K'
    },
    {
        id: 'scite',
        name: 'Scite',
        category: 'research',
        pricing: 'freemium',
        url: 'https://scite.ai',
        description: {
            en: 'Smart citations tool showing how research has been cited',
            pt: 'Ferramenta de citações inteligentes mostrando como pesquisas foram citadas',
            es: 'Herramienta de citas inteligentes que muestra cómo se ha citado la investigación'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 58,
        traffic: '100K'
    },
    {
        id: 'scholarcy',
        name: 'Scholarcy',
        category: 'research',
        pricing: 'freemium',
        url: 'https://scholarcy.com',
        description: {
            en: 'AI tool to summarize and extract key information from papers',
            pt: 'Ferramenta de IA para resumir e extrair informações-chave de artigos',
            es: 'Herramienta de IA para resumir y extraer información clave de artículos'
        },
        free: true,
        paid: true,
        price: '$7.99/month',
        rank: 59,
        traffic: '80K'
    },

    // === ADDITIONAL TOP-RANKED TOOLS (90 new) ===
    
    // ASSISTANT / CHATBOT (3 more)
    {
        id: 'deepseek',
        name: 'DeepSeek',
        category: 'assistant',
        pricing: 'free',
        url: 'https://chat.deepseek.com',
        description: {
            en: 'Free AI chatbot growing +88% in 2025 with 815M monthly visits',
            pt: 'Chatbot de IA gratuito crescendo +88% em 2025 com 815M de visitas mensais',
            es: 'Chatbot de IA gratuito creciendo +88% en 2025 con 815M de visitas mensuales'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 2,
        traffic: '815M'
    },
    {
        id: 'mistral',
        name: 'Mistral Le Chat',
        category: 'assistant',
        pricing: 'free',
        url: 'https://chat.mistral.ai',
        description: {
            en: 'European AI chatbot with strong privacy focus, growing +53 positions',
            pt: 'Chatbot de IA europeu com forte foco em privacidade, crescendo +53 posições',
            es: 'Chatbot de IA europeo con fuerte enfoque en privacidad, creciendo +53 posiciones'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 23,
        traffic: '10M'
    },
    {
        id: 'pi',
        name: 'Pi AI',
        category: 'assistant',
        pricing: 'free',
        url: 'https://pi.ai',
        description: {
            en: 'Personal AI assistant focused on empathetic conversations and emotional support',
            pt: 'Assistente de IA pessoal focado em conversas empáticas e suporte emocional',
            es: 'Asistente de IA personal enfocado en conversaciones empáticas y apoyo emocional'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 110,
        traffic: '2M'
    },
    
    // PROGRAMMING (8 more)
    {
        id: 'aistudio',
        name: 'Google AI Studio',
        category: 'programming',
        pricing: 'free',
        url: 'https://aistudio.google.com',
        description: {
            en: 'Google\'s free AI development platform with 38M monthly visits, +47 rank growth',
            pt: 'Plataforma de desenvolvimento de IA gratuita do Google com 38M de visitas mensais, +47 crescimento',
            es: 'Plataforma de desarrollo de IA gratuita de Google con 38M de visitas mensuales, +47 crecimiento'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 20,
        traffic: '38M'
    },
    {
        id: 'blackbox',
        name: 'Blackbox AI',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://blackbox.ai',
        description: {
            en: 'AI code assistant with 14M monthly visits, supports multiple programming languages',
            pt: 'Assistente de código com IA com 14M de visitas mensais, suporta múltiplas linguagens',
            es: 'Asistente de código con IA con 14M de visitas mensuales, soporta múltiples lenguajes'
        },
        free: true,
        paid: true,
        price: 'Free',
        rank: 18,
        traffic: '14M'
    },
    {
        id: 'codewhisperer',
        name: 'Amazon CodeWhisperer',
        category: 'programming',
        pricing: 'free',
        url: 'https://aws.amazon.com/codewhisperer',
        description: {
            en: 'Amazon\'s free AI code generator, integrated with AWS services',
            pt: 'Gerador de código com IA gratuito da Amazon, integrado com serviços AWS',
            es: 'Generador de código con IA gratuito de Amazon, integrado con servicios AWS'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 91,
        traffic: '600K'
    },
    {
        id: 'supermaven',
        name: 'Supermaven',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://supermaven.com',
        description: {
            en: 'Fast AI code completion with 1M+ token context window',
            pt: 'Completação de código com IA rápida com janela de contexto de 1M+ tokens',
            es: 'Completación de código con IA rápida con ventana de contexto de 1M+ tokens'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 115,
        traffic: '500K'
    },
    {
        id: 'phind',
        name: 'Phind',
        category: 'programming',
        pricing: 'free',
        url: 'https://phind.com',
        description: {
            en: 'AI search engine for developers, answers programming questions with code examples',
            pt: 'Motor de busca com IA para desenvolvedores, responde perguntas de programação com exemplos',
            es: 'Motor de búsqueda con IA para desarrolladores, responde preguntas de programación con ejemplos'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 77,
        traffic: '1M'
    },
    {
        id: 'v0',
        name: 'Vercel v0',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://v0.dev',
        description: {
            en: 'Generate UI components from text descriptions, +14 rank growth',
            pt: 'Gere componentes de UI a partir de descrições de texto, +14 crescimento',
            es: 'Genera componentes de UI a partir de descripciones de texto, +14 crecimiento'
        },
        free: true,
        paid: true,
        price: 'Free',
        rank: 39,
        traffic: '4.1M'
    },
    {
        id: 'liner',
        name: 'Liner',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://getliner.com',
        description: {
            en: 'AI research assistant for developers with 16M monthly visits',
            pt: 'Assistente de pesquisa com IA para desenvolvedores com 16M de visitas mensais',
            es: 'Asistente de investigación con IA para desarrolladores con 16M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 15,
        traffic: '16M'
    },
    {
        id: 'replit-ai',
        name: 'Replit AI',
        category: 'programming',
        pricing: 'freemium',
        url: 'https://replit.com',
        description: {
            en: 'Online IDE with AI code generation and collaboration features',
            pt: 'IDE online com geração de código com IA e recursos de colaboração',
            es: 'IDE en línea con generación de código con IA y funciones de colaboración'
        },
        free: true,
        paid: true,
        price: '$7/month',
        rank: 28,
        traffic: '7.8M'
    },
    
    // WRITING (10 more)
    {
        id: 'quillbot',
        name: 'QuillBot',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://quillbot.com',
        description: {
            en: 'AI paraphrasing and writing tool with 101M monthly visits, #7 globally',
            pt: 'Ferramenta de paráfrase e escrita com IA com 101M de visitas mensais, #7 globalmente',
            es: 'Herramienta de parafraseo y escritura con IA con 101M de visitas mensuales, #7 globalmente'
        },
        free: true,
        paid: true,
        price: '$8.33/month',
        rank: 7,
        traffic: '101M'
    },
    {
        id: 'grammarly',
        name: 'Grammarly',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://grammarly.com',
        description: {
            en: 'AI writing assistant with 38M monthly visits, grammar and style checker',
            pt: 'Assistente de escrita com IA com 38M de visitas mensais, verificador de gramática e estilo',
            es: 'Asistente de escritura con IA con 38M de visitas mensuales, verificador de gramática y estilo'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 10,
        traffic: '38M'
    },
    {
        id: 'anyword',
        name: 'Anyword',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://anyword.com',
        description: {
            en: 'AI copywriting for marketing with predictive performance scoring',
            pt: 'Copywriting com IA para marketing com pontuação preditiva de desempenho',
            es: 'Copywriting con IA para marketing con puntuación predictiva de rendimiento'
        },
        free: true,
        paid: true,
        price: '$79/month',
        rank: 154,
        traffic: '150K'
    },
    {
        id: 'frase',
        name: 'Frase',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://frase.io',
        description: {
            en: 'AI content optimization and SEO writing tool',
            pt: 'Ferramenta de otimização de conteúdo e escrita SEO com IA',
            es: 'Herramienta de optimización de contenido y escritura SEO con IA'
        },
        free: true,
        paid: true,
        price: '$14.99/month',
        rank: 155,
        traffic: '140K'
    },
    {
        id: 'sudowrite',
        name: 'Sudowrite',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://sudowrite.com',
        description: {
            en: 'AI writing assistant for fiction and creative writing',
            pt: 'Assistente de escrita com IA para ficção e escrita criativa',
            es: 'Asistente de escritura con IA para ficción y escritura creativa'
        },
        free: true,
        paid: true,
        price: '$19/month',
        rank: 151,
        traffic: '200K'
    },
    {
        id: 'prowritingaid',
        name: 'ProWritingAid',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://prowritingaid.com',
        description: {
            en: 'Comprehensive writing assistant with grammar, style, and readability analysis',
            pt: 'Assistente de escrita abrangente com análise de gramática, estilo e legibilidade',
            es: 'Asistente de escritura integral con análisis de gramática, estilo y legibilidad'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 152,
        traffic: '180K'
    },
    {
        id: 'compose',
        name: 'Compose AI',
        category: 'writing',
        pricing: 'free',
        url: 'https://compose.ai',
        description: {
            en: 'Free Chrome extension for AI-powered autocompletion while typing',
            pt: 'Extensão gratuita do Chrome para autocompletar com IA enquanto digita',
            es: 'Extensión gratuita de Chrome para autocompletar con IA mientras escribe'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 169,
        traffic: '100K'
    },
    {
        id: 'moonbeam',
        name: 'Moonbeam',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://gomoonbeam.com',
        description: {
            en: 'AI writing assistant for long-form content and essays',
            pt: 'Assistente de escrita com IA para conteúdo longo e ensaios',
            es: 'Asistente de escritura con IA para contenido largo y ensayos'
        },
        free: true,
        paid: true,
        price: '$15/month',
        rank: 170,
        traffic: '90K'
    },
    {
        id: 'jenni',
        name: 'Jenni AI',
        category: 'writing',
        pricing: 'freemium',
        url: 'https://jenni.ai',
        description: {
            en: 'AI writing assistant for academic research papers and citations',
            pt: 'Assistente de escrita com IA para artigos de pesquisa acadêmica e citações',
            es: 'Asistente de escritura con IA para artículos de investigación académica y citas'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 173,
        traffic: '80K'
    },
    {
        id: 'lex',
        name: 'Lex',
        category: 'writing',
        pricing: 'free',
        url: 'https://lex.page',
        description: {
            en: 'Free AI-powered word processor for writers',
            pt: 'Processador de texto gratuito com IA para escritores',
            es: 'Procesador de texto gratuito con IA para escritores'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 172,
        traffic: '85K'
    },
    
    // DESIGN / IMAGE (15 more)
    {
        id: 'removebg',
        name: 'Remove.bg',
        category: 'design',
        pricing: 'freemium',
        url: 'https://remove.bg',
        description: {
            en: 'AI background removal tool with 42M monthly visits, #11 globally',
            pt: 'Ferramenta de remoção de fundo com IA com 42M de visitas mensais, #11 globalmente',
            es: 'Herramienta de eliminación de fondo con IA con 42M de visitas mensuales, #11 globalmente'
        },
        free: true,
        paid: true,
        price: '$9/month',
        rank: 11,
        traffic: '42M'
    },
    {
        id: 'cutout',
        name: 'Cutout.pro',
        category: 'design',
        pricing: 'freemium',
        url: 'https://cutout.pro',
        description: {
            en: 'AI image editing suite with 13M monthly visits, background removal and enhancement',
            pt: 'Suíte de edição de imagem com IA com 13M de visitas mensais, remoção de fundo e aprimoramento',
            es: 'Suite de edición de imagen con IA con 13M de visitas mensuales, eliminación de fondo y mejora'
        },
        free: true,
        paid: true,
        price: '$9.99/month',
        rank: 24,
        traffic: '13M'
    },
    {
        id: 'picwish',
        name: 'PicWish',
        category: 'design',
        pricing: 'freemium',
        url: 'https://picwish.com',
        description: {
            en: 'AI photo editor with 6.7M monthly visits, background removal and enhancement',
            pt: 'Editor de fotos com IA com 6.7M de visitas mensais, remoção de fundo e aprimoramento',
            es: 'Editor de fotos con IA con 6.7M de visitas mensuales, eliminación de fondo y mejora'
        },
        free: true,
        paid: true,
        price: '$9.99/month',
        rank: 34,
        traffic: '6.7M'
    },
    {
        id: 'pixelcut',
        name: 'PixelCut',
        category: 'design',
        pricing: 'freemium',
        url: 'https://pixelcut.ai',
        description: {
            en: 'AI photo editor with 12M monthly visits, product photography and background removal',
            pt: 'Editor de fotos com IA com 12M de visitas mensais, fotografia de produto e remoção de fundo',
            es: 'Editor de fotos con IA con 12M de visitas mensuales, fotografía de producto y eliminación de fondo'
        },
        free: true,
        paid: true,
        price: '$7.99/month',
        rank: 38,
        traffic: '12M'
    },
    {
        id: 'napkin',
        name: 'Napkin',
        category: 'design',
        pricing: 'freemium',
        url: 'https://napkin.ai',
        description: {
            en: 'AI tool to transform text into visual diagrams and infographics',
            pt: 'Ferramenta de IA para transformar texto em diagramas visuais e infográficos',
            es: 'Herramienta de IA para transformar texto en diagramas visuales e infografías'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 37,
        traffic: '4.2M'
    },
    {
        id: 'looka',
        name: 'Looka',
        category: 'design',
        pricing: 'paid',
        url: 'https://looka.com',
        description: {
            en: 'AI logo maker and brand identity platform with 2.9M monthly visits',
            pt: 'Criador de logotipos com IA e plataforma de identidade de marca com 2.9M de visitas mensais',
            es: 'Creador de logotipos con IA y plataforma de identidad de marca con 2.9M de visitas mensuales'
        },
        free: false,
        paid: true,
        price: '$20/month',
        rank: 105,
        traffic: '2.9M'
    },
    {
        id: 'playground',
        name: 'Playground AI',
        category: 'design',
        pricing: 'freemium',
        url: 'https://playgroundai.com',
        description: {
            en: 'Free AI image generator with 2.2M monthly visits, 1000 images/day',
            pt: 'Gerador de imagens com IA gratuito com 2.2M de visitas mensais, 1000 imagens/dia',
            es: 'Generador de imágenes con IA gratuito con 2.2M de visitas mensuales, 1000 imágenes/día'
        },
        free: true,
        paid: true,
        price: 'Free',
        rank: 106,
        traffic: '2.2M'
    },
    {
        id: 'nightcafe',
        name: 'NightCafe',
        category: 'design',
        pricing: 'freemium',
        url: 'https://nightcafe.studio',
        description: {
            en: 'AI art generator with multiple algorithms and styles, 1.8M monthly visits',
            pt: 'Gerador de arte com IA com múltiplos algoritmos e estilos, 1.8M de visitas mensais',
            es: 'Generador de arte con IA con múltiples algoritmos y estilos, 1.8M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$5.99/month',
        rank: 107,
        traffic: '1.8M'
    },
    {
        id: 'topaz',
        name: 'Topaz Labs',
        category: 'design',
        pricing: 'paid',
        url: 'https://topazlabs.com',
        description: {
            en: 'Professional AI photo and video enhancement software',
            pt: 'Software profissional de aprimoramento de foto e vídeo com IA',
            es: 'Software profesional de mejora de foto y video con IA'
        },
        free: false,
        paid: true,
        price: '$199 one-time',
        rank: 108,
        traffic: '1.5M'
    },
    {
        id: 'luminar',
        name: 'Luminar Neo',
        category: 'design',
        pricing: 'paid',
        url: 'https://skylum.com',
        description: {
            en: 'AI photo editing software with advanced enhancement tools',
            pt: 'Software de edição de fotos com IA com ferramentas avançadas de aprimoramento',
            es: 'Software de edición de fotos con IA con herramientas avanzadas de mejora'
        },
        free: false,
        paid: true,
        price: '$11.95/month',
        rank: 109,
        traffic: '1.2M'
    },
    {
        id: 'freepik',
        name: 'Freepik AI',
        category: 'design',
        pricing: 'freemium',
        url: 'https://freepik.com',
        description: {
            en: 'AI image generator integrated with Freepik\'s stock library',
            pt: 'Gerador de imagens com IA integrado com a biblioteca de estoque da Freepik',
            es: 'Generador de imágenes con IA integrado con la biblioteca de stock de Freepik'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 111,
        traffic: '35M'
    },
    {
        id: 'msdesigner',
        name: 'Microsoft Designer',
        category: 'design',
        pricing: 'free',
        url: 'https://designer.microsoft.com',
        description: {
            en: 'Free AI graphic design tool from Microsoft with DALL-E integration',
            pt: 'Ferramenta de design gráfico com IA gratuita da Microsoft com integração DALL-E',
            es: 'Herramienta de diseño gráfico con IA gratuita de Microsoft con integración DALL-E'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 112,
        traffic: '8M'
    },
    {
        id: 'fotor',
        name: 'Fotor',
        category: 'design',
        pricing: 'freemium',
        url: 'https://fotor.com',
        description: {
            en: 'AI photo editor and design tool with templates and effects',
            pt: 'Editor de fotos e ferramenta de design com IA com modelos e efeitos',
            es: 'Editor de fotos y herramienta de diseño con IA con plantillas y efectos'
        },
        free: true,
        paid: true,
        price: '$8.99/month',
        rank: 113,
        traffic: '5M'
    },
    {
        id: 'craiyon',
        name: 'Craiyon',
        category: 'design',
        pricing: 'free',
        url: 'https://craiyon.com',
        description: {
            en: 'Free AI image generator (formerly DALL-E mini), unlimited generations',
            pt: 'Gerador de imagens com IA gratuito (antigo DALL-E mini), gerações ilimitadas',
            es: 'Generador de imágenes con IA gratuito (antiguo DALL-E mini), generaciones ilimitadas'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 115,
        traffic: '3M'
    },
    {
        id: 'lexica',
        name: 'Lexica',
        category: 'design',
        pricing: 'freemium',
        url: 'https://lexica.art',
        description: {
            en: 'AI art search engine and generator with Stable Diffusion',
            pt: 'Motor de busca e gerador de arte com IA com Stable Diffusion',
            es: 'Motor de búsqueda y generador de arte con IA con Stable Diffusion'
        },
        free: true,
        paid: true,
        price: '$8/month',
        rank: 117,
        traffic: '2.5M'
    },
    
    // VIDEO (10 more)
    {
        id: 'capcut',
        name: 'CapCut',
        category: 'video',
        pricing: 'freemium',
        url: 'https://capcut.com',
        description: {
            en: 'Popular video editor with AI features, 10M monthly visits',
            pt: 'Editor de vídeo popular com recursos de IA, 10M de visitas mensais',
            es: 'Editor de video popular con funciones de IA, 10M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$7.99/month',
        rank: 36,
        traffic: '10M'
    },
    {
        id: 'vidnoz',
        name: 'Vidnoz',
        category: 'video',
        pricing: 'freemium',
        url: 'https://vidnoz.com',
        description: {
            en: 'AI video generator with avatars and voiceovers, 5.3M monthly visits',
            pt: 'Gerador de vídeo com IA com avatares e narrações, 5.3M de visitas mensais',
            es: 'Generador de video con IA con avatares y narraciones, 5.3M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$22.49/month',
        rank: 40,
        traffic: '5.3M'
    },
    {
        id: 'sora',
        name: 'Sora',
        category: 'video',
        pricing: 'freemium',
        url: 'https://openai.com/sora',
        description: {
            en: 'OpenAI\'s text-to-video generator, creates 20-second 1080p clips',
            pt: 'Gerador de texto para vídeo da OpenAI, cria clipes de 20 segundos em 1080p',
            es: 'Generador de texto a video de OpenAI, crea clips de 20 segundos en 1080p'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 18,
        traffic: 'N/A'
    },
    {
        id: 'lumen5',
        name: 'Lumen5',
        category: 'video',
        pricing: 'freemium',
        url: 'https://lumen5.com',
        description: {
            en: 'AI video creator for social media content from blog posts',
            pt: 'Criador de vídeo com IA para conteúdo de mídia social a partir de posts de blog',
            es: 'Creador de video con IA para contenido de redes sociales a partir de publicaciones de blog'
        },
        free: true,
        paid: true,
        price: '$19/month',
        rank: 121,
        traffic: '1.5M'
    },
    {
        id: 'animoto',
        name: 'Animoto',
        category: 'video',
        pricing: 'freemium',
        url: 'https://animoto.com',
        description: {
            en: 'Easy video maker with AI-powered templates for marketing',
            pt: 'Criador de vídeo fácil com modelos com IA para marketing',
            es: 'Creador de video fácil con plantillas con IA para marketing'
        },
        free: true,
        paid: true,
        price: '$16/month',
        rank: 122,
        traffic: '1.3M'
    },
    {
        id: 'clipchamp',
        name: 'Clipchamp',
        category: 'video',
        pricing: 'freemium',
        url: 'https://clipchamp.com',
        description: {
            en: 'Microsoft\'s video editor with AI features, integrated with Windows',
            pt: 'Editor de vídeo da Microsoft com recursos de IA, integrado com Windows',
            es: 'Editor de video de Microsoft con funciones de IA, integrado con Windows'
        },
        free: true,
        paid: true,
        price: '$11.99/month',
        rank: 123,
        traffic: '8M'
    },
    {
        id: 'flexclip',
        name: 'FlexClip',
        category: 'video',
        pricing: 'freemium',
        url: 'https://flexclip.com',
        description: {
            en: 'Online video maker with AI text-to-video and templates',
            pt: 'Criador de vídeo online com texto para vídeo com IA e modelos',
            es: 'Creador de video en línea con texto a video con IA y plantillas'
        },
        free: true,
        paid: true,
        price: '$9.99/month',
        rank: 124,
        traffic: '2.5M'
    },
    {
        id: 'wisecut',
        name: 'Wisecut',
        category: 'video',
        pricing: 'freemium',
        url: 'https://wisecut.video',
        description: {
            en: 'AI video editor that auto-cuts silences and adds subtitles',
            pt: 'Editor de vídeo com IA que corta silêncios automaticamente e adiciona legendas',
            es: 'Editor de video con IA que corta silencios automáticamente y añade subtítulos'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 127,
        traffic: '800K'
    },
    {
        id: 'submagic',
        name: 'Submagic',
        category: 'video',
        pricing: 'freemium',
        url: 'https://submagic.co',
        description: {
            en: 'AI-powered auto-subtitles and captions for short-form videos',
            pt: 'Legendas e legendas automáticas com IA para vídeos curtos',
            es: 'Subtítulos y leyendas automáticas con IA para videos cortos'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 128,
        traffic: '1.2M'
    },
    {
        id: 'riverside',
        name: 'Riverside.fm',
        category: 'video',
        pricing: 'freemium',
        url: 'https://riverside.fm',
        description: {
            en: 'High-quality remote recording for podcasts and videos with AI editing',
            pt: 'Gravação remota de alta qualidade para podcasts e vídeos com edição de IA',
            es: 'Grabación remota de alta calidad para podcasts y videos con edición de IA'
        },
        free: true,
        paid: true,
        price: '$15/month',
        rank: 130,
        traffic: '1.8M'
    },
    
    // AUDIO / MUSIC / VOICE (10 more)
    {
        id: 'voicemod',
        name: 'Voicemod',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://voicemod.net',
        description: {
            en: 'Real-time voice changer with AI voices, 3.8M monthly visits',
            pt: 'Modificador de voz em tempo real com vozes de IA, 3.8M de visitas mensais',
            es: 'Cambiador de voz en tiempo real con voces de IA, 3.8M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 43,
        traffic: '3.8M'
    },
    {
        id: 'naturalreaders',
        name: 'Natural Readers',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://naturalreaders.com',
        description: {
            en: 'Text-to-speech software with natural AI voices, 4.5M monthly visits',
            pt: 'Software de texto para fala com vozes de IA naturais, 4.5M de visitas mensais',
            es: 'Software de texto a voz con voces de IA naturales, 4.5M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$9.99/month',
        rank: 49,
        traffic: '4.5M'
    },
    {
        id: 'playht',
        name: 'Play.ht',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://play.ht',
        description: {
            en: 'AI voice generator with 600+ voices in 140+ languages',
            pt: 'Gerador de voz com IA com 600+ vozes em 140+ idiomas',
            es: 'Generador de voz con IA con 600+ voces en 140+ idiomas'
        },
        free: true,
        paid: true,
        price: '$19/month',
        rank: 141,
        traffic: '800K'
    },
    {
        id: 'resemble',
        name: 'Resemble AI',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://resemble.ai',
        description: {
            en: 'AI voice cloning and text-to-speech for custom voices',
            pt: 'Clonagem de voz com IA e texto para fala para vozes personalizadas',
            es: 'Clonación de voz con IA y texto a voz para voces personalizadas'
        },
        free: true,
        paid: true,
        price: '$0.006/sec',
        rank: 142,
        traffic: '600K'
    },
    {
        id: 'moises',
        name: 'Moises',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://moises.ai',
        description: {
            en: 'AI music app to separate vocals, instruments, and change tempo',
            pt: 'App de música com IA para separar vocais, instrumentos e mudar tempo',
            es: 'App de música con IA para separar vocales, instrumentos y cambiar tempo'
        },
        free: true,
        paid: true,
        price: '$3.99/month',
        rank: 135,
        traffic: '1.2M'
    },
    {
        id: 'mubert',
        name: 'Mubert',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://mubert.com',
        description: {
            en: 'AI music generator for royalty-free background music',
            pt: 'Gerador de música com IA para música de fundo livre de royalties',
            es: 'Generador de música con IA para música de fondo libre de regalías'
        },
        free: true,
        paid: true,
        price: '$14/month',
        rank: 138,
        traffic: '900K'
    },
    {
        id: 'beatoven',
        name: 'Beatoven',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://beatoven.ai',
        description: {
            en: 'AI music generator for custom soundtracks and background music',
            pt: 'Gerador de música com IA para trilhas sonoras personalizadas e música de fundo',
            es: 'Generador de música con IA para bandas sonoras personalizadas y música de fondo'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 137,
        traffic: '700K'
    },
    {
        id: 'lalal',
        name: 'Lalal.ai',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://lalal.ai',
        description: {
            en: 'AI vocal and instrumental track separation tool',
            pt: 'Ferramenta de separação de faixas vocais e instrumentais com IA',
            es: 'Herramienta de separación de pistas vocales e instrumentales con IA'
        },
        free: true,
        paid: true,
        price: '$15/month',
        rank: 134,
        traffic: '1.5M'
    },
    {
        id: 'podcastle',
        name: 'Podcastle',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://podcastle.ai',
        description: {
            en: 'AI podcast recording and editing platform with noise removal',
            pt: 'Plataforma de gravação e edição de podcast com IA com remoção de ruído',
            es: 'Plataforma de grabación y edición de podcast con IA con eliminación de ruido'
        },
        free: true,
        paid: true,
        price: '$11.99/month',
        rank: 131,
        traffic: '1.1M'
    },
    {
        id: 'cleanvoice',
        name: 'Cleanvoice',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://cleanvoice.ai',
        description: {
            en: 'AI audio editing to remove filler words and background noise',
            pt: 'Edição de áudio com IA para remover palavras de preenchimento e ruído de fundo',
            es: 'Edición de audio con IA para eliminar palabras de relleno y ruido de fondo'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 132,
        traffic: '600K'
    },
    
    // PRODUCTIVITY (10 more)
    {
        id: 'zapier',
        name: 'Zapier',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://zapier.com',
        description: {
            en: 'Automation platform connecting 5000+ apps with AI workflows, 8.5M monthly visits',
            pt: 'Plataforma de automação conectando 5000+ apps com fluxos de trabalho de IA, 8.5M de visitas mensais',
            es: 'Plataforma de automatización conectando 5000+ apps con flujos de trabajo de IA, 8.5M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$19.99/month',
        rank: 13,
        traffic: '8.5M'
    },
    {
        id: 'gamma',
        name: 'Gamma',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://gamma.app',
        description: {
            en: 'AI presentation maker with 18M monthly visits, creates slides from text',
            pt: 'Criador de apresentações com IA com 18M de visitas mensais, cria slides a partir de texto',
            es: 'Creador de presentaciones con IA con 18M de visitas mensuales, crea diapositivas a partir de texto'
        },
        free: true,
        paid: true,
        price: '$8/month',
        rank: 14,
        traffic: '18M'
    },
    {
        id: 'otter',
        name: 'Otter.ai',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://otter.ai',
        description: {
            en: 'AI meeting transcription and notes with 7.1M monthly visits',
            pt: 'Transcrição de reuniões e notas com IA com 7.1M de visitas mensais',
            es: 'Transcripción de reuniones y notas con IA con 7.1M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$8.33/month',
        rank: 35,
        traffic: '7.1M'
    },
    {
        id: 'figjam',
        name: 'Figjam AI',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://figma.com',
        description: {
            en: 'AI-powered whiteboard and brainstorming tool, 7.8M monthly visits',
            pt: 'Quadro branco e ferramenta de brainstorming com IA, 7.8M de visitas mensais',
            es: 'Pizarra y herramienta de lluvia de ideas con IA, 7.8M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$15/month',
        rank: 33,
        traffic: '7.8M'
    },
    {
        id: 'taskade',
        name: 'Taskade',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://taskade.com',
        description: {
            en: 'AI task management and collaboration with custom AI agents',
            pt: 'Gerenciamento de tarefas e colaboração com IA com agentes de IA personalizados',
            es: 'Gestión de tareas y colaboración con IA con agentes de IA personalizados'
        },
        free: true,
        paid: true,
        price: '$8/month',
        rank: 81,
        traffic: '720K'
    },
    {
        id: 'clickup-ai',
        name: 'ClickUp AI',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://clickup.com',
        description: {
            en: 'Project management with AI writing assistant and automation',
            pt: 'Gerenciamento de projetos com assistente de escrita com IA e automação',
            es: 'Gestión de proyectos con asistente de escritura con IA y automatización'
        },
        free: true,
        paid: true,
        price: '$7/month',
        rank: 82,
        traffic: '680K'
    },
    {
        id: 'fireflies',
        name: 'Fireflies.ai',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://fireflies.ai',
        description: {
            en: 'AI meeting assistant that records, transcribes, and summarizes',
            pt: 'Assistente de reunião com IA que grava, transcreve e resume',
            es: 'Asistente de reunión con IA que graba, transcribe y resume'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 83,
        traffic: '640K'
    },
    {
        id: 'reclaim',
        name: 'Reclaim AI',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://reclaim.ai',
        description: {
            en: 'AI calendar assistant for automatic scheduling and time blocking',
            pt: 'Assistente de calendário com IA para agendamento automático e bloqueio de tempo',
            es: 'Asistente de calendario con IA para programación automática y bloqueo de tiempo'
        },
        free: true,
        paid: true,
        price: '$8/month',
        rank: 85,
        traffic: '550K'
    },
    {
        id: 'motion-app',
        name: 'Motion',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://usemotion.com',
        description: {
            en: 'AI-powered calendar and project manager that auto-schedules tasks',
            pt: 'Calendário e gerenciador de projetos com IA que agenda tarefas automaticamente',
            es: 'Calendario y gestor de proyectos con IA que programa tareas automáticamente'
        },
        free: true,
        paid: true,
        price: '$19/month',
        rank: 86,
        traffic: '510K'
    },
    {
        id: 'beautiful-ai',
        name: 'Beautiful.ai',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://beautiful.ai',
        description: {
            en: 'AI presentation software with smart templates and auto-formatting',
            pt: 'Software de apresentação com IA com modelos inteligentes e formatação automática',
            es: 'Software de presentación con IA con plantillas inteligentes y formato automático'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 64,
        traffic: '2M'
    },
    
    // TRANSLATION (2 more)
    {
        id: 'reverso',
        name: 'Reverso',
        category: 'translation',
        pricing: 'freemium',
        url: 'https://reverso.net',
        description: {
            en: 'AI translation with context examples and grammar checker',
            pt: 'Tradução com IA com exemplos de contexto e verificador de gramática',
            es: 'Traducción con IA con ejemplos de contexto y verificador de gramática'
        },
        free: true,
        paid: true,
        price: '$6.49/month',
        rank: 88,
        traffic: '410K'
    },
    {
        id: 'googletranslate',
        name: 'Google Translate',
        category: 'translation',
        pricing: 'free',
        url: 'https://translate.google.com',
        description: {
            en: 'Free translation service supporting 100+ languages with 35M monthly visits',
            pt: 'Serviço de tradução gratuito suportando 100+ idiomas com 35M de visitas mensais',
            es: 'Servicio de traducción gratuito compatible con 100+ idiomas con 35M de visitas mensuales'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 120,
        traffic: '35M'
    },
    
    // RESEARCH / ACADEMIC (7 more)
    {
        id: 'notebooklm',
        name: 'NotebookLM',
        category: 'research',
        pricing: 'free',
        url: 'https://notebooklm.google.com',
        description: {
            en: 'Google\'s AI research assistant, +21 rank growth, 8.8M monthly visits',
            pt: 'Assistente de pesquisa com IA do Google, +21 crescimento, 8.8M de visitas mensais',
            es: 'Asistente de investigación con IA de Google, +21 crecimiento, 8.8M de visitas mensuales'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 22,
        traffic: '8.8M'
    },
    {
        id: 'chatpdf',
        name: 'ChatPDF',
        category: 'research',
        pricing: 'freemium',
        url: 'https://chatpdf.com',
        description: {
            en: 'Chat with PDF documents using AI, 3.6M monthly visits',
            pt: 'Converse com documentos PDF usando IA, 3.6M de visitas mensais',
            es: 'Chatea con documentos PDF usando IA, 3.6M de visitas mensuales'
        },
        free: true,
        paid: true,
        price: '$5/month',
        rank: 44,
        traffic: '3.6M'
    },
    {
        id: 'consensus',
        name: 'Consensus',
        category: 'research',
        pricing: 'freemium',
        url: 'https://consensus.app',
        description: {
            en: 'AI search engine for scientific research papers and studies',
            pt: 'Motor de busca com IA para artigos de pesquisa científica e estudos',
            es: 'Motor de búsqueda con IA para artículos de investigación científica y estudios'
        },
        free: true,
        paid: true,
        price: '$8.99/month',
        rank: 48,
        traffic: '3.2M'
    },
    {
        id: 'typeset',
        name: 'Typeset',
        category: 'research',
        pricing: 'freemium',
        url: 'https://typeset.io',
        description: {
            en: 'AI research assistant for literature review and paper writing',
            pt: 'Assistente de pesquisa com IA para revisão de literatura e escrita de artigos',
            es: 'Asistente de investigación con IA para revisión de literatura y escritura de artículos'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 57,
        traffic: '3.1M'
    },
    {
        id: 'elicit',
        name: 'Elicit',
        category: 'research',
        pricing: 'freemium',
        url: 'https://elicit.org',
        description: {
            en: 'AI research assistant that finds and summarizes academic papers',
            pt: 'Assistente de pesquisa com IA que encontra e resume artigos acadêmicos',
            es: 'Asistente de investigación con IA que encuentra y resume artículos académicos'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 78,
        traffic: '920K'
    },
    {
        id: 'scite',
        name: 'Scite',
        category: 'research',
        pricing: 'freemium',
        url: 'https://scite.ai',
        description: {
            en: 'Smart citations tool showing how research papers are cited',
            pt: 'Ferramenta de citações inteligentes mostrando como artigos de pesquisa são citados',
            es: 'Herramienta de citas inteligentes que muestra cómo se citan los artículos de investigación'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 79,
        traffic: '850K'
    },
    {
        id: 'scholarcy',
        name: 'Scholarcy',
        category: 'research',
        pricing: 'freemium',
        url: 'https://scholarcy.com',
        description: {
            en: 'AI tool to summarize research papers and extract key findings',
            pt: 'Ferramenta de IA para resumir artigos de pesquisa e extrair descobertas-chave',
            es: 'Herramienta de IA para resumir artículos de investigación y extraer hallazgos clave'
        },
        free: true,
        paid: true,
        price: '$7.99/month',
        rank: 80,
        traffic: '780K'
    },
    
    // MARKETING / SEO (8 more)
    {
        id: 'simplified',
        name: 'Simplified',
        category: 'marketing',
        pricing: 'freemium',
        url: 'https://simplified.com',
        description: {
            en: 'All-in-one AI marketing platform with design, video, and copywriting',
            pt: 'Plataforma de marketing com IA tudo-em-um com design, vídeo e copywriting',
            es: 'Plataforma de marketing con IA todo en uno con diseño, video y copywriting'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 63,
        traffic: '2.4M'
    },
    {
        id: 'surfer',
        name: 'Surfer SEO',
        category: 'marketing',
        pricing: 'paid',
        url: 'https://surferseo.com',
        description: {
            en: 'AI SEO tool for content optimization and keyword research',
            pt: 'Ferramenta de SEO com IA para otimização de conteúdo e pesquisa de palavras-chave',
            es: 'Herramienta de SEO con IA para optimización de contenido e investigación de palabras clave'
        },
        free: false,
        paid: true,
        price: '$69/month',
        rank: 163,
        traffic: '500K'
    },
    {
        id: 'scalenut',
        name: 'Scalenut',
        category: 'marketing',
        pricing: 'freemium',
        url: 'https://scalenut.com',
        description: {
            en: 'AI SEO and content marketing platform with keyword clustering',
            pt: 'Plataforma de SEO e marketing de conteúdo com IA com agrupamento de palavras-chave',
            es: 'Plataforma de SEO y marketing de contenidos con IA con agrupación de palabras clave'
        },
        free: true,
        paid: true,
        price: '$39/month',
        rank: 162,
        traffic: '400K'
    },
    {
        id: 'marketmuse',
        name: 'MarketMuse',
        category: 'marketing',
        pricing: 'paid',
        url: 'https://marketmuse.com',
        description: {
            en: 'AI content intelligence and strategy platform for SEO',
            pt: 'Plataforma de inteligência e estratégia de conteúdo com IA para SEO',
            es: 'Plataforma de inteligencia y estrategia de contenido con IA para SEO'
        },
        free: false,
        paid: true,
        price: '$149/month',
        rank: 164,
        traffic: '300K'
    },
    {
        id: 'clearscope',
        name: 'Clearscope',
        category: 'marketing',
        pricing: 'paid',
        url: 'https://clearscope.io',
        description: {
            en: 'AI content optimization platform for SEO-driven content',
            pt: 'Plataforma de otimização de conteúdo com IA para conteúdo orientado por SEO',
            es: 'Plataforma de optimización de contenido con IA para contenido orientado a SEO'
        },
        free: false,
        paid: true,
        price: '$170/month',
        rank: 165,
        traffic: '250K'
    },
    {
        id: 'neuronwriter',
        name: 'NeuronWriter',
        category: 'marketing',
        pricing: 'freemium',
        url: 'https://neuronwriter.com',
        description: {
            en: 'AI content editor with NLP-based SEO optimization',
            pt: 'Editor de conteúdo com IA com otimização SEO baseada em NLP',
            es: 'Editor de contenido con IA con optimización SEO basada en NLP'
        },
        free: true,
        paid: true,
        price: '$23/month',
        rank: 167,
        traffic: '200K'
    },
    {
        id: 'growthbar',
        name: 'GrowthBar',
        category: 'marketing',
        pricing: 'freemium',
        url: 'https://growthbarseo.com',
        description: {
            en: 'AI SEO tool with keyword research and content generation',
            pt: 'Ferramenta de SEO com IA com pesquisa de palavras-chave e geração de conteúdo',
            es: 'Herramienta de SEO con IA con investigación de palabras clave y generación de contenido'
        },
        free: true,
        paid: true,
        price: '$36/month',
        rank: 168,
        traffic: '150K'
    },
    {
        id: 'outranking',
        name: 'Outranking',
        category: 'marketing',
        pricing: 'freemium',
        url: 'https://outranking.io',
        description: {
            en: 'AI SEO content writing and optimization platform',
            pt: 'Plataforma de escrita e otimização de conteúdo SEO com IA',
            es: 'Plataforma de escritura y optimización de contenido SEO con IA'
        },
        free: true,
        paid: true,
        price: '$49/month',
        rank: 166,
        traffic: '180K'
    },
];

// Categories
const categories = {
    assistant: {
        icon: '💬',
        name: {
            en: 'Virtual Assistant / Chatbot',
            pt: 'Assistente Virtual / Chatbot',
            es: 'Asistente Virtual / Chatbot'
        },
        description: {
            en: 'Chat, answer questions, research information',
            pt: 'Conversar, responder perguntas, pesquisar informações',
            es: 'Chatear, responder preguntas, investigar información'
        }
    },
    programming: {
        icon: '💻',
        name: {
            en: 'Programming / Development',
            pt: 'Programação / Desenvolvimento',
            es: 'Programación / Desarrollo'
        },
        description: {
            en: 'Write code, debug, create applications',
            pt: 'Escrever código, debugar, criar aplicações',
            es: 'Escribir código, depurar, crear aplicaciones'
        }
    },
    writing: {
        icon: '✍️',
        name: {
            en: 'Writing / Copywriting',
            pt: 'Escrita / Copywriting',
            es: 'Escritura / Copywriting'
        },
        description: {
            en: 'Create texts, articles, posts, ads',
            pt: 'Criar textos, artigos, posts, anúncios',
            es: 'Crear textos, artículos, publicaciones, anuncios'
        }
    },
    design: {
        icon: '🎨',
        name: {
            en: 'Design / Images',
            pt: 'Design / Imagens',
            es: 'Diseño / Imágenes'
        },
        description: {
            en: 'Create, edit or generate images and art',
            pt: 'Criar, editar ou gerar imagens e arte',
            es: 'Crear, editar o generar imágenes y arte'
        }
    },
    video: {
        icon: '🎬',
        name: {
            en: 'Video / Editing',
            pt: 'Vídeo / Edição',
            es: 'Video / Edición'
        },
        description: {
            en: 'Create, edit or generate videos',
            pt: 'Criar, editar ou gerar vídeos',
            es: 'Crear, editar o generar videos'
        }
    },
    audio: {
        icon: '🎵',
        name: {
            en: 'Audio / Music / Voice',
            pt: 'Áudio / Música / Voz',
            es: 'Audio / Música / Voz'
        },
        description: {
            en: 'Generate music, narration, transcription',
            pt: 'Gerar música, narração, transcrição',
            es: 'Generar música, narración, transcripción'
        }
    },
    productivity: {
        icon: '📊',
        name: {
            en: 'Productivity / Business',
            pt: 'Produtividade / Negócios',
            es: 'Productividad / Negocios'
        },
        description: {
            en: 'Presentations, spreadsheets, automation, marketing',
            pt: 'Apresentações, planilhas, automação, marketing',
            es: 'Presentaciones, hojas de cálculo, automatización, marketing'
        }
    },
    translation: {
        icon: '🌐',
        name: {
            en: 'Translation / Languages',
            pt: 'Tradução / Idiomas',
            es: 'Traducción / Idiomas'
        },
        description: {
            en: 'Translate texts and documents',
            pt: 'Traduzir textos e documentos',
            es: 'Traducir textos y documentos'
        }
    },
    research: {
        icon: '🔬',
        name: {
            en: 'Research / Academic',
            pt: 'Pesquisa / Acadêmico',
            es: 'Investigación / Académico'
        },
        description: {
            en: 'Research papers, summarize documents',
            pt: 'Pesquisar papers, resumir documentos',
            es: 'Investigar papers, resumir documentos'
        }
    }
};

// Pricing Options
const pricingOptions = {
    free: {
        icon: '🆓',
        name: {
            en: 'Free Only',
            pt: 'Apenas Gratuitas',
            es: 'Solo Gratis'
        },
        description: {
            en: 'Show only 100% free options',
            pt: 'Mostrar apenas opções 100% gratuitas',
            es: 'Mostrar solo opciones 100% gratis'
        }
    },
    freemium: {
        icon: '💎',
        name: {
            en: 'Freemium (Free + Paid)',
            pt: 'Freemium (Grátis + Pago)',
            es: 'Freemium (Gratis + Pago)'
        },
        description: {
            en: 'Tools with free and paid plans',
            pt: 'Ferramentas com planos gratuitos e pagos',
            es: 'Herramientas con planes gratuitos y pagos'
        }
    },
    paid: {
        icon: '💰',
        name: {
            en: 'Paid (Best Quality)',
            pt: 'Pagas (Melhor Qualidade)',
            es: 'Pagadas (Mejor Calidad)'
        },
        description: {
            en: 'Willing to invest in superior quality',
            pt: 'Disposição a investir em qualidade superior',
            es: 'Dispuesto a invertir en calidad superior'
        }
    },
    all: {
        icon: '🤷',
        name: {
            en: 'All / Show Everything',
            pt: 'Todas / Mostrar Tudo',
            es: 'Todas / Mostrar Todo'
        },
        description: {
            en: 'See all available options',
            pt: 'Ver todas as opções disponíveis',
            es: 'Ver todas las opciones disponibles'
        }
    }
};
