// ISRO Website JavaScript
// Comprehensive functionality for mission management, UI interactions, and accessibility

class ISROWebsite {
    constructor() {
        this.upcomingMissions = [];
        this.spacecraftMissions = [];
        this.currentModal = null;
        this.init();
    }

    init() {
        this.loadInitialData();
        this.bindEvents();
        this.initializeFeatures();
        this.updateLastModified();
    }

    // Initialize sample data
    loadInitialData() {
        // Sample upcoming missions
        this.upcomingMissions = [
            {
                id: 'gaganyaan-1',
                name: 'Gaganyaan',
                description: 'India\'s first human spaceflight program aimed at sending a crew of three astronauts to space for a seven-day mission.',
                launchDate: '2025-12-15',
                objective: 'Demonstrate India\'s human spaceflight capability and conduct microgravity experiments.',
                launchVehicle: 'GSLV Mk III',
                orbitType: 'LEO',
                application: 'Human Spaceflight'
            },
            {
                id: 'nisar-1',
                name: 'NISAR',
                description: 'NASA-ISRO Synthetic Aperture Radar mission for comprehensive Earth observation and climate monitoring.',
                launchDate: '2025-03-30',
                objective: 'Monitor natural disasters, ecosystem changes, and ice sheet dynamics using advanced radar technology.',
                launchVehicle: 'GSLV Mk II',
                orbitType: 'SSO',
                application: 'Earth Observation'
            },
            {
                id: 'shukrayaan-1',
                name: 'Shukrayaan-1',
                description: 'India\'s first mission to Venus to study the planet\'s atmosphere and surface characteristics.',
                launchDate: '2026-06-20',
                objective: 'Study Venus\' atmosphere, surface composition, and geological features.',
                launchVehicle: 'GSLV Mk III',
                orbitType: 'Venus Orbit',
                application: 'Planetary Science'
            }
        ];

        // Sample spacecraft missions (completed)
        this.spacecraftMissions = [
            {
                id: 131,
                name: 'EOS-09',
                launchDate: 'May 18, 2025',
                launchVehicle: 'PSLV-C61/EOS-09 Mission',
                orbitType: '',
                application: '',
                remarks: 'Not accomplished',
                description: 'Earth Observation Satellite for monitoring natural resources and disaster management.',
                payload: 'Electro-optical imaging payload with high-resolution cameras',
                technicalDetails: 'Advanced multi-spectral imaging capabilities for agriculture and forestry monitoring',
                missionObjective: 'Provide high-resolution Earth imagery for various applications',
                links: {
                    brochure: '#',
                    video: '#',
                    tracking: '#',
                    gallery: '#'
                }
            },
            {
                id: 130,
                name: 'NVS-02',
                launchDate: 'Jan 29, 2025',
                launchVehicle: 'GSLV-F15/NVS-02 MISSION',
                orbitType: 'GTO (Geosynchronous Transfer Orbit)',
                application: 'Navigation',
                remarks: 'Accomplished',
                description: 'Second satellite in the Navigation with Indian Constellation (NavIC) series for enhanced positioning services.',
                payload: 'L1, L5, and S-band navigation payloads',
                technicalDetails: 'Atomic clocks with accuracy better than 1 nanosecond, coverage over Indian subcontinent',
                missionObjective: 'Provide accurate position, navigation and timing services over India and region extending 1500 km beyond Indian boundary',
                successReport: 'Successfully deployed and operational, providing enhanced navigation services across the Indian region.',
                links: {
                    brochure: '#nvs-02-brochure.pdf',
                    video: '#nvs-02-launch-video',
                    tracking: '#nvs-02-tracking',
                    gallery: '#nvs-02-gallery'
                }
            },
            {
                id: 129,
                name: 'SPADEX-A',
                launchDate: 'Dec 30, 2024',
                launchVehicle: 'PSLV C60/SPADEX Mission',
                orbitType: 'LEO',
                application: 'Technology Demonstration',
                remarks: 'Accomplished',
                description: 'Space Docking Experiment to demonstrate autonomous docking capabilities in space.',
                payload: 'Docking mechanisms, sensors, and control systems',
                technicalDetails: 'Advanced guidance, navigation and control systems for autonomous spacecraft docking',
                missionObjective: 'Demonstrate in-space docking technology for future space missions',
                links: {
                    brochure: '#',
                    video: '#',
                    tracking: '#',
                    gallery: '#'
                }
            },
            {
                id: 128,
                name: 'SPADEX-B',
                launchDate: 'Dec 30, 2024',
                launchVehicle: 'PSLV C60/SPADEX Mission',
                orbitType: 'LEO',
                application: 'Technology Demonstration',
                remarks: 'Accomplished',
                description: 'Companion satellite for SPADEX-A to complete the docking demonstration.',
                payload: 'Complementary docking mechanisms and communication systems',
                technicalDetails: 'Works in conjunction with SPADEX-A to demonstrate autonomous docking',
                missionObjective: 'Complete the space docking experiment with SPADEX-A',
                links: {
                    brochure: '#',
                    video: '#',
                    tracking: '#',
                    gallery: '#'
                }
            },
            {
                id: 127,
                name: 'Proba-3',
                launchDate: 'Dec 05, 2024',
                launchVehicle: 'PSLV-C59/Proba-3 Mission',
                orbitType: 'HEO',
                application: 'Scientific',
                remarks: 'Accomplished',
                description: 'European Space Agency mission launched by ISRO to demonstrate precision formation flying.',
                payload: 'Coronagraph and occulter spacecraft',
                technicalDetails: 'Two spacecraft flying in precise formation to create artificial solar eclipse',
                missionObjective: 'Study the Sun\'s corona through artificial eclipse technology',
                links: {
                    brochure: '#',
                    video: '#',
                    tracking: '#',
                    gallery: '#'
                }
            }
        ];

        this.renderUpcomingMissions();
        this.renderSpacecraftMissions();
    }

    // Event binding
    bindEvents() {
        // Font size controls
        document.querySelectorAll('.font-size').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFontSize(e));
        });

        // Video controls
        const playPauseBtn = document.getElementById('playPauseBtn');
        const muteBtn = document.getElementById('muteBtn');
        const video = document.querySelector('.hero-section video');

        if (playPauseBtn && video) {
            playPauseBtn.addEventListener('click', () => this.toggleVideoPlayPause(video, playPauseBtn));
        }

        if (muteBtn && video) {
            muteBtn.addEventListener('click', () => this.toggleVideoMute(video, muteBtn));
        }

        // Navigation dropdown mobile handling
        this.initMobileNavigation();

        // Modal handling
        this.initModalHandling();

        // Add project functionality
        const addProjectBtn = document.getElementById('addProjectBtn');
        if (addProjectBtn) {
            addProjectBtn.addEventListener('click', () => this.openAddProjectModal());
        }

        // Search and filter functionality
        this.initSearchAndFilter();

        // Form submission
        const addProjectForm = document.getElementById('addProjectForm');
        if (addProjectForm) {
            addProjectForm.addEventListener('submit', (e) => this.handleAddProject(e));
        }

        // Search form
        const searchForm = document.querySelector('.search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => this.handleSearch(e));
        }
    }

    // Initialize additional features
    initializeFeatures() {
        this.initSmoothScrolling();
        this.initScrollAnimations();
        this.initAccessibilityFeatures();
    }

    // Font size control
    handleFontSize(e) {
        const size = e.target.dataset.size;
        const body = document.body;
        
        body.classList.remove('font-large', 'font-small');
        
        switch(size) {
            case 'increase':
                body.classList.add('font-large');
                break;
            case 'decrease':
                body.classList.add('font-small');
                break;
            case 'normal':
            default:
                // Default size, no class needed
                break;
        }
    }

    // Video controls
    toggleVideoPlayPause(video, button) {
        if (video.paused) {
            video.play();
            button.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            button.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    toggleVideoMute(video, button) {
        video.muted = !video.muted;
        button.innerHTML = video.muted ? 
            '<i class="fas fa-volume-mute"></i>' : 
            '<i class="fas fa-volume-up"></i>';
    }

    // Mobile navigation
    initMobileNavigation() {
        const navToggle = document.createElement('button');
        navToggle.className = 'nav-toggle';
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        navToggle.setAttribute('aria-label', 'Toggle navigation menu');
        
        const navContainer = document.querySelector('.main-nav .container');
        if (navContainer) {
            navContainer.insertBefore(navToggle, navContainer.firstChild);
            
            navToggle.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', 
                    navMenu.classList.contains('active'));
            });
        }
    }

    // Modal handling
    initModalHandling() {
        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal();
            }
        });

        // Close modal with close button
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => this.closeModal());
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.currentModal) {
                this.closeModal();
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            this.currentModal = modal;
            
            // Focus management
            const firstFocusable = modal.querySelector('input, button, textarea, select');
            if (firstFocusable) {
                firstFocusable.focus();
            }
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        if (this.currentModal) {
            this.currentModal.classList.remove('active');
            this.currentModal.setAttribute('aria-hidden', 'true');
            this.currentModal = null;
            document.body.style.overflow = '';
        }
    }

    // Render upcoming missions
    renderUpcomingMissions() {
        const container = document.getElementById('upcomingMissionsGrid');
        if (!container) return;

        container.innerHTML = '';

        if (this.upcomingMissions.length === 0) {
            container.innerHTML = '<p class="no-missions">No upcoming missions at this time.</p>';
            return;
        }

        this.upcomingMissions.forEach(mission => {
            const missionCard = this.createMissionCard(mission);
            container.appendChild(missionCard);
        });
    }

    createMissionCard(mission) {
        const card = document.createElement('div');
        card.className = 'mission-card fade-in';
        
        const launchDate = new Date(mission.launchDate);
        const isUpcoming = launchDate > new Date();
        
        card.innerHTML = `
            <h3>${mission.name}</h3>
            <div class="mission-meta">
                <span><i class="fas fa-calendar"></i> ${this.formatDate(mission.launchDate)}</span>
                <span><i class="fas fa-rocket"></i> ${mission.launchVehicle || 'TBD'}</span>
                <span><i class="fas fa-satellite"></i> ${mission.orbitType || 'TBD'}</span>
            </div>
            <div class="mission-description">${mission.description}</div>
            <div class="mission-objective">
                <strong>Objective:</strong> ${mission.objective}
            </div>
            <div class="mission-actions">
                <button class="btn btn-primary" onclick="isroWebsite.showMissionDetails('${mission.id}', 'upcoming')">
                    <i class="fas fa-info-circle"></i> More Info
                </button>
                ${!isUpcoming ? '<span class="status-badge past">Past Launch Date</span>' : ''}
            </div>
        `;

        return card;
    }

    // Render spacecraft missions table
    renderSpacecraftMissions() {
        const tbody = document.getElementById('missionsTableBody');
        if (!tbody) return;

        tbody.innerHTML = '';

        this.spacecraftMissions.forEach(mission => {
            const row = this.createMissionRow(mission);
            tbody.appendChild(row);
        });
    }

    createMissionRow(mission) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${mission.id}</td>
            <td class="mission-name">${mission.name}</td>
            <td>${mission.launchDate}</td>
            <td>
                <a href="#" class="mission-link">${mission.launchVehicle}</a>
            </td>
            <td>${mission.orbitType}</td>
            <td>${mission.application}</td>
            <td>${mission.remarks}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn btn-secondary" onclick="isroWebsite.showMissionDetails('${mission.id}', 'spacecraft')">
                        <i class="fas fa-info"></i> Details
                    </button>
                    <button class="btn btn-secondary" onclick="isroWebsite.showMissionLinks('${mission.id}')">
                        <i class="fas fa-link"></i> Links
                    </button>
                </div>
            </td>
        `;
        return row;
    }

    // Mission details modal
    showMissionDetails(missionId, type) {
        let mission;
        
        if (type === 'upcoming') {
            mission = this.upcomingMissions.find(m => m.id === missionId);
        } else {
            mission = this.spacecraftMissions.find(m => m.id == missionId);
        }

        if (!mission) return;

        const modalBody = document.getElementById('modalBody');
        const modalTitle = document.getElementById('modalTitle');
        
        modalTitle.textContent = `${mission.name} - Mission Details`;
        modalBody.innerHTML = this.generateMissionDetailsHTML(mission, type);
        
        this.openModal('missionModal');
    }

    generateMissionDetailsHTML(mission, type) {
        if (type === 'upcoming') {
            return `
                <div class="mission-detail-section">
                    <h4>Mission Overview</h4>
                    <p><strong>Launch Date:</strong> ${this.formatDate(mission.launchDate)}</p>
                    <p><strong>Launch Vehicle:</strong> ${mission.launchVehicle || 'To be determined'}</p>
                    <p><strong>Orbit Type:</strong> ${mission.orbitType || 'To be determined'}</p>
                    <p><strong>Application:</strong> ${mission.application || 'To be determined'}</p>
                </div>
                <div class="mission-detail-section">
                    <h4>Description</h4>
                    <p>${mission.description}</p>
                </div>
                <div class="mission-detail-section">
                    <h4>Mission Objective</h4>
                    <p>${mission.objective}</p>
                </div>
            `;
        } else {
            return `
                <div class="mission-detail-section">
                    <h4>Mission Overview</h4>
                    <p><strong>Launch Date:</strong> ${mission.launchDate}</p>
                    <p><strong>Launch Vehicle:</strong> ${mission.launchVehicle}</p>
                    <p><strong>Orbit Type:</strong> ${mission.orbitType}</p>
                    <p><strong>Application:</strong> ${mission.application}</p>
                    <p><strong>Status:</strong> ${mission.remarks}</p>
                </div>
                <div class="mission-detail-section">
                    <h4>Description</h4>
                    <p>${mission.description}</p>
                </div>
                ${mission.payload ? `
                <div class="mission-detail-section">
                    <h4>Payload Information</h4>
                    <p>${mission.payload}</p>
                </div>
                ` : ''}
                ${mission.technicalDetails ? `
                <div class="mission-detail-section">
                    <h4>Technical Details</h4>
                    <p>${mission.technicalDetails}</p>
                </div>
                ` : ''}
                ${mission.missionObjective ? `
                <div class="mission-detail-section">
                    <h4>Mission Objective</h4>
                    <p>${mission.missionObjective}</p>
                </div>
                ` : ''}
                ${mission.successReport ? `
                <div class="mission-detail-section">
                    <h4>Success Report</h4>
                    <p>${mission.successReport}</p>
                </div>
                ` : ''}
                <div class="mission-detail-section">
                    <h4>Related Links</h4>
                    <div class="mission-links">
                        <a href="${mission.links?.brochure || '#'}" class="btn btn-secondary">
                            <i class="fas fa-file-pdf"></i> Brochure
                        </a>
                        <a href="${mission.links?.video || '#'}" class="btn btn-secondary">
                            <i class="fas fa-video"></i> Launch Video
                        </a>
                        <a href="${mission.links?.tracking || '#'}" class="btn btn-secondary">
                            <i class="fas fa-satellite-dish"></i> Tracking
                        </a>
                        <a href="${mission.links?.gallery || '#'}" class="btn btn-secondary">
                            <i class="fas fa-images"></i> Photo Gallery
                        </a>
                    </div>
                </div>
            `;
        }
    }

    // Show mission links
    showMissionLinks(missionId) {
        const mission = this.spacecraftMissions.find(m => m.id == missionId);
        if (!mission) return;

        const modalBody = document.getElementById('modalBody');
        const modalTitle = document.getElementById('modalTitle');
        
        modalTitle.textContent = `${mission.name} - Resources`;
        modalBody.innerHTML = `
            <div class="mission-detail-section">
                <h4>Mission Resources</h4>
                <div class="mission-links">
                    <a href="${mission.links?.brochure || '#'}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-file-pdf"></i> Download Brochure
                    </a>
                    <a href="${mission.links?.video || '#'}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-video"></i> Watch Launch Video
                    </a>
                    <a href="${mission.links?.tracking || '#'}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-satellite-dish"></i> Satellite Tracking
                    </a>
                    <a href="${mission.links?.gallery || '#'}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-images"></i> Photo Gallery
                    </a>
                </div>
            </div>
        `;
        
        this.openModal('missionModal');
    }

    // Add project modal
    openAddProjectModal() {
        this.openModal('addProjectModal');
        
        // Reset form
        const form = document.getElementById('addProjectForm');
        if (form) {
            form.reset();
        }

        // Set minimum date to today
        const dateInput = document.getElementById('launchDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
        }

        // Cancel button
        const cancelBtn = document.getElementById('cancelProjectBtn');
        if (cancelBtn) {
            cancelBtn.onclick = () => this.closeModal();
        }
    }

    // Handle add project form submission
    handleAddProject(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const projectData = {
            id: `project-${Date.now()}`,
            name: formData.get('projectName'),
            description: formData.get('projectDescription'),
            launchDate: formData.get('launchDate'),
            objective: formData.get('objective'),
            launchVehicle: formData.get('launchVehicle'),
            orbitType: formData.get('orbitType'),
            application: formData.get('application')
        };

        // Validate required fields
        if (!projectData.name || !projectData.description || !projectData.launchDate || !projectData.objective) {
            alert('Please fill in all required fields.');
            return;
        }

        // Check if launch date is in the past
        const launchDate = new Date(projectData.launchDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (launchDate < today) {
            // Move to spacecraft missions
            const spacecraftMission = {
                id: this.spacecraftMissions.length + 1,
                name: projectData.name,
                launchDate: this.formatDate(projectData.launchDate),
                launchVehicle: projectData.launchVehicle || 'Custom Mission',
                orbitType: projectData.orbitType || '',
                application: projectData.application || '',
                remarks: 'User Added',
                description: projectData.description,
                missionObjective: projectData.objective,
                links: {
                    brochure: '#',
                    video: '#',
                    tracking: '#',
                    gallery: '#'
                }
            };
            
            this.spacecraftMissions.unshift(spacecraftMission);
            this.renderSpacecraftMissions();
            
            alert('Project added to Spacecraft Missions (past launch date).');
        } else {
            // Add to upcoming missions
            this.upcomingMissions.push(projectData);
            this.renderUpcomingMissions();
            
            alert('Project added to Upcoming Missions.');
        }

        this.closeModal();
    }

    // Search and filter functionality
    initSearchAndFilter() {
        const searchInput = document.getElementById('missionSearch');
        const filterSelect = document.getElementById('missionFilter');

        if (searchInput) {
            searchInput.addEventListener('input', () => this.filterMissions());
        }

        if (filterSelect) {
            filterSelect.addEventListener('change', () => this.filterMissions());
        }
    }

    filterMissions() {
        const searchTerm = document.getElementById('missionSearch')?.value.toLowerCase() || '';
        const filterType = document.getElementById('missionFilter')?.value || '';
        
        const rows = document.querySelectorAll('#missionsTableBody tr');
        
        rows.forEach(row => {
            const name = row.cells[1]?.textContent.toLowerCase() || '';
            const application = row.cells[5]?.textContent.toLowerCase() || '';
            const launchVehicle = row.cells[3]?.textContent.toLowerCase() || '';
            
            const matchesSearch = name.includes(searchTerm) || 
                                 application.includes(searchTerm) || 
                                 launchVehicle.includes(searchTerm);
            
            const matchesFilter = !filterType || application.includes(filterType.toLowerCase());
            
            row.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
        });
    }

    // Search form handling
    handleSearch(e) {
        e.preventDefault();
        const query = e.target.querySelector('input').value;
        
        if (query.trim()) {
            // Implement search functionality
            // For now, scroll to missions section
            document.getElementById('spacecraft-missions')?.scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            // Set search term in mission filter
            const missionSearch = document.getElementById('missionSearch');
            if (missionSearch) {
                missionSearch.value = query;
                this.filterMissions();
            }
        }
    }

    // Smooth scrolling for navigation links
    initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Scroll animations
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.mission-card, .missions-table, .footer-section').forEach(el => {
            observer.observe(el);
        });
    }

    // Accessibility features
    initAccessibilityFeatures() {
        // Keyboard navigation for dropdowns
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const trigger = dropdown.querySelector('a');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (trigger && menu) {
                trigger.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                    }
                });
            }
        });

        // Focus management for modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && this.currentModal) {
                this.handleModalTabNavigation(e);
            }
        });
    }

    handleModalTabNavigation(e) {
        const focusableElements = this.currentModal.querySelectorAll(
            'input, button, textarea, select, a[href]'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }

    // Utility functions
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    updateLastModified() {
        const lastUpdatedElement = document.getElementById('lastUpdated');
        if (lastUpdatedElement) {
            lastUpdatedElement.textContent = new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                timeZoneName: 'long'
            });
        }
    }

    // Migration function - move past missions automatically
    checkAndMigrateMissions() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const pastMissions = this.upcomingMissions.filter(mission => {
            const launchDate = new Date(mission.launchDate);
            return launchDate < today;
        });

        if (pastMissions.length > 0) {
            // Move past missions to spacecraft missions
            pastMissions.forEach(mission => {
                const spacecraftMission = {
                    id: this.spacecraftMissions.length + 1,
                    name: mission.name,
                    launchDate: this.formatDate(mission.launchDate),
                    launchVehicle: mission.launchVehicle || 'Custom Mission',
                    orbitType: mission.orbitType || '',
                    application: mission.application || '',
                    remarks: 'Migrated from Upcoming',
                    description: mission.description,
                    missionObjective: mission.objective,
                    links: {
                        brochure: '#',
                        video: '#',
                        tracking: '#',
                        gallery: '#'
                    }
                };
                
                this.spacecraftMissions.unshift(spacecraftMission);
            });

            // Remove from upcoming missions
            this.upcomingMissions = this.upcomingMissions.filter(mission => {
                const launchDate = new Date(mission.launchDate);
                return launchDate >= today;
            });

            // Re-render both sections
            this.renderUpcomingMissions();
            this.renderSpacecraftMissions();

            console.log(`Migrated ${pastMissions.length} past missions to spacecraft missions.`);
        }
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.isroWebsite = new ISROWebsite();
    
    // Check for mission migrations daily
    setInterval(() => {
        window.isroWebsite.checkAndMigrateMissions();
    }, 86400000); // 24 hours
});

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(error => {
                console.log('ServiceWorker registration failed');
            });
    });
}