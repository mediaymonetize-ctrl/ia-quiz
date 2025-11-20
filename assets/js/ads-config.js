/**
 * YMonetize Ads Configuration
 * Sistema de configuração de anúncios com lazy loading e tamanhos responsivos
 */

(function() {
    'use strict';

    // Configuração de tamanhos de anúncios baseado na largura da tela
    function getAdSizes() {
        let sizeIds = [];
        const width = window.innerWidth;

        if (width <= 480) {
            // Mobile pequeno
            if (width >= 390) {
                sizeIds = [
                    ['fluid'],
                    [336, 280],
                    [300, 250],
                    [320, 100],
                    [320, 50],
                    [250, 250]
                ];
            } else {
                // Mobile muito pequeno
                sizeIds = [
                    ['fluid'],
                    [300, 250],
                    [320, 100],
                    [320, 50],
                    [250, 250]
                ];
            }
        } else if (width <= 1024) {
            // Tablet
            sizeIds = [
                ['fluid'],
                [336, 280],
                [300, 250],
                [320, 100],
                [320, 50],
                [585, 90]
            ];
        } else {
            // Desktop
            sizeIds = [
                ['fluid'],
                [336, 280],
                [300, 250],
                [585, 90],
                [585, 250],
                [300, 600],
                [160, 600],
                [468, 60],
                [728, 90],
                [970, 90],
                [970, 250]
            ];
        }

        console.log('Formatos de anúncio definidos:', sizeIds);
        return sizeIds;
    }

    // Configuração específica para cada slot de anúncio
    function getAdSlotConfig() {
        const baseSizes = getAdSizes();
        
        return {
            // Header Banner - Topo da página
            'b1': baseSizes,
            
            // Welcome Screen - Após boas-vindas
            'b2': baseSizes,
            
            // Step 1 - Após seleção de categoria
            'b3': baseSizes,
            
            // Step 2 - Após seleção de preço
            'b4': baseSizes,
            
            // Results Top - Antes dos resultados
            'b5': baseSizes,
            
            // Results Bottom - Após resultados
            'b6': baseSizes,
            
            // Sidebar - Desktop only (300x600 prioritário)
            'b7': window.innerWidth > 1024 ? [
                [300, 600],
                [160, 600],
                [300, 250],
                ['fluid']
            ] : baseSizes,
            
            // Native ads dentro dos resultados (criados dinamicamente)
            'b8': baseSizes,  // Após 2ª ferramenta
            'b9': baseSizes,  // Após 5ª ferramenta
            'b10': baseSizes, // Após 8ª ferramenta
            'b11': baseSizes  // Após 11ª ferramenta
        };
    }

    // Intersection Observer para lazy loading de anúncios
    const adObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const adId = entry.target.id;
                const adSlotConfig = getAdSlotConfig();
                const adConfig = adSlotConfig[adId];
                
                if (adConfig && !entry.target.dataset.loaded) {
                    console.log(`Carregando anúncio: ${adId}`);
                    entry.target.dataset.loaded = 'true';
                    
                    // Criar slot de anúncio usando YMonetize
                    if (typeof createAdSlot === 'function') {
                        createAdSlot(adId, 'Anuncia Aquí', adConfig, 0);
                    } else {
                        console.warn('createAdSlot não está disponível. Verifique se ymadserver.min.js foi carregado.');
                    }
                    
                    adObserver.unobserve(entry.target);
                }
            }
        });
    }, {
        root: null,
        rootMargin: '200px', // Carregar anúncios 200px antes de ficarem visíveis
        threshold: 0.1
    });

    // Função para criar anúncios nativos dinamicamente (usado em app.js)
    window.createDynamicAdSlot = function(containerId, slotId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const adSlot = document.createElement('div');
        adSlot.className = 'ad-slot';
        adSlot.id = slotId;
        container.appendChild(adSlot);

        // Observar o novo slot
        adObserver.observe(adSlot);
    };

    // Inicializar observação de anúncios quando DOM estiver pronto
    function initAds() {
        console.log('Inicializando sistema de anúncios YMonetize...');
        
        // Observar todos os slots de anúncio existentes
        document.querySelectorAll('.ad-slot[id^="b"]').forEach(adSlot => {
            console.log(`Observando slot: ${adSlot.id}`);
            adObserver.observe(adSlot);
        });

        // Re-configurar anúncios quando a janela for redimensionada
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                console.log('Janela redimensionada, reconfigurando anúncios...');
                // Recarregar anúncios se necessário
                const newWidth = window.innerWidth;
                console.log('Nova largura:', newWidth);
            }, 250);
        });
    }

    // Inicializar quando DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAds);
    } else {
        initAds();
    }

    // Exportar função para uso global
    window.reinitializeAds = function() {
        console.log('Reinicializando anúncios...');
        document.querySelectorAll('.ad-slot[id^="b"]').forEach(adSlot => {
            if (!adSlot.dataset.loaded) {
                adObserver.observe(adSlot);
            }
        });
    };

})();
