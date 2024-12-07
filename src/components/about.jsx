import React from "react";

function Aboutus() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-bold text-3xl">
            Welcome to{" "}
            <span className="text-red-700 text-wrap">
              Guntur <span className="text-red-800">MotorWays</span>
            </span>{" "}
            -{" "}
            <span className="text-4xl text-slate-800">
              Your Ultimate Motorcycle Booking Destination!
            </span>
          </h1>
          <p className="mt-12">
            At Guntur <span className="text-red-700">MotorWays</span>, we cater
            to motorcycle enthusiasts and casual riders alike with an extensive
            selection of top-quality motorcycles from renowned brands. Whether
            you're seeking the thrill of a sportbike, the rugged reliability of
            an adventure motorcycle, or the comfort of a touring bike, we have
            something for every rider.
          </p>
          <img
            className="mt-6 w-full h-1/2"
            src="https://media.gettyimages.com/id/522972826/photo/motorcycles-parked-in-front-of-cafe-in-small-town.jpg?s=612x612&w=0&k=20&c=gW9tlhqaVx8Lf571FgKabnNCsb_TLwJQTWMQidxwAXg="
            alt="image1"
          />
          <p className="mt-8">
            Our collection features iconic models like the Kawasaki Ninja
            ZX-10R, Yamaha YZF-R1, and Harley-Davidson Road King, showcasing
            cutting-edge technology and striking designs. Each motorcycle is
            meticulously chosen to ensure the best performance and safety for
            our customers.
          </p>
          <h2 className="text-3xl text-left mt-10">Why Choose Us?</h2>
          <ul className="text-left mt-8 text-xl text-semibold ml-8 text-black">
            <li>
              Competitive Pricing:{" "}
              <span className="text-normal text-lg text-slate-700">
                Enjoy incredible discounts on selected models, making it easier
                for you to find the motorcycle of your dreams without breaking
                the bank. Our prices are transparent, and the discounts are
                clearly marked for your convenience.
              </span>
            </li>
            <li className="mt-5">
              Expert Guidance:{" "}
              <span className="text-normal text-lg text-slate-700">
                Our knowledgeable staff is here to assist you in selecting the
                perfect motorcycle. We offer personalized consultations to help
                you understand the features and benefits of each model.
              </span>
            </li>
            <li className="mt-5">
              Convenient Booking Process:{" "}
              <span className="text-normal text-lg text-slate-700">
                Explore a wide range of categories, including Sport, Naked,
                Cruiser, Adventure, and Touring motorcycles. We aim to match
                every rider's unique style and needs.
              </span>
            </li>
            <li className="mt-5">
              Convenient Booking Process:{" "}
              <span className="text-normal text-lg text-slate-700">
                Our user-friendly platform allows you to book your desired
                motorcycle with ease. Simply browse our selection, check the
                details, and secure your booking in just a few clicks.
              </span>
            </li>
            <li className="mt-5">
              High-Quality Images:{" "}
              <span className="text-normal text-lg text-slate-700">
                Browse through high-resolution images of each motorcycle,
                allowing you to get a closer look at the craftsmanship and
                details of the models you're interested in.
              </span>
            </li>
          </ul>
          <img
            className="mt-8 w-full h-1/2"
            src="https://media.gettyimages.com/id/645002674/photo/bangalore-india-executive-attending-costumer-at-tvs-bikes-showroom-at-trinity-circle-on.jpg?s=612x612&w=0&k=20&c=OwxXglAVH2QUorBb4xSXdC_xM6FharWOdR158TNAxW0="
            alt="iamge2"
          />
          <p className="mt-8 mb-5">
            Join our community of passionate riders today! At Guntur{" "}
            <span className="text-red-800">MotorWays</span>, we believe that
            every ride should be an adventure, and we are here to make that
            happen. Explore our collection, take advantage of our discounts, and
            get ready to hit the road on your new motorcycle!
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
