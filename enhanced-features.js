// ===== ENHANCED SANTADEVX PORTFOLIO - COMPLETE FEATURES =====

class EnhancedSantaDevXPortfolio {
    constructor() {
        this.isInitialized = false;
        this.currentTheme = 'cyber';
        this.currentLang = 'ar';
        this.isFocusMode = false;
        this.isSoundEnabled = false;
        this.notifications = [];
        this.whatsappNumber = '+201500461923';
        
        // Performance monitoring
        this.performanceMetrics = {
            fps: 60,
            memoryUsage: 0,
            loadTime: 0
        };
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    // ===== INITIALIZATION =====
    async init() {
        if (this.isInitialized) return;
        
        console.log('🚀 Initializing Enhanced SantaDevX Portfolio...');
        
        try {
            // Core systems
            await this.setupCoreFeatures();
            await this.setupAdvancedCursor();
            await this.setupParticleSystem();
            await this.setupMatrixEffect();
            
            // Interactive features
            await this.setupScrollEffects();
            await this.setupAnimations();
            await this.setupFormHandling();
            await this.setupWhatsAppIntegration();
            
            // Advanced features
            await this.setupVoiceCommands();
            await this.setupGestureControls();
            await this.setupNotificationSystem();
            await this.setupPerformanceMonitoring();
            
            // UI enhancements
            await this.setupThemeSystem();
            await this.setupNavigationEffects();
            await this.setupKeyboardShortcuts();
            
            this.isInitialized = true;
            console.log('✅ Portfolio initialized successfully!');
            
            // Show welcome notification
            this.showNotification('مرحباً بك في محفظة SantaDevX المتطورة! 🚀', 'success');
            
        } catch (error) {
            console.error('❌ Initialization error:', error);
            this.showNotification('حدث خطأ في التحميل، يرجى إعادة تحميل الصفحة', 'error');
        }
    }

    // ===== CORE FEATURES =====
    async setupCoreFeatures() {
        // Stats counter animation
        this.setupStatsCounter();
        
        // Music player
        this.setupMusicPlayer();
        
        // Loading screen
        this.setupLoadingScreen();
        
        // Smooth scrolling for navigation links
        this.setupSmoothScrolling();
    }

    setupStatsCounter() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count);
                    this.animateCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        });

        statNumbers.forEach(stat => observer.observe(stat));
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    setupMusicPlayer() {
        const musicToggle = document.getElementById('musicToggleBtn');
        const soundToggle = document.getElementById('soundToggle');
        const audio = document.getElementById('backgroundMusic');
        
        if (musicToggle && audio) {
            musicToggle.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play().then(() => {
                        this.isSoundEnabled = true;
                        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                        this.showNotification('تم تشغيل الموسيقى 🎵', 'success');
                    }).catch(e => {
                        console.log('Audio play failed:', e);
                        this.showNotification('لا يمكن تشغيل الموسيقى', 'error');
                    });
                } else {
                    audio.pause();
                    this.isSoundEnabled = false;
                    musicToggle.innerHTML = '<i class="fas fa-music"></i>';
                    soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    this.showNotification('تم إيقاف الموسيقى', 'info');
                }
            });
        }

        if (soundToggle) {
            soundToggle.addEventListener('click', () => {
                if (this.isSoundEnabled) {
                    audio.pause();
                    this.isSoundEnabled = false;
                    soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    musicToggle.innerHTML = '<i class="fas fa-music"></i>';
                } else {
                    audio.play().then(() => {
                        this.isSoundEnabled = true;
                        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
                    }).catch(e => console.log('Audio play failed:', e));
                }
            });
        }
    }

    setupLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            // Remove loading screen after everything is loaded
            window.addEventListener('load', () => {
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    document.body.style.overflow = 'visible';
                }, 1500);
            });
        }
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===== ADVANCED CURSOR SYSTEM =====
    async setupAdvancedCursor() {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;

        let mousePos = { x: 0, y: 0 };
        let cursorPos = { x: 0, y: 0 };

        // Mouse movement tracking
        document.addEventListener('mousemove', (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        });

        // Cursor trail effect
        this.createCursorTrail();

        // Enhanced cursor interactions
        this.setupCursorInteractions(cursor);

        // Smooth cursor animation
        const updateCursor = () => {
            cursorPos.x += (mousePos.x - cursorPos.x) * 0.1;
            cursorPos.y += (mousePos.y - cursorPos.y) * 0.1;
            
            cursor.style.left = cursorPos.x - 10 + 'px';
            cursor.style.top = cursorPos.y - 10 + 'px';
            
            requestAnimationFrame(updateCursor);
        };
        updateCursor();
    }

    createCursorTrail() {
        const trailLength = 5;
        const trails = document.querySelectorAll('.cursor-trail');

        let mouseHistory = [];
        document.addEventListener('mousemove', (e) => {
            mouseHistory.push({ x: e.clientX, y: e.clientY });
            if (mouseHistory.length > trailLength) {
                mouseHistory.shift();
            }

            trails.forEach((trail, index) => {
                if (mouseHistory[mouseHistory.length - 1 - index]) {
                    const pos = mouseHistory[mouseHistory.length - 1 - index];
                    trail.style.left = pos.x - 2 + 'px';
                    trail.style.top = pos.y - 2 + 'px';
                    trail.style.opacity = (1 - index / trailLength) * 0.5;
                }
            });
        });
    }

    setupCursorInteractions(cursor) {
        // Magnetic effect for interactive elements
        document.querySelectorAll('.btn, .project-card, .skill-category, .nav-link, .service-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });

            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                el.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
            });

            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0, 0)';
            });
        });

        // Click effect
        document.addEventListener('mousedown', () => cursor.classList.add('click'));
        document.addEventListener('mouseup', () => cursor.classList.remove('click'));
    }

    // ===== PARTICLE SYSTEM =====
    async setupParticleSystem() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const particleCount = 30;
        const particles = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = this.createParticle();
            particlesContainer.appendChild(particle.element);
            particles.push(particle);
        }

        // Animate particles
        const animateParticles = () => {
            particles.forEach(particle => {
                particle.update();
            });
            requestAnimationFrame(animateParticles);
        };
        animateParticles();
    }

    createParticle() {
        const element = document.createElement('div');
        element.className = 'particle';
        
        const particle = {
            element: element,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            vx: (Math.random() - 0.5) * 1,
            vy: -Math.random() * 2 - 1,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            life: 0,
            maxLife: Math.random() * 300 + 200,
            
            update() {
                this.life++;
                this.x += this.vx;
                this.y += this.vy;
                
                // Reset particle when it goes off screen or dies
                if (this.y < -50 || this.life > this.maxLife) {
                    this.x = Math.random() * window.innerWidth;
                    this.y = window.innerHeight + 50;
                    this.life = 0;
                    this.vx = (Math.random() - 0.5) * 1;
                    this.vy = -Math.random() * 2 - 1;
                }
                
                // Apply position and style
                this.element.style.left = this.x + 'px';
                this.element.style.top = this.y + 'px';
                this.element.style.width = this.size + 'px';
                this.element.style.height = this.size + 'px';
                this.element.style.opacity = this.opacity * (1 - this.life / this.maxLife);
            }
        };
        
        return particle;
    }

    // ===== MATRIX EFFECT =====
    async setupMatrixEffect() {
        const matrixContainer = document.getElementById('matrixRain');
        if (!matrixContainer) return;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
        const columns = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columns; i++) {
            this.createMatrixColumn(matrixContainer, chars, i);
        }
    }

    createMatrixColumn(container, chars, columnIndex) {
        const column = document.createElement('div');
        column.style.cssText = `
            position: absolute;
            left: ${columnIndex * 20}px;
            top: 0;
            color: var(--primary);
            font-family: 'JetBrains Mono', monospace;
            font-size: 14px;
            opacity: 0.7;
        `;
        container.appendChild(column);

        const dropChar = () => {
            if (Math.random() > 0.98) {
                const char = document.createElement('div');
                char.textContent = chars[Math.floor(Math.random() * chars.length)];
                char.style.cssText = `
                    animation: matrix-fall ${Math.random() * 3 + 2}s linear forwards;
                    opacity: 0.7;
                `;
                column.appendChild(char);

                setTimeout(() => {
                    if (char.parentNode) {
                        char.parentNode.removeChild(char);
                    }
                }, 5000);
            }
        };

        setInterval(dropChar, 150);
    }

    // ===== SCROLL EFFECTS =====
    async setupScrollEffects() {
        // Navbar scroll effect
        this.setupNavbarScroll();
        
        // Scroll reveal animations
        this.setupScrollReveal();
        
        // Parallax effects
        this.setupParallaxEffects();
    }

    setupNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Active navigation highlighting
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    setupScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, index * 100);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            
            parallaxElements.forEach(el => {
                const speed = el.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ===== ANIMATIONS =====
    async setupAnimations() {
        // Stagger animations for grids
        this.staggerGridAnimations();
        
        // Typewriter effect
        this.setupTypewriterEffect();
        
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
                    // Remove typewriter cursor after completion
                    setTimeout(() => {
                        el.style.borderRight = 'none';
                    }, 1000);
                }
            }, 100);
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

    // ===== FORM HANDLING =====
    async setupFormHandling() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e);
            });
        }
    }

    async handleFormSubmit(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            this.showNotification('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً 📧', 'success');
            e.target.reset();
            
        } catch (error) {
            this.showNotification('حدث خطأ في إرسال الرسالة، يرجى المحاولة مرة أخرى', 'error');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    // ===== WHATSAPP INTEGRATION =====
    async setupWhatsAppIntegration() {
        const whatsappBtn = document.getElementById('whatsappSendBtn');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', () => {
                this.sendWhatsAppMessage();
            });
        }
    }

    sendWhatsAppMessage() {
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        
        const name = formData.get('name') || 'غير محدد';
        const email = formData.get('email') || 'غير محدد';
        const subject = formData.get('subject') || 'غير محدد';
        const message = formData.get('message') || 'غير محدد';
        
        const whatsappMessage = `
🚀 *رسالة جديدة من موقع SantaDevX*

👤 *الاسم:* ${name}
📧 *البريد الإلكتروني:* ${email}
📋 *الموضوع:* ${subject}

💬 *الرسالة:*
${message}

⏰ *تاريخ الإرسال:* ${new Date().toLocaleString('ar-EG')}

---
تم الإرسال من موقع SantaDevX Portfolio
        `.trim();

        const whatsappURL = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        this.showNotification('تم فتح واتساب! أكمل إرسال الرسالة من التطبيق 📱', 'success');
    }

    // ===== VOICE COMMANDS =====
    async setupVoiceCommands() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'ar-EG';

            const voiceBtn = document.createElement('button');
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            voiceBtn.className = 'voice-control-btn';
            voiceBtn.setAttribute('aria-label', 'Voice Control');
            document.body.appendChild(voiceBtn);

            voiceBtn.addEventListener('click', () => {
                recognition.start();
                voiceBtn.classList.add('active');
                this.showNotification('استمع... قل أمرك', 'info');
            });

            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                this.processVoiceCommand(command);
                voiceBtn.classList.remove('active');
            };

            recognition.onerror = () => {
                voiceBtn.classList.remove('active');
                this.showNotification('لم أتمكن من فهم الأمر، حاول مرة أخرى', 'error');
            };

            recognition.onend = () => {
                voiceBtn.classList.remove('active');
            };
        }
    }

    processVoiceCommand(command) {
        console.log('Voice command:', command);
        
        if (command.includes('مشاريع') || command.includes('projects')) {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('تم الانتقال إلى قسم المشاريع', 'success');
        } else if (command.includes('تواصل') || command.includes('contact')) {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('تم الانتقال إلى قسم التواصل', 'success');
        } else if (command.includes('مهارات') || command.includes('skills')) {
            document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('تم الانتقال إلى قسم المهارات', 'success');
        } else if (command.includes('خدمات') || command.includes('services')) {
            document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('تم الانتقال إلى قسم الخدمات', 'success');
        } else if (command.includes('ثيم') || command.includes('theme')) {
            document.getElementById('themeToggle').click();
        } else if (command.includes('موسيقى') || command.includes('music')) {
            document.getElementById('musicToggleBtn').click();
        } else {
            this.showNotification('أمر غير مفهوم. جرب: مشاريع، مهارات، تواصل، خدمات', 'info');
        }
    }

    // ===== GESTURE CONTROLS =====
    async setupGestureControls() {
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
        const sections = ['hero', 'skills', 'projects', 'services', 'testimonials', 'contact'];
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = (currentIndex + direction + sections.length) % sections.length;
        
        document.querySelector(`#${sections[nextIndex]}`).scrollIntoView({ behavior: 'smooth' });
        this.showNotification(`تم الانتقال إلى ${this.getSectionName(sections[nextIndex])}`, 'info');
    }

    getCurrentSection() {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = 'hero';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                currentSection = section.id;
            }
        });
        
        return currentSection;
    }

    getSectionName(sectionId) {
        const names = {
            'hero': 'الرئيسية',
            'skills': 'المهارات',
            'projects': 'المشاريع',
            'services': 'الخدمات',
            'testimonials': 'الشهادات',
            'contact': 'التواصل'
        };
        return names[sectionId] || sectionId;
    }

    // ===== NOTIFICATION SYSTEM =====
    async setupNotificationSystem() {
        this.notificationQueue = [];
        this.isShowingNotification = false;
    }

    showNotification(message, type = 'info', duration = 5000) {
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
        notificationEl.className = `notification ${notification.type}`;
        notificationEl.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${this.getNotificationIcon(notification.type)}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-message">${notification.message}</div>
            </div>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;

        document.body.appendChild(notificationEl);

        // Animate in
        setTimeout(() => {
            notificationEl.classList.add('show');
        }, 100);

        // Close button functionality
        const closeBtn = notificationEl.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            this.hideNotification(notificationEl);
        });

        // Auto hide
        setTimeout(() => {
            this.hideNotification(notificationEl);
        }, notification.duration);
    }

    hideNotification(notificationEl) {
        notificationEl.classList.remove('show');
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
            'success': 'check-circle',
            'error': 'exclamation-circle',
            'info': 'info-circle',
            'warning': 'exclamation-triangle'
        };
        return icons[type] || 'info-circle';
    }

    // ===== PERFORMANCE MONITORING =====
    async setupPerformanceMonitoring() {
        // Monitor FPS
        let lastTime = performance.now();
        let frameCount = 0;

        const measureFPS = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                this.performanceMetrics.fps = frameCount;
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(measureFPS);
        };
        measureFPS();

        // Monitor memory usage
        if ('memory' in performance) {
            setInterval(() => {
                this.performanceMetrics.memoryUsage = performance.memory.usedJSHeapSize;
            }, 5000);
        }

        // Monitor load time
        window.addEventListener('load', () => {
            this.performanceMetrics.loadTime = performance.now();
            console.log('📊 Performance Metrics:', this.performanceMetrics);
        });
    }

    // ===== THEME SYSTEM =====
    async setupThemeSystem() {
        const themeToggle = document.getElementById('themeToggle');
        const langToggle = document.getElementById('langToggle');

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        if (langToggle) {
            langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('santadevx-theme');
        if (savedTheme) {
            this.currentTheme = savedTheme;
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }

    toggleTheme() {
        const themes = ['cyber', 'dark', 'light'];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        
        this.currentTheme = themes[nextIndex];
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('santadevx-theme', this.currentTheme);
        
        const themeNames = {
            'cyber': 'السايبر',
            'dark': 'الداكن',
            'light': 'الفاتح'
        };
        
        this.showNotification(`تم تغيير الثيم إلى ${themeNames[this.currentTheme]} 🎨`, 'success');
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar';
        document.documentElement.setAttribute('lang', this.currentLang);
        document.documentElement.setAttribute('dir', this.currentLang === 'ar' ? 'rtl' : 'ltr');
        
        this.showNotification(`Language changed to ${this.currentLang === 'ar' ? 'العربية' : 'English'} 🌐`, 'success');
    }

    // ===== NAVIGATION EFFECTS =====
    async setupNavigationEffects() {
        // Mobile menu toggle (if needed)
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navMenu = document.querySelector('.nav-menu');

        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu) navMenu.classList.remove('active');
                if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // ===== KEYBOARD SHORTCUTS =====
    async setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Only handle shortcuts when not typing in inputs
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch (e.key) {
                case '1':
                    document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '2':
                    document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '3':
                    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '4':
                    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '5':
                    document.querySelector('#testimonials').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '6':
                    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 't':
                case 'T':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.toggleTheme();
                    }
                    break;
                case 'm':
                case 'M':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        document.getElementById('musicToggleBtn').click();
                    }
                    break;
                case 'Escape':
                    // Close any open modals or notifications
                    document.querySelectorAll('.notification').forEach(notification => {
                        this.hideNotification(notification);
                    });
                    break;
            }
        });

        // Show keyboard shortcuts help
        document.addEventListener('keydown', (e) => {
            if (e.key === '?' && e.shiftKey) {
                this.showKeyboardShortcuts();
            }
        });
    }

    showKeyboardShortcuts() {
        const shortcuts = `
⌨️ اختصارات لوحة المفاتيح:

🔢 الأرقام 1-6: الانتقال بين الأقسام
Ctrl+T: تغيير الثيم
Ctrl+M: تشغيل/إيقاف الموسيقى
Shift+?: عرض هذه المساعدة
Esc: إغلاق الإشعارات

💡 نصيحة: استخدم الأوامر الصوتية أيضاً!
        `;
        
        this.showNotification(shortcuts, 'info', 10000);
    }

    // ===== UTILITY METHODS =====
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

    // ===== ERROR HANDLING =====
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);
        this.showNotification(`حدث خطأ في ${context}. يرجى إعادة تحميل الصفحة.`, 'error');
    }
}

// ===== CSS KEYFRAMES FOR MATRIX EFFECT =====
const matrixStyles = document.createElement('style');
matrixStyles.textContent = `
@keyframes matrix-fall {
    0% {
        transform: translateY(-100vh);
        opacity: 1;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 0.8;
    }
    100% {
        transform: translateY(100vh);
        opacity: 0;
    }
}

@keyframes bounce-in-anim {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.bounce-in {
    animation: bounce-in-anim 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
`;
document.head.appendChild(matrixStyles);

// ===== INITIALIZE PORTFOLIO =====
document.addEventListener('DOMContentLoaded', () => {
    window.santaDevXPortfolio = new EnhancedSantaDevXPortfolio();
});

// ===== GLOBAL ERROR HANDLER =====
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    if (window.santaDevXPortfolio) {
        window.santaDevXPortfolio.handleError(e.error, 'Global');
    }
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedSantaDevXPortfolio;
}

