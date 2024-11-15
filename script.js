// Function to load the selected page
function loadPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.pages');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.style.display = 'block';
    }

    // Highlight the active link in the navbar
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.navbar .nav-link[href='#'][onclick="loadPage('${pageId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}
function loadPage(page) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    // Show the selected page
    const activePage = document.getElementById(page);
    if (activePage) {
        activePage.style.display = 'block';
    }

    // Handle active class for navbar links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[href="#${page}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Initialize to load the "home" page by default
loadPage('home');
// Optional: Auto-load the home page on page load
document.addEventListener('DOMContentLoaded', function () {
    loadPage('home');
});

// Data for each category
const categories = {
    basic: {
        title: "Basic Category: Start Your Journey",
        content: `
            <p>The Basic Membership is the perfect starting point for anyone looking to dip their toes into the world of martial arts. Whether you're a complete beginner or someone who's been curious about martial arts, this package gives you the opportunity to explore and grow at a comfortable pace.</p>
            <p><strong>Price:</strong> £25.00 per month</p>
            <p><strong>Includes:</strong></p>
            <ul>
                <li>1 Martial Art (Choose from Judo, Jiu-Jitsu, Karate, or Muay Thai)</li>
                <li>2 sessions per week</li>
            </ul>
            <p>At just £25 a month, you'll get the fundamentals you need to kickstart your martial arts journey. Join a community of like-minded individuals and experience the thrill of mastering new skills, building confidence, and staying fit—all while having fun!</p>
        `,
    },
    intermediate: {
        title: "Intermediate Category: Level Up Your Skills",
        content: `
            <p>Ready to take your training to the next level? The Intermediate Membership is for those who’ve got the basics down and are looking to push themselves further. This package gives you more time on the mat and helps you refine your technique with three training sessions per week.</p>
            <p><strong>Price:</strong> £35.00 per month</p>
            <p><strong>Includes:</strong></p>
            <ul>
                <li>1 Martial Art (Choose from Judo, Jiu-Jitsu, Karate, or Muay Thai)</li>
                <li>3 sessions per week</li>
            </ul>
            <p>This membership is all about growth. Whether you're working on mastering your judo throws or perfecting your Muay Thai strikes, the Intermediate Membership will help you sharpen your skills, build strength, and achieve your personal martial arts goals.</p>
        `,
    },
    advanced: {
        title: "Advanced Category: Train Like a Pro",
        content: `
            <p>For the serious martial artist who’s ready to conquer more than just one discipline, the Advanced Membership opens up new opportunities to train hard and train smart. With access to two martial arts and five sessions per week, you’ll be able to refine your techniques, expand your knowledge, and build the kind of discipline and focus that champions are made of.</p>
            <p><strong>Price:</strong> £45.00 per month</p>
            <p><strong>Includes:</strong></p>
            <ul>
                <li>2 Martial Arts (Choose any two: Judo, Jiu-Jitsu, Karate, or Muay Thai)</li>
                <li>5 sessions per week</li>
            </ul>
            <p>If you’re looking to be challenged, this membership will push you to new heights. Whether you're cross-training in different martial arts or focusing on technique, you'll get the depth of experience you need to become a well-rounded fighter.</p>
        `,
    },
    elite: {
        title: "Elite Category: Unleash Your Full Potential",
        content: `
            <p>For those who aren’t just content with being good—they want to be elite. The Elite Membership gives you unlimited access to all classes, across every martial art we offer. Train as often as you like, at your own pace, and experience the ultimate flexibility to immerse yourself in the full spectrum of martial arts.</p>
            <p><strong>Price:</strong> £60.00 per month</p>
            <p><strong>Includes:</strong></p>
            <ul>
                <li>Unlimited access to all martial arts classes</li>
                <li>No restrictions—train in every available discipline</li>
            </ul>
            <p>This membership is for those who live and breathe martial arts. Whether you're perfecting your jiu-jitsu guard, honing your Muay Thai kickboxing, or diving into the discipline of Karate, you’ll have everything you need to reach the top of your game.</p>
        `,
    },
    junior: {
        title: "Junior Category: A Fun & Safe Start for Young Warriors",
        content: `
            <p>At DoBu Martial Arts, we believe that the journey to becoming a martial artist starts young—and with our Junior Membership, your child will develop important life skills like focus, discipline, and respect while having fun and staying active.</p>
            <p><strong>Price:</strong> £25.00 per month</p>
            <p><strong>Includes:</strong></p>
            <ul>
                <li>Access to all kids’ martial arts classes</li>
                <li>Classes in Judo, Jiu-Jitsu, Karate, and more</li>
            </ul>
            <p>Our Junior Membership is designed for kids who want to learn martial arts in a safe and supportive environment. With expert coaches and age-appropriate classes, your child will not only develop martial arts skills but also build confidence, make friends, and stay healthy.</p>
        `,
    },
    hourly: {
        title: "Hourly Options: One-on-One Coaching to Fast-Track Your Progress",
        content: `
            <p>Sometimes, you need personal attention to really elevate your skills—and that's where our Hourly Options come in. Whether you want to focus on a specific technique, improve your fitness, or receive personalized feedback, these private sessions give you the chance to train one-on-one with an expert instructor.</p>
            <p><strong>Price:</strong> £15.00 per hour</p>
            <p><strong>Includes:</strong></p>
            <ul>
                <li>One-on-one private tuition</li>
                <li>Personalized feedback and tailored training plans</li>
            </ul>
            <p>This is the perfect option for anyone serious about taking their training to the next level. You’ll get individualized attention that helps you make rapid progress, whether you're fine-tuning your grappling technique in Jiu-Jitsu or perfecting your kicks in Muay Thai. It’s your training, your pace, your goals.</p>
        `,
    },
};

// Handle button clicks and change modal content
document.querySelectorAll('.btn-category').forEach(button => {
    button.addEventListener('click', (event) => {
        const category = event.target.getAttribute('data-category');
        const categoryData = categories[category];

        // Set modal title and content
        document.getElementById('membershipModalLabel').innerText = categoryData.title;
        document.getElementById('categoryContent').innerHTML = categoryData.content;

        // Show the modal using Bootstrap
        const modal = new bootstrap.Modal(document.getElementById('membershipModal'));
        modal.show();
    });
});

// Function to load the selected page
function loadPage(page) {
    // Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    // Show the selected page
    document.getElementById(page).style.display = 'block';

    // Update active class in navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[href="javascript:void(0)"][onclick="loadPage('${page}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Form submission handler (to prevent default submission behavior)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    // Prevent form from submitting and handle it with JavaScript
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Form input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Perform some basic validation (you can expand this based on your needs)
        if (!name || !email || !phone) {
            alert("Please fill out all the fields.");
            return;
        }

        // If validation is successful, display a success message
        alert("Thank you for signing up! We will contact you soon.");

        // Reset the form (optional)
        form.reset();
    });

    // Load the default page on page load
    loadPage('facilities');
});
