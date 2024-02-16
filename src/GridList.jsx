import GridCard from "./GridCard";

// Grids of card created so later new can be added or removed
let gridCards = [
  [
    "col-lg-6 order-lg-2 text-white showcase-img",
    "col-lg-6 order-lg-1 my-auto showcase-text",
    "./assets/img/bg-showcase-1.jpg",
    "Fully Responsive Design",
    "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  ],
  [
    "col-lg-6 order-lg-1 text-white showcase-img",
    "col-lg-6 order-lg-2 my-auto showcase-text",
    "./assets/img/bg-showcase-2.jpg",
    "Updated For Bootstrap 5",
    "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  ],
  [
    "col-lg-6 order-lg-2 text-white showcase-img",
    "col-lg-6 order-lg-1 my-auto showcase-text",
    "./assets/img/bg-showcase-3.jpg",
    "Easy to Use & Customize",
    "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
  ],
];

function GridList() {
  return (
    <>
      {/* <!-- Image Showcases--> */}
      <section className="showcase">
        <div className="container-fluid p-0">
          {
            /* Dynamically creating GridCard component */
            gridCards.map((it, key) => (
              <GridCard
                key={key}
                divclassName1={it[0]}
                divclassName2={it[1]}
                imagePath={it[2]}
                h2={it[3]}
                p={it[4]}
              />
            ))
          }
        </div>
      </section>
    </>
  );
}

export default GridList;
