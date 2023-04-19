import React from "react";
import { hero2, store2 } from "../assets";
import LayoutFull from "../components/layout/LayoutFull";

const AboutPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[35vh] w-full bg-cover bg-center relative flex justify-center px-6
        after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
        after:from-[#0000004d] after:to-[#00000033]"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-inter font-bold text-5xl text-color2 drop-shadow-lg text-center">
              About Us
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-primary px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gray-600">
              <h3 className="text-3xl underline font-bold text-color1 drop-shadow mb-2">
                Know Your Neighborhood
              </h3>
              <p className="mb-2">
                We're a group of locals in "Know Your Neighborhood.".
                Are committed to assisting others in discovering and loving.
                Community. We are aware of how distinctive each neighborhood is.
                Hence, we've made a website that highlights the peculiarities and.
                Defining features of the place we call home. From small local companies and.
                Our objective is to be a, from news and events to neighborhood resources.
                An all-in-one place for local needs.
              </p>
              <p>
                We're not just a resource, though. We think that has power.
                We have features like message because we want to foster community.
                Boards and user-generated content. We desire "Know Your.
                A place where neighbors can interact and connect is a "neighborhood.".
                Engage one another. In that case, whether you're new to.
                We hope you'll join us, whether you live nearby or have done so your entire life.
                Celebrating everything that makes our community unique. I'm grateful for.
                Selecting "Know Your Neighborhood" as your go-to resource for everything.
                Local matters.
              </p>
            </div>
            <img
              src={store2}
              alt="about_us"
              className="rounded-md shadow-lg aspect-video object-cover"
            />
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default AboutPage;
