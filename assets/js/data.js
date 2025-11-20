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
            en: 'AI video generation and editing platform with Gen-2',
            pt: 'Plataforma de geração e edição de vídeo com IA com Gen-2',
            es: 'Plataforma de generación y edición de video con IA con Gen-2'
        },
        free: true,
        paid: true,
        price: '$12/month',
        rank: 26,
        traffic: '1.9M'
    },
    {
        id: 'invideo',
        name: 'InVideo',
        category: 'video',
        pricing: 'freemium',
        url: 'https://invideo.io',
        description: {
            en: 'AI video creation platform with text-to-video capabilities',
            pt: 'Plataforma de criação de vídeo com IA com capacidades de texto para vídeo',
            es: 'Plataforma de creación de video con IA con capacidades de texto a video'
        },
        free: true,
        paid: true,
        price: '$20/month',
        rank: 25,
        traffic: '2M'
    },
    {
        id: 'synthesia',
        name: 'Synthesia',
        category: 'video',
        pricing: 'paid',
        url: 'https://synthesia.io',
        description: {
            en: 'AI video generation with realistic avatars and voices',
            pt: 'Geração de vídeo com IA com avatares e vozes realistas',
            es: 'Generación de video con IA con avatares y voces realistas'
        },
        free: false,
        paid: true,
        price: '$22/month',
        rank: 39,
        traffic: '591.3K'
    },

    // AUDIO / MUSIC / VOICE
    {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://elevenlabs.io',
        description: {
            en: 'Realistic AI voice generation and text-to-speech',
            pt: 'Geração de voz com IA realista e texto para fala',
            es: 'Generación de voz con IA realista y texto a voz'
        },
        free: true,
        paid: true,
        price: '$5/month',
        rank: 19,
        traffic: '3.5M'
    },
    {
        id: 'suno',
        name: 'Suno',
        category: 'audio',
        pricing: 'freemium',
        url: 'https://suno.ai',
        description: {
            en: 'AI music generation from text prompts',
            pt: 'Geração de música com IA a partir de prompts de texto',
            es: 'Generación de música con IA a partir de prompts de texto'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 16,
        traffic: '4M'
    },
    {
        id: 'murf',
        name: 'Murf.ai',
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
        rank: 49,
        traffic: '352.1K'
    },

    // PRODUCTIVITY / BUSINESS
    {
        id: 'gamma',
        name: 'Gamma',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://gamma.app',
        description: {
            en: 'AI-powered presentation and document creation',
            pt: 'Criação de apresentações e documentos com IA',
            es: 'Creación de presentaciones y documentos con IA'
        },
        free: true,
        paid: true,
        price: '$10/month',
        rank: 17,
        traffic: '3.9M'
    },
    {
        id: 'zapier',
        name: 'Zapier',
        category: 'productivity',
        pricing: 'freemium',
        url: 'https://zapier.com',
        description: {
            en: 'Workflow automation with AI-powered integrations',
            pt: 'Automação de fluxo de trabalho com integrações com IA',
            es: 'Automatización de flujo de trabajo con integraciones con IA'
        },
        free: true,
        paid: true,
        price: '$19.99/month',
        rank: 15,
        traffic: '4.4M'
    },
    {
        id: 'notebooklm',
        name: 'NotebookLM',
        category: 'productivity',
        pricing: 'free',
        url: 'https://notebooklm.google.com',
        description: {
            en: 'Google\'s AI research assistant for notes and documents',
            pt: 'Assistente de pesquisa com IA do Google para notas e documentos',
            es: 'Asistente de investigación con IA de Google para notas y documentos'
        },
        free: true,
        paid: false,
        price: 'Free',
        rank: 42,
        traffic: '473.6K'
    },

    // TRANSLATION
    {
        id: 'deepl',
        name: 'DeepL',
        category: 'translation',
        pricing: 'freemium',
        url: 'https://deepl.com',
        description: {
            en: 'High-quality AI translation in 31 languages',
            pt: 'Tradução com IA de alta qualidade em 31 idiomas',
            es: 'Traducción con IA de alta calidad en 31 idiomas'
        },
        free: true,
        paid: true,
        price: '$8.74/month',
        rank: 3,
        traffic: '167M'
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
        rank: 29,
        traffic: '1.5M'
    }
];

// Categories Configuration
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
