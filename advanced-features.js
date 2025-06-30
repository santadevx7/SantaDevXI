// ===== ADVANCED INTERACTIVE FEATURES =====

class SantaDevXPortfolio {
    constructor() {
        this.init();
        this.setupAdvancedFeatures();
        this.setupMatrixEffect();
        this.setupMagneticElements();
        this.setupTiltEffect();
        this.setupParallaxScrolling();
        this.setupAdvancedAnimations();
    }

    init() {
        console.log('🚀 Initializing SantaDevX Advanced Portfolio...');
        this.setupEventListeners();
        this.createAdvancedCursor();
        this.setupScrollReveal();
        this.setupTypewriterEffect();
    }

    // ===== ADVANCED CURSOR SYSTEM =====
    createAdvancedCursor() {
        const cursor = document.querySelector('.cursor');
        const cursorTrails = document.querySelectorAll('.cursor-trail');
        
        let mousePos = { x: 0, y: 0 };
        let cursorPos = { x: 0, y: 0 };
        let isHovering = false;

        document.addEventListener('mousemove', (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        });

        // Enhanced cursor with magnetic effect
        document.querySelectorAll('.btn, .project-card, .skill-category').forEach(el => {
            el.addEventListener('mouseenter', () => {
                isHovering = true;
                cursor.style.transform = 'scale(2)';
                cursor.style.mixBlendMode = 'difference';
            });

            el.addEventListener('mouseleave', () => {
                isHovering = false;
                cursor.style.transform = 'scale(1)';
                cursor.style.mixBlendMode = 'normal';
            });

            el.addEventListener('mousemove', (e) => {
                if (isHovering) {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                }
            });
        });

        function updateCursor() {
            cursorPos.x += (mousePos.x - cursorPos.x) * 0.1;
            cursorPos.y += (mousePos.y - cursorPos.y) * 0.1;
            
            cursor.style.left = cursorPos.x - 10 + 'px';
            cursor.style.top = cursorPos.y - 10 + 'px';
            
            requestAnimationFrame(updateCursor);
        }
        updateCursor();
    }

    // ===== MATRIX RAIN EFFECT =====
    setupMatrixEffect() {
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-bg';
        document.body.appendChild(matrixContainer);

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        const columns = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columns; i++) {
            this.createMatrixColumn(matrixContainer, chars, i);
        }
    }

    createMatrixColumn(container, chars, columnIndex) {
        const column = document.createElement('div');
        column.style.position = 'absolute';
        column.style.left = columnIndex * 20 + 'px';
        column.style.top = '0';
        container.appendChild(column);

        setInterval(() => {
            if (Math.random() > 0.98) {
                const char = document.createElement('div');
                char.className = 'matrix-char';
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                char.style.animationDuration = (Math.random() * 3 + 2) + 's';
                column.appendChild(char);

                setTimeout(() => {
                    if (char.parentNode) {
                        char.parentNode.removeChild(char);
                    }
                }, 5000);
            }
        }, 100);
    }

    // ===== MAGNETIC HOVER EFFECTS =====
    setupMagneticElements() {
        document.querySelectorAll('.magnetic').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                el.style.setProperty('--x', x * 0.3 + 'px');
                el.style.setProperty('--y', y * 0.3 + 'px');
            });

            el.addEventListener('mouseleave', () => {
                el.style.setProperty('--x', '0px');
                el.style.setProperty('--y', '0px');
            });
        });
    }

    // ===== 3D TILT EFFECT =====
    setupTiltEffect() {
        document.querySelectorAll('.tilt').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -10;
                const rotateY = (x - centerX) / centerX * 10;
                
                el.style.setProperty('--rotate-x', rotateX + 'deg');
                el.style.setProperty('--rotate-y', rotateY + 'deg');
            });

            el.addEventListener('mouseleave', () => {
                el.style.setProperty('--rotate-x', '0deg');
                el.style.setProperty('--rotate-y', '0deg');
            });
        });
    }

    // ===== PARALLAX SCROLLING =====
    setupParallaxScrolling() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach(el => {
                const speed = el.dataset.parallax;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ===== SCROLL REVEAL ANIMATIONS =====
    setupScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ===== TYPEWRITER EFFECT =====
    setupTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(el => {
            const text = el.textContent;
            el.textContent = '';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100);
        });
    }

    // ===== ADVANCED ANIMATIONS =====
    setupAdvancedAnimations() {
        // Stagger animations for grids
        this.staggerGridAnimations();
        
        // Morphing shapes
        this.setupMorphingShapes();
        
        // Glitch effects
        this.setupGlitchEffects();
        
        // Breathing animations
        this.setupBreathingAnimations();
    }

    staggerGridAnimations() {
        const grids = document.querySelectorAll('.skills-grid, .projects-grid, .services-grid');
        
        grids.forEach(grid => {
            const items = grid.children;
            Array.from(items).forEach((item, index) => {
                item.style.animationDelay = (index * 0.1) + 's';
                item.classList.add('bounce-in');
            });
        });
    }

    setupMorphingShapes() {
        document.querySelectorAll('.liquid-morph').forEach(el => {
            setInterval(() => {
                const randomBorderRadius = () => Math.random() * 50 + 25;
                el.style.borderRadius = `${randomBorderRadius()}% ${randomBorderRadius()}% ${randomBorderRadius()}% ${randomBorderRadius()}% / ${randomBorderRadius()}% ${randomBorderRadius()}% ${randomBorderRadius()}% ${randomBorderRadius()}%`;
            }, 3000);
        });
    }

    setupGlitchEffects() {
        document.querySelectorAll('.glitch').forEach(el => {
            el.setAttribute('data-text', el.textContent);
            
            setInterval(() => {
                if (Math.random() > 0.95) {
                    el.classList.add('glitch-active');
                    setTimeout(() => {
                        el.classList.remove('glitch-active');
                    }, 200);
                }
            }, 2000);
        });
    }

    setupBreathingAnimations() {
        document.querySelectorAll('.breathing').forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.animationPlayState = 'paused';
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.animationPlayState = 'running';
            });
        });
    }

    // ===== ADVANCED FEATURES =====
    setupAdvancedFeatures() {
        this.setupVoiceCommands();
        this.setupGestureControls();
        this.setupAdvancedNotifications();
        this.setupPerformanceMonitoring();
    }

    // ===== VOICE COMMANDS =====
    setupVoiceCommands() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'ar-EG';

            const voiceBtn = document.createElement('button');
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.className = 'voice-control-btn';
            voiceBtn.style.cssText = `
                position: fixed;
                bottom: 100px;
                left: 30px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: var(--primary);
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                z-index: 1000;
                transition: all 0.3s ease;
            `;
            document.body.appendChild(voiceBtn);

            voiceBtn.addEventListener('click', () => {
                recognition.start();
                voiceBtn.style.background = 'var(--accent)';
            });

            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                this.processVoiceCommand(command);
                voiceBtn.style.background = 'var(--primary)';
            };

            recognition.onerror = () => {
                voiceBtn.style.background = 'var(--primary)';
            };
        }
    }

    processVoiceCommand(command) {
        if (command.includes('مشاريع') || command.includes('projects')) {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        } else if (command.includes('تواصل') || command.includes('contact')) {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        } else if (command.includes('مهارات') || command.includes('skills')) {
            document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
        } else if (command.includes('ثيم') || command.includes('theme')) {
            document.getElementById('themeToggle').click();
        }
    }

    // ===== GESTURE CONTROLS =====
    setupGestureControls() {
        let startX, startY, endX, endY;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleGesture(startX, startY, endX, endY);
        });
    }

    handleGesture(startX, startY, endX, endY) {
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const minSwipeDistance = 50;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > minSwipeDistance) {
                // Swipe right - previous section
                this.navigateSection(-1);
            } else if (deltaX < -minSwipeDistance) {
                // Swipe left - next section
                this.navigateSection(1);
            }
        }
    }

    navigateSection(direction) {
        const sections = ['home', 'skills', 'projects', 'services', 'testimonials', 'contact'];
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = (currentIndex + direction + sections.length) % sections.length;
        
        document.querySelector(`#${sections[nextIndex]}`).scrollIntoView({ behavior: 'smooth' });
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = 'home';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
        });
        
        return currentSection;
    }

    // ===== ADVANCED NOTIFICATIONS =====
    setupAdvancedNotifications() {
        this.notificationQueue = [];
        this.isShowingNotification = false;
    }

    showAdvancedNotification(message, type = 'info', duration = 5000) {
        const notification = {
            message,
            type,
            duration,
            id: Date.now()
        };

        this.notificationQueue.push(notification);
        this.processNotificationQueue();
    }

    processNotificationQueue() {
        if (this.isShowingNotification || this.notificationQueue.length === 0) return;

        this.isShowingNotification = true;
        const notification = this.notificationQueue.shift();
        this.displayNotification(notification);
    }

    displayNotification(notification) {
        const notificationEl = document.createElement('div');
        notificationEl.className = `advanced-notification notification-${notification.type}`;
        notificationEl.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${this.getNotificationIcon(notification.type)}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-message">${notification.message}</div>
                <div class="notification-progress"></div>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Styling
        notificationEl.style.cssText = `
            position: fixed;
            top: 100px;
            right: -400px;
            width: 350px;
            background: var(--surface);
            border: 2px solid var(--${notification.type === 'success' ? 'secondary' : notification.type === 'error' ? 'accent' : 'primary'});
            border-radius: 15px;
            padding: 1rem;
            color: var(--text);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            gap: 1rem;
        `;

        document.body.appendChild(notificationEl);

        // Animate in
        setTimeout(() => {
            notificationEl.style.right = '20px';
        }, 100);

        // Progress bar animation
        const progressBar = notificationEl.querySelector('.notification-progress');
        progressBar.style.cssText = `
            width: 100%;
            height: 3px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            margin-top: 0.5rem;
            overflow: hidden;
        `;

        const progress = document.createElement('div');
        progress.style.cssText = `
            width: 100%;
            height: 100%;
            background: var(--${notification.type === 'success' ? 'secondary' : notification.type === 'error' ? 'accent' : 'primary'});
            transform: translateX(-100%);
            transition: transform ${notification.duration}ms linear;
        `;
        progressBar.appendChild(progress);

        setTimeout(() => {
            progress.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove
        const autoRemove = setTimeout(() => {
            this.removeNotification(notificationEl);
        }, notification.duration);

        // Manual close
        notificationEl.querySelector('.notification-close').addEventListener('click', () => {
            clearTimeout(autoRemove);
            this.removeNotification(notificationEl);
        });
    }

    removeNotification(notificationEl) {
        notificationEl.style.right = '-400px';
        setTimeout(() => {
            if (notificationEl.parentNode) {
                notificationEl.parentNode.removeChild(notificationEl);
            }
            this.isShowingNotification = false;
            this.processNotificationQueue();
        }, 300);
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'check-circle',
            error: 'exclamation-circle',
            warning: 'exclamation-triangle',
            info: 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    // ===== PERFORMANCE MONITORING =====
    setupPerformanceMonitoring() {
        // Monitor FPS
        let fps = 0;
        let lastTime = performance.now();
        
        const fpsCounter = () => {
            const currentTime = performance.now();
            fps = Math.round(1000 / (currentTime - lastTime));
            lastTime = currentTime;
            
            if (fps < 30) {
                this.optimizePerformance();
            }
            
            requestAnimationFrame(fpsCounter);
        };
        
        fpsCounter();

        // Monitor memory usage
        if (performance.memory) {
            setInterval(() => {
                const memoryUsage = performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit;
                if (memoryUsage > 0.8) {
                    this.cleanupMemory();
                }
            }, 30000);
        }
    }

    optimizePerformance() {
        // Reduce particle count
        const particles = document.querySelectorAll('.particle');
        if (particles.length > 20) {
            for (let i = 20; i < particles.length; i++) {
                particles[i].remove();
            }
        }

        // Disable some animations on low-end devices
        if (fps < 20) {
            document.body.classList.add('low-performance');
        }
    }

    cleanupMemory() {
        // Remove old particles
        const oldParticles = document.querySelectorAll('.particle');
        oldParticles.forEach(particle => {
            if (particle.style.opacity < 0.1) {
                particle.remove();
            }
        });

        // Clear notification queue
        this.notificationQueue = this.notificationQueue.slice(-5);
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Window resize handler
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));

        // Visibility change handler
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAnimations();
            } else {
                this.resumeAnimations();
            }
        });

        // Online/offline handlers
        window.addEventListener('online', () => {
            this.showAdvancedNotification('تم استعادة الاتصال بالإنترنت', 'success');
        });

        window.addEventListener('offline', () => {
            this.showAdvancedNotification('تم فقدان الاتصال بالإنترنت', 'warning');
        });
    }

    handleResize() {
        // Recalculate particle positions
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.left = Math.random() * window.innerWidth + 'px';
        });

        // Update matrix effect
        const matrixBg = document.querySelector('.matrix-bg');
        if (matrixBg) {
            matrixBg.innerHTML = '';
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
            const columns = Math.floor(window.innerWidth / 20);
            
            for (let i = 0; i < columns; i++) {
                this.createMatrixColumn(matrixBg, chars, i);
            }
        }
    }

    pauseAnimations() {
        document.querySelectorAll('*').forEach(el => {
            const computedStyle = window.getComputedStyle(el);
            if (computedStyle.animationName !== 'none') {
                el.style.animationPlayState = 'paused';
            }
        });
    }

    resumeAnimations() {
        document.querySelectorAll('*').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }

    // ===== UTILITY FUNCTIONS =====
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ===== INITIALIZE PORTFOLIO =====
document.addEventListener('DOMContentLoaded', () => {
    const portfolio = new SantaDevXPortfolio();
    
    // Make it globally accessible for debugging
    window.SantaDevXPortfolio = portfolio;
    
    console.log('🎉 SantaDevX Advanced Portfolio Initialized Successfully!');
});

// ===== ADDITIONAL UTILITY FUNCTIONS =====

// Smooth scroll to element with offset
function smoothScrollTo(element, offset = 80) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Generate random color
function getRandomColor() {
    const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Copy text to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
}

// Get device type
function getDeviceType() {
    const userAgent = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
        return 'tablet';
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
        return 'mobile';
    }
    return 'desktop';
}

// Check if user prefers reduced motion
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Generate UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Export functions for global use
window.portfolioUtils = {
    smoothScrollTo,
    getRandomColor,
    isInViewport,
    formatNumber,
    copyToClipboard,
    getDeviceType,
    prefersReducedMotion,
    generateUUID
};

