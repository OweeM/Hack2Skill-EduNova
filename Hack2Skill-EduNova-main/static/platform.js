// User data (in a real app, this would come from login)
const userData = {
    name: "Priya K.",
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    skills: ["Tailoring", "Baking"]
};

// Skill database with real YouTube videos
const skillsData = {
    "Tailoring": {
        description: "Master the art of tailoring and stitching to create beautiful garments or start your own business.",
        category: "craft",
        image: "https://images.unsplash.com/photo-1598703258405-a4f5c5d0c5c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        liveSessions: [
            {
                time: "11:00 AM - 12:30 PM",
                title: "Basic Stitching Techniques for Beginners",
                description: "Learn essential hand and machine stitching methods with expert guidance",
                educator: {
                    name: "Mr. Sharma",
                    experience: "15 years experience",
                    image: "https://randomuser.me/api/portraits/men/32.jpg"
                }
            },
            {
                time: "3:00 PM - 4:30 PM",
                title: "Kurta Pattern Making Workshop",
                description: "Step-by-step guide to creating perfect kurta patterns",
                educator: {
                    name: "Ms. Patel",
                    experience: "Textile Designer",
                    image: "https://randomuser.me/api/portraits/women/68.jpg"
                }
            }
        ],
        videos: [
            {
                title: "How to Thread a Sewing Machine",
                duration: "15 min",
                level: "Beginner",
                youtubeId: "MfI1gA8k5vE" // Real tailoring tutorial
            },
            {
                title: "5 Basic Hand Stitches Everyone Should Know",
                duration: "22 min",
                level: "Beginner",
                youtubeId: "bC3C-8h3K6w"
            },
            {
                title: "Measuring and Cutting Fabric Properly",
                duration: "18 min",
                level: "Intermediate",
                youtubeId: "J3FTRW9xdzA"
            },
            {
                title: "How to Sew a Simple Dress (Beginner Friendly)",
                duration: "32 min",
                level: "Beginner",
                youtubeId: "v8_U0drW6Fo"
            },
            {
                title: "Sewing Machine Maintenance Tips",
                duration: "12 min",
                level: "All Levels",
                youtubeId: "5FdQJ1Z3h3I"
            }
        ]
    },
    "Baking": {
        description: "Learn professional baking techniques to make delicious cakes, breads, and pastries for home or business.",
        category: "food",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        liveSessions: [],
        videos: [
            {
                title: "Basic Cake Baking Tutorial",
                duration: "25 min",
                level: "Beginner",
                youtubeId: "Z1OLG7F3HD4" // Real baking tutorial
            },
            {
                title: "How to Make Perfect Cookies Every Time",
                duration: "18 min",
                level: "Beginner",
                youtubeId: "E9Rl1GvT2A8"
            },
            {
                title: "Bread Making at Home - Complete Guide",
                duration: "42 min",
                level: "Intermediate",
                youtubeId: "FT7M1bJO4Y8"
            },
            {
                title: "5 Easy Pastry Recipes for Beginners",
                duration: "35 min",
                level: "Beginner",
                youtubeId: "zA6LvHxXJk8"
            },
            {
                title: "Decorating Cakes Like a Pro",
                duration: "28 min",
                level: "Intermediate",
                youtubeId: "k1sHr53j3U4"
            }
        ]
    },
    "Pickle & Papad Making": {
        description: "Traditional techniques for making pickles and papads that can be sold locally or started as small business.",
        category: "food",
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        liveSessions: [
            {
                time: "2:00 PM - 3:30 PM",
                title: "Traditional Mango Pickle Making",
                description: "Learn authentic Indian mango pickle recipe",
                educator: {
                    name: "Mrs. Gupta",
                    experience: "Home chef & entrepreneur",
                    image: "https://randomuser.me/api/portraits/women/52.jpg"
                }
            }
        ],
        videos: [
            {
                title: "How to Make Mango Pickle at Home",
                duration: "15 min",
                level: "Beginner",
                youtubeId: "h1HXBmLeBX0" // Real pickle making tutorial
            },
            {
                title: "Papad Making Business Idea",
                duration: "12 min",
                level: "All Levels",
                youtubeId: "Qk3F5x4xXGQ"
            },
            {
                title: "5 Homemade Pickle Recipes",
                duration: "22 min",
                level: "Beginner",
                youtubeId: "j3mYFZv6H4M"
            },
            {
                title: "Commercial Pickle Making Process",
                duration: "18 min",
                level: "Advanced",
                youtubeId: "X8JvX9WxqD8"
            },
            {
                title: "Lemon Pickle Recipe",
                duration: "10 min",
                level: "Beginner",
                youtubeId: "5oJzCl5L0t8"
            }
        ]
    },
    "Data Entry & Typing": {
        description: "Basic computer literacy training for online data entry jobs and administrative work.",
        category: "digital",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        liveSessions: [],
        videos: [
            {
                title: "Data Entry Complete Course for Beginners",
                duration: "45 min",
                level: "Beginner",
                youtubeId: "v2jW1yvqiQc" // Real data entry tutorial
            },
            {
                title: "How to Improve Typing Speed",
                duration: "15 min",
                level: "Beginner",
                youtubeId: "1ArVtCQqQRE"
            },
            {
                title: "Excel for Data Entry Work",
                duration: "32 min",
                level: "Intermediate",
                youtubeId: "rwbho0CgEAE"
            },
            {
                title: "Online Data Entry Jobs Explained",
                duration: "18 min",
                level: "All Levels",
                youtubeId: "8Qutag7D8YI"
            },
            {
                title: "Data Entry Practice Exercises",
                duration: "25 min",
                level: "Beginner",
                youtubeId: "6MCjT-7e0Zo"
            }
        ]
    }
};

// DOM Elements
const mainPage = document.getElementById('main-page');
const skillDetailPage = document.getElementById('skill-detail-page');
const skillsGrid = document.getElementById('skills-grid');
const backButton = document.getElementById('back-button');
const skillTitle = document.getElementById('skill-title');
const skillDescription = document.getElementById('skill-description');
const skillHeader = document.getElementById('skill-header');
const liveSessionsContainer = document.getElementById('live-sessions-container');
const noLiveSessions = document.getElementById('no-live-sessions');
const videoPlaylist = document.getElementById('video-playlist');
const welcomeUsername = document.getElementById('welcome-username');
const usernameDisplay = document.getElementById('username-display');
const categoryTabs = document.querySelectorAll('.category-tab');
const homeLink = document.getElementById('home-link');
const navLinks = {
    home: document.getElementById('nav-home'),
    courses: document.getElementById('nav-courses'),
    jobs: document.getElementById('nav-jobs'),
    community: document.getElementById('nav-community')
};

// Initialize the page
function init() {
    // Set user data
    welcomeUsername.textContent = userData.name;
    usernameDisplay.textContent = userData.name;

    // Generate skill cards
    renderSkillCards();

    // Set up event listeners
    setupEventListeners();
}

// Render skill cards on main page
function renderSkillCards(filterCategory = 'all') {
    skillsGrid.innerHTML = '';

    Object.entries(skillsData).forEach(([skillName, skillData]) => {
        if (filterCategory === 'all' || skillData.category === filterCategory) {
            const card = document.createElement('div');
            card.className = 'skill-card';
            card.dataset.skill = skillName;

            card.innerHTML = `
                        <img src="${skillData.image}" alt="${skillName}" class="skill-card-img">
                        <div class="skill-card-content">
                            <h3>${skillName}</h3>
                            <p>${skillData.description}</p>
                            <div class="meta">
                                <span><i class="fas fa-user-graduate"></i> ${Math.floor(Math.random() * 2000) + 500} learners</span>
                                <span><i class="fas fa-star"></i> 4.${Math.floor(Math.random() * 5) + 5} (${Math.floor(Math.random() * 500) + 100})</span>
                            </div>
                            <a href="#" class="btn">Explore</a>
                        </div>
                    `;

            skillsGrid.appendChild(card);
        }
    });
}

// Show skill detail page
async function showSkillDetail(skillName) {
    const skillData = skillsData[skillName];

    if (!skillData) return;

    // Update skill details
    skillTitle.textContent = skillName;
    skillDescription.textContent = skillData.description;
    skillHeader.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${skillData.image}')`;

    // Update live sessions
    liveSessionsContainer.innerHTML = '';

    if (skillData.liveSessions.length > 0) {
        noLiveSessions.style.display = 'none';

        skillData.liveSessions.forEach(session => {
            const sessionCard = document.createElement('div');
            sessionCard.className = 'live-session-card';

            sessionCard.innerHTML = `
                        <div class="session-time">
                            <i class="fas fa-clock"></i> ${session.time}
                        </div>
                        <div class="session-details">
                            <h4>${session.title}</h4>
                            <p>${session.description}</p>
                            <div class="session-educator">
                                <img src="${session.educator.image}" alt="Educator">
                                <span>${session.educator.name} (${session.educator.experience})</span>
                            </div>
                        </div>
                        <button class="join-btn">Join Now</button>
                    `;

            liveSessionsContainer.appendChild(sessionCard);
        });
    } else {
        noLiveSessions.style.display = 'block';
    }

    // Update video playlist
     // Show loading state
     videoPlaylist.innerHTML = '<div class="loading">Loading videos...</div>';

     try {
        // Fetch YouTube videos for this skill
        const videos = await fetchYouTubeVideos(`${skillName} tutorial`);
        
        // Update video playlist
        videoPlaylist.innerHTML = '';
        
        if (videos.length > 0) {
            videos.forEach(video => {
                const videoCard = document.createElement('div');
                videoCard.className = 'video-card';
                videoCard.innerHTML = `
                    <div class="video-container">
                        <iframe src="https://www.youtube.com/embed/${video.youtubeId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="video-info">
                        <h4>${video.title}</h4>
                        <p>${video.channelTitle}</p>
                    </div>
                `;
                videoPlaylist.appendChild(videoCard);
            });
        } else {
            videoPlaylist.innerHTML = '<div class="error">No videos available for this skill</div>';
        }
    } catch (error) {
        videoPlaylist.innerHTML = '<div class="error">Failed to load videos. Please try again later.</div>';
        console.error("Error loading YouTube videos:", error);
    }
 
     // Switch to detail page
     mainPage.style.display = 'none';
     skillDetailPage.style.display = 'block';
 }

// Set up event listeners
function setupEventListeners() {
    // Skill card clicks
    document.addEventListener('click', function (e) {
        const skillCard = e.target.closest('.skill-card');
        if (skillCard) {
            e.preventDefault();
            showSkillDetail(skillCard.dataset.skill);
        }
    });

    // Back button
    backButton.addEventListener('click', function (e) {
        e.preventDefault();
        mainPage.style.display = 'block';
        skillDetailPage.style.display = 'none';
    });

    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            renderSkillCards(this.dataset.category);
        });
    });

    // Navigation links
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        mainPage.style.display = 'block';
        skillDetailPage.style.display = 'none';
    });

    Object.values(navLinks).forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            alert(`This would navigate to ${link.textContent.trim()} section in a complete application`);
        });
    });

    // Search functionality
    document.getElementById('search-btn').addEventListener('click', function () {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        if (searchTerm) {
            // Filter skills based on search term
            const filteredSkills = Object.keys(skillsData).filter(skill =>
                skill.toLowerCase().includes(searchTerm) ||
                skillsData[skill].description.toLowerCase().includes(searchTerm)
            );

            if (filteredSkills.length > 0) {
                // Show first matching skill
                showSkillDetail(filteredSkills[0]);
            } else {
                alert('No skills found matching your search');
            }
        }
    });
}

// Function to fetch YouTube videos
async function fetchYouTubeVideos(query) {
    const API_KEY = "AIzaSyBBvAoqs0h5ZmtPSbUmzXEIG_GF1yzclLU"; // Replace with your actual API key
    const MAX_RESULTS = 5;
    
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`
        );
        const data = await response.json();
        
        if (data.items) {
            // Filter out videos without a valid videoId
            return data.items
                .filter(item => item.id && item.id.videoId) // Only include items with videoId
                .map(item => ({
                    youtubeId: item.id.videoId,
                    title: item.snippet.title,
                    channelTitle: item.snippet.channelTitle,
                    duration: "N/A",
                    level: "All Levels"
                }));
        } else {
            throw new Error("No videos found");
        }
    } catch (error) {
        console.error("Error fetching YouTube videos:", error);
        throw error;
    }
}

// Initialize the application
init();