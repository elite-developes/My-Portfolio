import {about,highlights} from "../../data/portfolioData";

import FeatureCard from "../ui/FeatureCard";

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            {about.title}
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            {about.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {highlights.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;