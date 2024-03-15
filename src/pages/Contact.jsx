import React from "react";

function Contact() {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">
          Got a technical issue? Want to send feedback about a beta feature? Let
          us konw.
        </p>
        <form className="space-y-8" action="#">
          <div>
            <label className="form__label" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="form__input mt-1"
            />
          </div>
          <div>
            <label className="form__label" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you"
              className="form__input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="form__label" htmlFor="message">
              Your Message
            </label>
            <textarea
            rows={6}
              type="text"
              id="message"
              placeholder="Leave a comment"
              className="form__input mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
