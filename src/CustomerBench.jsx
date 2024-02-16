import CustomerCard from "./Customer";

let customerList = [
  [
    "./assets/img/testimonials-1.jpg",
    "Margaret E",
    '"This is fantastic! Thanks so much guys!"',
  ],
  [
    "./assets/img/testimonials-2.jpg",
    "Fred S.",
    `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
  ],
  [
    "./assets/img/testimonials-3.jpg",
    "Sarah W.",
    '"Thanks so much for making these free resources available to us!"',
  ],
];

function CustomerBench() {
  return (
    <>
      {/* <!-- Testimonials--> */}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
            {
              /* Dynamically creating CustomerCard component */
              customerList.map((it, key) => (
                <CustomerCard
                  key={key}
                  src={it[0]}
                  customerName={it[1]}
                  customerFeedback={it[2]}
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default CustomerBench;
