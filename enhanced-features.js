// ===== ENHANCED SANTADEVX PORTFOLIO - ADVANCED FEATURES =====

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
            await this.setupTooltipSystem();
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
                        musicToggle.innerHTML = '<i class="fas fa-pause"></i> إيقاف الموسيقى';
                        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                        this.showNotification('تم تشغيل الموسيقى 🎵', 'success');
                    }).catch(e => {
                        console.log('Audio play failed:', e);
                        this.showNotification('لا يمكن تشغيل الموسيقى', 'error');
                    });
                } else {
                    audio.pause();
                    this.isSoundEnabled = false;
                    musicToggle.innerHTML = '<i class="fas fa-music"></i> تشغيل الموسيقى';
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
                    musicToggle.innerHTML = '<i class="fas fa-music"></i> تشغيل الموسيقى';
                } else {
                    audio.play().then(() => {
                        this.isSoundEnabled = true;
                        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
                        musicToggle.innerHTML = '<i class="fas fa-pause"></i> إيقاف الموسيقى';
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
        let isHovering = false;

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
        const trailLength = 10;
        const trails = [];

        for (let i = 0; i < trailLength; i++) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.opacity = (1 - i / trailLength) * 0.5;
            trail.style.transform = `scale(${1 - i / trailLength})`;
            document.body.appendChild(trail);
            trails.push({ element: trail, x: 0, y: 0 });
        }

        let mouseHistory = [];
        document.addEventListener('mousemove', (e) => {
            mouseHistory.push({ x: e.clientX, y: e.clientY });
            if (mouseHistory.length > trailLength) {
                mouseHistory.shift();
            }

            trails.forEach((trail, index) => {
                if (mouseHistory[mouseHistory.length - 1 - index]) {
                    const pos = mouseHistory[mouseHistory.length - 1 - index];
                    trail.element.style.left = pos.x - 2 + 'px';
                    trail.element.style.top = pos.y - 2 + 'px';
                }
            });
        });
    }

    setupCursorInteractions(cursor) {
        // Magnetic effect for interactive elements
        document.querySelectorAll('.btn, .project-card, .skill-category, .nav-link').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                el.style.transform = 'scale(1.05)';
            });

            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                el.style.transform = 'scale(1)';
            });

            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
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

        const particleCount = 50;
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
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 4 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            
            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Bounce off edges
                if (this.x <= 0 || this.x >= window.innerWidth) this.vx *= -1;
                if (this.y <= 0 || this.y >= window.innerHeight) this.vy *= -1;
                
                // Apply position
                this.element.style.left = this.x + 'px';
                this.element.style.top = this.y + 'px';
                this.element.style.width = this.size + 'px';
                this.element.style.height = this.size + 'px';
                this.element.style.opacity = this.opacity;
            }
        };
        
        return particle;
    }

    // ===== MATRIX EFFECT =====
    async setupMatrixEffect() {
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-bg';
        matrixContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.1;
        `;
        document.body.appendChild(matrixContainer);

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

        setInterval(dropChar, 100);
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
        const revealElements = document.querySelectorAll('.skill-category, .project-card, .service-card, .testimonial-card');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px) scale(0.9)';
            el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            revealObserver.observe(el);
        });
    }

    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            parallaxElements.forEach(el => {
                const speed = el.dataset.parallax || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ===== FORM HANDLING & WHATSAPP INTEGRATION =====
    async setupFormHandling() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        // Real-time validation
        this.setupFormValidation();
        
        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }

    setupFormValidation() {
        const inputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'يجب أن يكون الاسم أكثر من حرفين';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'يرجى إدخال بريد إلكتروني صحيح';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'يجب أن تكون الرسالة أكثر من 10 أحرف';
                }
                break;
            case 'projectType':
                if (!value) {
                    isValid = false;
                    errorMessage = 'يرجى اختيار نوع المشروع';
                }
                break;
        }

        this.updateFieldValidation(field, isValid, errorMessage);
        return isValid;
    }

    updateFieldValidation(field, isValid, errorMessage) {
        const errorElement = document.getElementById(field.name + 'Error');
        
        if (isValid) {
            field.classList.remove('invalid');
            field.classList.add('valid');
            if (errorElement) {
                errorElement.classList.remove('visible');
            }
        } else {
            field.classList.remove('valid');
            field.classList.add('invalid');
            if (errorElement) {
                errorElement.textContent = errorMessage;
                errorElement.classList.add('visible');
            }
        }
    }

    clearFieldError(field) {
        field.classList.remove('invalid');
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.classList.remove('visible');
        }
    }

    handleFormSubmission() {
        const formData = this.getFormData();
        
        // Validate all fields
        const isFormValid = this.validateForm();
        
        if (isFormValid) {
            this.showNotification('تم إرسال الرسالة بنجاح! 📧', 'success');
            this.resetForm();
            
            // Optionally send via email service here
            // this.sendEmail(formData);
        } else {
            this.showNotification('يرجى تصحيح الأخطاء في النموذج', 'error');
        }
    }

    getFormData() {
        const form = document.getElementById('contactForm');
        const formData = new FormData(form);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        return data;
    }

    validateForm() {
        const requiredFields = ['name', 'email', 'projectType', 'message'];
        let isValid = true;
        
        requiredFields.forEach(fieldName => {
            const field = document.querySelector(`[name="${fieldName}"]`);
            if (field && !this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    resetForm() {
        const form = document.getElementById('contactForm');
        form.reset();
        
        // Clear validation classes
        const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
        inputs.forEach(input => {
            input.classList.remove('valid', 'invalid');
        });
    }

    // ===== WHATSAPP INTEGRATION =====
    async setupWhatsAppIntegration() {
        const whatsappBtn = document.getElementById('whatsappBtn');
        if (!whatsappBtn) return;

        whatsappBtn.addEventListener('click', () => {
            this.sendToWhatsApp();
        });
    }

    sendToWhatsApp() {
        const formData = this.getFormData();
        
        // Create WhatsApp message
        let message = `*رسالة جديدة من موقع SantaDevX*\n\n`;
        message += `👤 *الاسم:* ${formData.name || 'غير محدد'}\n`;
        message += `📧 *البريد الإلكتروني:* ${formData.email || 'غير محدد'}\n`;
        message += `📱 *رقم الهاتف:* ${formData.phone || 'غير محدد'}\n`;
        message += `🎯 *نوع المشروع:* ${this.getProjectTypeText(formData.projectType)}\n`;
        message += `💰 *الميزانية:* ${this.getBudgetText(formData.budget)}\n\n`;
        message += `📝 *تفاصيل المشروع:*\n${formData.message || 'لم يتم تحديد تفاصيل'}\n\n`;
        message += `⏰ *تاريخ الإرسال:* ${new Date().toLocaleString('ar-EG')}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        this.showNotification('تم فتح واتساب مع الرسالة جاهزة للإرسال! 📱', 'success');
    }

    getProjectTypeText(type) {
        const types = {
            'website': 'تطوير موقع إلكتروني',
            'mobile-app': 'تطوير تطبيق هاتف',
            'security': 'خدمات أمن سيبراني',
            'ai': 'حلول ذكاء اصطناعي',
            'consultation': 'استشارة تقنية',
            'other': 'أخرى'
        };
        return types[type] || 'غير محدد';
    }

    getBudgetText(budget) {
        const budgets = {
            'under-5k': 'أقل من 5,000 ج.م',
            '5k-15k': '5,000 - 15,000 ج.م',
            '15k-30k': '15,000 - 30,000 ج.م',
            '30k-50k': '30,000 - 50,000 ج.م',
            'over-50k': 'أكثر من 50,000 ج.م'
        };
        return budgets[budget] || 'غير محدد';
    }

    // ===== VOICE COMMANDS =====
    async setupVoiceCommands() {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.log('Speech recognition not supported');
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'ar-EG';

        // Create voice control button
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
            background: linear-gradient(45deg, var(--accent), var(--primary));
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: var(--glow-accent);
        `;
        document.body.appendChild(voiceBtn);

        voiceBtn.addEventListener('click', () => {
            recognition.start();
            voiceBtn.style.background = 'linear-gradient(45deg, var(--error), var(--accent))';
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            this.showNotification('استمع... تحدث الآن 🎤', 'info');
        });

        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            this.processVoiceCommand(command);
            voiceBtn.style.background = 'linear-gradient(45deg, var(--accent), var(--primary))';
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        };

        recognition.onerror = (event) => {
            console.log('Speech recognition error:', event.error);
            voiceBtn.style.background = 'linear-gradient(45deg, var(--accent), var(--primary))';
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
            this.showNotification('لم يتم التعرف على الصوت', 'error');
        };
    }

    processVoiceCommand(command) {
        console.log('Voice command:', command);
        
        if (command.includes('مشاريع') || command.includes('projects')) {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('الانتقال إلى قسم المشاريع', 'success');
        } else if (command.includes('تواصل') || command.includes('contact')) {
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('الانتقال إلى قسم التواصل', 'success');
        } else if (command.includes('مهارات') || command.includes('skills')) {
            document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('الانتقال إلى قسم المهارات', 'success');
        } else if (command.includes('خدمات') || command.includes('services')) {
            document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
            this.showNotification('الانتقال إلى قسم الخدمات', 'success');
        } else if (command.includes('ثيم') || command.includes('theme')) {
            document.getElementById('themeToggle').click();
            this.showNotification('تم تغيير الثيم', 'success');
        } else if (command.includes('موسيقى') || command.includes('music')) {
            document.getElementById('musicToggleBtn').click();
        } else {
            this.showNotification('لم يتم التعرف على الأمر', 'warning');
        }
    }

    // ===== GESTURE CONTROLS =====
    async setupGestureControls() {
        let startX, startY, endX, endY;
        let isGesturing = false;

        document.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                isGesturing = true;
            }
        });

        document.addEventListener('touchmove', (e) => {
            if (!isGesturing) return;
            e.preventDefault(); // Prevent scrolling during gesture
        });

        document.addEventListener('touchend', (e) => {
            if (!isGesturing) return;
            
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            
            this.handleGesture(startX, startY, endX, endY);
            isGesturing = false;
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
                this.showNotification('القسم السابق', 'info');
            } else if (deltaX < -minSwipeDistance) {
                // Swipe left - next section
                this.navigateSection(1);
                this.showNotification('القسم التالي', 'info');
            }
        } else {
            if (deltaY > minSwipeDistance) {
                // Swipe down - scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.showNotification('العودة للأعلى', 'info');
            } else if (deltaY < -minSwipeDistance) {
                // Swipe up - scroll to bottom
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                this.showNotification('الانتقال للأسفل', 'info');
            }
        }
    }

    navigateSection(direction) {
        const sections = ['home', 'skills', 'projects', 'services', 'testimonials', 'contact'];
        const currentSection = this.getCurrentSection();
        const currentIndex = sections.indexOf(currentSection);
        const nextIndex = (currentIndex + direction + sections.length) % sections.length;
        
        const targetSection = document.querySelector(`#${sections[nextIndex]}`);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
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

    // ===== NOTIFICATION SYSTEM =====
    async setupNotificationSystem() {
        // Create notification container if it doesn't exist
        let container = document.getElementById('notificationContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notificationContainer';
            container.className = 'notification-container';
            document.body.appendChild(container);
        }
    }

    showNotification(message, type = 'info', duration = 5000) {
        const container = document.getElementById('notificationContainer');
        if (!container) return;

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = this.getNotificationIcon(type);
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;

        container.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);

        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);

        // Add to notifications array
        this.notifications.push({
            message,
            type,
            timestamp: new Date()
        });
    }

    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'error': 'exclamation-triangle',
            'warning': 'exclamation-circle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    // ===== THEME SYSTEM =====
    async setupThemeSystem() {
        const themeToggle = document.getElementById('themeToggle');
        const focusModeToggle = document.getElementById('focusModeToggle');
        
        // Load saved theme
        const savedTheme = localStorage.getItem('santadevx-theme') || 'cyber';
        this.setTheme(savedTheme);

        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.cycleTheme();
            });
        }

        if (focusModeToggle) {
            focusModeToggle.addEventListener('click', () => {
                this.toggleFocusMode();
            });
        }
    }

    cycleTheme() {
        const themes = ['cyber', 'dark', 'light'];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        
        this.setTheme(nextTheme);
        this.showNotification(`تم تغيير الثيم إلى ${this.getThemeNameArabic(nextTheme)}`, 'success');
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('santadevx-theme', theme);
        
        // Update theme toggle icon
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const icons = {
                'cyber': 'fa-rocket',
                'dark': 'fa-moon',
                'light': 'fa-sun'
            };
            themeToggle.innerHTML = `<i class="fas ${icons[theme]}"></i>`;
        }
    }

    getThemeNameArabic(theme) {
        const names = {
            'cyber': 'السايبر',
            'dark': 'الداكن',
            'light': 'الفاتح'
        };
        return names[theme] || theme;
    }

    toggleFocusMode() {
        this.isFocusMode = !this.isFocusMode;
        document.body.classList.toggle('focus-mode', this.isFocusMode);
        
        const focusModeToggle = document.getElementById('focusModeToggle');
        if (focusModeToggle) {
            focusModeToggle.innerHTML = this.isFocusMode ? 
                '<i class="fas fa-eye-slash"></i>' : 
                '<i class="fas fa-eye"></i>';
        }
        
        this.showNotification(
            this.isFocusMode ? 'تم تفعيل وضع التركيز' : 'تم إلغاء وضع التركيز',
            'info'
        );
    }

    // ===== TOOLTIP SYSTEM =====
    async setupTooltipSystem() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target, e.target.dataset.tooltip);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    showTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip-popup';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--surface);
            color: var(--text);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
            white-space: nowrap;
            z-index: 10000;
            border: 1px solid var(--primary);
            box-shadow: var(--glow-primary);
            pointer-events: none;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        this.currentTooltip = tooltip;
    }

    hideTooltip() {
        if (this.currentTooltip) {
            this.currentTooltip.remove();
            this.currentTooltip = null;
        }
    }

    // ===== KEYBOARD SHORTCUTS =====
    async setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + key combinations
            if (e.ctrlKey || e.metaKey) {
                switch (e.key.toLowerCase()) {
                    case '1':
                        e.preventDefault();
                        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
                        this.showNotification('الانتقال للرئيسية', 'info');
                        break;
                    case '2':
                        e.preventDefault();
                        document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
                        this.showNotification('الانتقال للمهارات', 'info');
                        break;
                    case '3':
                        e.preventDefault();
                        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
                        this.showNotification('الانتقال للمشاريع', 'info');
                        break;
                    case '4':
                        e.preventDefault();
                        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                        this.showNotification('الانتقال للتواصل', 'info');
                        break;
                    case 't':
                        e.preventDefault();
                        this.cycleTheme();
                        break;
                    case 'f':
                        e.preventDefault();
                        this.toggleFocusMode();
                        break;
                    case 'm':
                        e.preventDefault();
                        document.getElementById('musicToggleBtn').click();
                        break;
                }
            }
            
            // Escape key
            if (e.key === 'Escape') {
                if (this.isFocusMode) {
                    this.toggleFocusMode();
                }
            }
        });

        // Show shortcuts help
        this.showNotification('اختصارات لوحة المفاتيح: Ctrl+1-4 للتنقل، Ctrl+T للثيم، Ctrl+F للتركيز', 'info', 8000);
    }

    // ===== PERFORMANCE MONITORING =====
    async setupPerformanceMonitoring() {
        // Monitor FPS
        this.monitorFPS();
        
        // Monitor memory usage
        this.monitorMemory();
        
        // Monitor load time
        this.monitorLoadTime();
    }

    monitorFPS() {
        let lastTime = performance.now();
        let frameCount = 0;
        
        const measureFPS = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime >= lastTime + 1000) {
                this.performanceMetrics.fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                frameCount = 0;
                lastTime = currentTime;
                
                // Optimize if FPS is too low
                if (this.performanceMetrics.fps < 30) {
                    this.optimizePerformance();
                }
            }
            
            requestAnimationFrame(measureFPS);
        };
        
        measureFPS();
    }

    monitorMemory() {
        if (performance.memory) {
            setInterval(() => {
                this.performanceMetrics.memoryUsage = performance.memory.usedJSHeapSize / 1048576; // MB
            }, 5000);
        }
    }

    monitorLoadTime() {
        window.addEventListener('load', () => {
            this.performanceMetrics.loadTime = performance.now();
            console.log(`Page loaded in ${this.performanceMetrics.loadTime.toFixed(2)}ms`);
        });
    }

    optimizePerformance() {
        console.log('Optimizing performance...');
        
        // Reduce particle count
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            if (index % 2 === 0) {
                particle.style.display = 'none';
            }
        });
        
        // Reduce animation complexity
        document.body.classList.add('reduced-motion');
        
        this.showNotification('تم تحسين الأداء تلقائياً', 'info');
    }

    // ===== ANIMATIONS =====
    async setupAnimations() {
        // Stagger animations for grids
        this.setupStaggerAnimations();
        
        // Morphing shapes
        this.setupMorphingShapes();
        
        // Breathing animations
        this.setupBreathingAnimations();
        
        // Typewriter effects
        this.setupTypewriterEffects();
    }

    setupStaggerAnimations() {
        const grids = document.querySelectorAll('.skills-grid, .projects-grid, .services-grid');
        
        grids.forEach(grid => {
            const items = Array.from(grid.children);
            items.forEach((item, index) => {
                item.style.animationDelay = (index * 0.1) + 's';
                item.classList.add('fade-in-up');
            });
        });
    }

    setupMorphingShapes() {
        const morphingElements = document.querySelectorAll('.hero-avatar');
        
        morphingElements.forEach(el => {
            setInterval(() => {
                const randomBorderRadius = () => Math.random() * 20 + 40;
                el.style.borderRadius = `${randomBorderRadius()}% ${randomBorderRadius()}% ${randomBorderRadius()}% ${randomBorderRadius()}%`;
            }, 5000);
        });
    }

    setupBreathingAnimations() {
        const breathingElements = document.querySelectorAll('.badge');
        
        breathingElements.forEach((el, index) => {
            el.style.animationDelay = (index * 0.5) + 's';
        });
    }

    setupTypewriterEffects() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(el => {
            const text = el.textContent;
            el.textContent = '';
            el.style.borderRight = '2px solid var(--primary)';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        el.style.borderRight = 'none';
                    }, 1000);
                }
            }, 100);
        });
    }

    // ===== NAVIGATION EFFECTS =====
    async setupNavigationEffects() {
        // Mobile menu toggle (if needed)
        this.setupMobileMenu();
        
        // Navigation hover effects
        this.setupNavHoverEffects();
    }

    setupMobileMenu() {
        // Create mobile menu button if screen is small
        if (window.innerWidth <= 768) {
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.className = 'mobile-menu-toggle';
            mobileMenuBtn.style.cssText = `
                display: block;
                background: transparent;
                border: 2px solid var(--primary);
                color: var(--primary);
                padding: 0.5rem;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1.2rem;
            `;
            
            const navContainer = document.querySelector('.nav-container');
            if (navContainer) {
                navContainer.appendChild(mobileMenuBtn);
                
                mobileMenuBtn.addEventListener('click', () => {
                    const navMenu = document.querySelector('.nav-menu');
                    if (navMenu) {
                        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
                        navMenu.style.flexDirection = 'column';
                        navMenu.style.position = 'absolute';
                        navMenu.style.top = '100%';
                        navMenu.style.left = '0';
                        navMenu.style.right = '0';
                        navMenu.style.background = 'var(--surface)';
                        navMenu.style.padding = '1rem';
                        navMenu.style.borderRadius = '0 0 15px 15px';
                    }
                });
            }
        }
    }

    setupNavHoverEffects() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
            });
        });
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

    // ===== CLEANUP =====
    destroy() {
        // Remove event listeners and clean up
        this.isInitialized = false;
        console.log('Portfolio destroyed');
    }
}

// ===== INITIALIZE PORTFOLIO =====
const portfolio = new EnhancedSantaDevXPortfolio();

// ===== GLOBAL FUNCTIONS =====
window.SantaDevXPortfolio = portfolio;

// ===== CONSOLE EASTER EGG =====
console.log(`
🚀 SantaDevX Portfolio - Enhanced Edition
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Features:
   • Advanced Cursor System
   • Particle Effects
   • Matrix Rain Animation
   • Voice Commands
   • Gesture Controls
   • WhatsApp Integration
   • Performance Monitoring
   • Theme System
   • Notification System
   • Keyboard Shortcuts

🎯 Keyboard Shortcuts:
   • Ctrl+1-4: Navigate sections
   • Ctrl+T: Toggle theme
   • Ctrl+F: Focus mode
   • Ctrl+M: Toggle music
   • ESC: Exit focus mode

💡 Voice Commands (Arabic):
   • "مشاريع" - Go to projects
   • "تواصل" - Go to contact
   • "مهارات" - Go to skills
   • "ثيم" - Change theme

🎨 Themes: Cyber | Dark | Light
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Made with ❤️ by SantaDevX
`);

// ===== KONAMI CODE EASTER EGG =====
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Activate rainbow mode
        document.body.style.animation = 'rainbow 2s infinite';
        portfolio.showNotification('🌈 تم تفعيل وضع قوس قزح! 🌈', 'success');
        
        // Add rainbow keyframes if not exists
        if (!document.querySelector('#rainbow-keyframes')) {
            const style = document.createElement('style');
            style.id = 'rainbow-keyframes';
            style.textContent = `
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }
        
        konamiCode = [];
    }
});

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

