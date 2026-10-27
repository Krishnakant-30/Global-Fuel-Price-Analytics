const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(a => {
  a.addEventListener("click", () => navMenu.classList.remove("open"));
});

const slides = [...document.querySelectorAll(".story-slide")];
const tabs = [...document.querySelectorAll(".story-tab")];
const counter = document.getElementById("storyCounter");
let current = 0;

function showStory(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle("active", i === current));
  tabs.forEach((t, i) => t.classList.toggle("active", i === current));
  counter.textContent = `${current + 1} / ${slides.length}`;
  if (window.matchMedia("(max-width: 900px)").matches) {
    document.getElementById("storyNav").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

tabs.forEach((tab, i) => tab.addEventListener("click", () => showStory(i)));
document.getElementById("prevStory").addEventListener("click", () => showStory(current - 1));
document.getElementById("nextStory").addEventListener("click", () => showStory(current + 1));
showStory(0);

// Clearly marked sample reviews give the feedback area a useful preview.
const reviewList = document.getElementById("reviewList");
const emptyReviews = document.getElementById("emptyReviews");
const sampleReviews = [
  { name: "Aarav S.", review: "The dashboard makes fuel-price trends easy to follow. I especially liked comparing the different fuels.", stars: 5 },
  { name: "Meera K.", review: "A clean project with useful charts. The country comparison helped me understand how prices can vary by region.", stars: 5 },
  { name: "Rohan P.", review: "The Data Story gives a good step-by-step overview, and the visualizations make the topic more engaging.", stars: 4 }
];
function addReviewCard({name, review, stars = 5, sample = false, email = ""}, prepend = false) {
  const item = document.createElement("article");
  item.className = "review-item";
  const heading = document.createElement("h4");
  heading.textContent = name;
  const rating = document.createElement("div");
  rating.className = "review-stars";
  rating.setAttribute("aria-label", `${stars} out of 5 stars`);
  rating.textContent = "★".repeat(stars) + "☆".repeat(5 - stars);
  const body = document.createElement("p");
  body.textContent = review;
  item.append(heading, rating);
  if (sample) {
    const tag = document.createElement("span");
    tag.className = "review-tag";
    tag.textContent = "SAMPLE REVIEW";
    item.append(tag);
  }
  if (email) {
    const emailLine = document.createElement("p");
    emailLine.className = "review-email";
    emailLine.textContent = email;
    item.append(emailLine);
  }
  item.append(body);
  if (prepend) reviewList.prepend(item); else reviewList.append(item);
}
sampleReviews.forEach(review => addReviewCard({...review, sample: true}));
if (sampleReviews.length) emptyReviews.hidden = true;

// Reviews submitted here are displayed in the current page session.
const reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
  reviewForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("reviewName").value.trim();
    const email = document.getElementById("reviewEmail").value.trim();
    const review = document.getElementById("reviewText").value.trim();
    if (!name || !email || !review) return;
    addReviewCard({name, email, review, stars: 5}, true);
    emptyReviews.hidden = true;
    reviewForm.reset();
  });
}
