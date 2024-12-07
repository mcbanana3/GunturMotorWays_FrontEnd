import React from "react";

function contact() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">Contact Us</h1>
          <p className="mt-5 mb-5">
            If you have any questions, please feel free to contact us.
          </p>
        </div>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 items-center text-center justify-center">
              <h1 className="text-4xl">Contact Us Form:</h1>
              <div className="lg:col-span-2 lg:py-1">
                <div className="mt-1">
                  <a
                    href="/contact"
                    className="text-2xl font-bold text-red-600"
                  >
                    {" "}
                    +919423460959{" "}
                  </a>

                  <address className="mt-2 not-italic">
                    KL University, GreenFields, Vaddeswaram, Guntur, Andhra
                    Pradesh, 522002
                  </address>
                </div>
              </div>

              <div className="rounded-lg border-black border-2px bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                      <label
                        htmlFor="Option1"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="Option1"
                          type="radio"
                          tabIndex="-1"
                          name="option"
                        />

                        <span className="text-sm"> Purchase Related </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="Option2"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="Option2"
                          type="radio"
                          tabIndex="-1"
                          name="option"
                        />

                        <span className="text-sm"> Service Related </span>
                      </label>
                    </div>

                    <div>
                      <label
                        htmlFor="Option3"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                      >
                        <input
                          className="sr-only"
                          id="Option3"
                          type="radio"
                          tabIndex="-1"
                          name="option"
                        />

                        <span className="text-sm"> Warranty Related </span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default contact;
