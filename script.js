   
    //    -------------------------------------JS NAV BAR---------------------------------- 
   document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

    });
 
//   --------------------------------------JS HERO SECTION---------------------------- 
 
 window.addEventListener("load", function(){

    document
        .getElementById("heroContent")
        .classList.add("hero-left");

    document
        .getElementById("heroImage")
        .classList.add("hero-right");

    });

    //   --------------------------------------JS ABOUT SECTION---------------------------- 

    const aboutElements = document.querySelectorAll(".about-animation");

function revealAbout() {

    const triggerBottom = window.innerHeight * 0.85;

    aboutElements.forEach((element, index) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            setTimeout(() => {
                element.classList.add("show");
            }, index * 200);

        }

    });

}

window.addEventListener("scroll", revealAbout);

window.addEventListener("load", revealAbout);

    //    -------------------------------------JS SKILL SECTION---------------------------- 

    const skillsSection = document.querySelector("#skills");
const skillsTitle = document.querySelector(".skills-title");
const skillItems = document.querySelectorAll(".skill-item");

let skillsAnimated = false;

function animateSkills() {

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;

    if (sectionTop < triggerPoint && !skillsAnimated) {

        skillsAnimated = true;

        // Animate title
        skillsTitle.classList.add("show");

        // Animate cards one by one
        skillItems.forEach((item, index) => {

            setTimeout(() => {

                item.classList.add("show");

            }, 200 + (index * 180));

        });

    }

}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);


// -----------------------------------JS EDUCATION SECTION----------------------------

// Education Section Animation

const educationSection = document.querySelector("#education");
const educationHeading = educationSection.querySelector("h1");
const educationCards = educationSection.querySelectorAll(".edu-card");

let educationPlayed = false;

function revealEducation() {

    const sectionTop = educationSection.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.8;

    if (sectionTop < trigger && !educationPlayed) {

        educationPlayed = true;

        // Show heading
        educationHeading.classList.add("show");

        // Show cards one by one
        educationCards.forEach((card, index) => {

            setTimeout(() => {
                card.classList.add("show");
            }, (index + 1) * 300);

        });

    }
}

window.addEventListener("scroll", revealEducation);
window.addEventListener("load", revealEducation);

// -------------------------------------JS PROJECT SECTION----------------------------

const projectCards = document.querySelectorAll("#project .card");

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }, index * 250);

            projectObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.2
});

// Initial State
projectCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    projectObserver.observe(card);

});

    // --------------------------------------JS CONTACT SECTION----------------------------

     const contactSection = document.querySelector("#contact");

const contactItems = [
    contactSection.querySelector(".text-center"),
    contactSection.querySelector(".contact-info"),
    contactSection.querySelector(".contact-form"),
    contactSection.querySelector(".alert")
];

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            contactItems.forEach((item, index) => {

                item.animate(
                    [
                        { transform: "translateY(80px)" },
                        { transform: "translateY(0)" }
                    ],
                    {
                        duration: 800,
                        delay: index * 200,
                        easing: "ease-out",
                        fill: "forwards"
                    }
                );

            });

            observer.unobserve(contactSection);

        }

    });

}, { threshold: 0.3 });

observer.observe(contactSection);