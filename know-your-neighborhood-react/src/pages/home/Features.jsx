import React from "react";

const Features = () => {
  return (
    <section className="grid md:grid-cols-3 mt-8 md:mt-14 gap-5 md:gap-10">
      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-primary text-lg">
          Navigatede to Local business
        </h2>
        <i className="fa-solid fa-location-dot text-5xl" />
        <p className="text-gray-500 text-[15px]">
        Meet Your Neighbors. Introduce yourself to the other local businesses in your area! ...
          service providers, can be a valuable resource for residents.
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-primary text-lg">
          Joining with neighbourhood
        </h2>
        <i className="fa-solid fa-user-group text-5xl" />
        <p className="text-gray-500 text-[15px]">
        Say hello and introduce yourself. The first step in building a stronger neighbor is
         saying hello and introducing yourself when you move to a new neighborhood or when a
          new person moves into your area. ...
        </p>
      </div>

      <div className="flex flex-col text-center p-5 border rounded bg-gray-100 shadow-sm space-y-4">
        <h2 className="font-bold text-primary text-lg">
          User given authentic content
        </h2>
        <i className="fa-sharp fa-solid fa-user-plus text-5xl" />
        <p className="text-gray-500 text-[15px]">
        User-generated content establishes greater trust between customer and brand. 
        It is real and honest content that the potential customer can trust,
         as it is not the brand's own content but is based on the experience that other users have had with the products.
        </p>
      </div>
    </section>
  );
};

export default Features;
