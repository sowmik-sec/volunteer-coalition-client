import React from "react";

const FeaturedWork = () => {
  return (
    <div>
      <h1 className="text-5xl mb-3">Some of our missions</h1>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://static01.nyt.com/images/2022/08/31/climate/29cli-pakistan1/29cli-pakistan1-mediumSquareAt3X.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-5">
            <h2 className="text-3xl font-bold">Rescue Program during flood</h2>
            <p>
              As a flood rescue team, our primary mission is to save lives and
              ensure the safety of those affected by floods. We are highly
              trained and equipped to respond to emergencies quickly and
              efficiently, utilizing specialized equipment and techniques to
              navigate dangerous floodwaters. Our efforts involve search and
              rescue operations to locate and extract stranded or trapped
              individuals, as well as providing medical aid and assistance to
              those in need. We also work closely with local authorities and
              other emergency response teams to coordinate a comprehensive
              response to the flood disaster. Throughout our rescue operations,
              we prioritize the safety of our team members and the individuals
              we are assisting, following established safety protocols and
              procedures. We are committed to making a positive difference in
              the lives of those affected by floods, and will continue to work
              tirelessly to protect and serve our communities.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/26C5/production/_110652990_e93e41b3-faeb-4ad6-9a6d-92efd60e2ed7.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-6">
            <h1 className="text-3xl font-bold">
              Turkey Earthquake rescue mission
            </h1>
            <p>
              As a team of turkey earthquake rescue mission, our primary
              objective is to save lives and provide assistance to those
              affected by the disaster. We are a highly trained and experienced
              team of rescue professionals, equipped with specialized equipment
              and tools to navigate dangerous areas. Our mission involves search
              and rescue operations to locate and extract individuals who are
              trapped or injured in collapsed buildings or other structures. We
              work around the clock, using specialized techniques and equipment
              to access hard-to-reach areas and locate survivors. Throughout our
              operations, we maintain a strong focus on safety, following
              established protocols and procedures to protect ourselves and the
              individuals we are assisting. We work closely with local
              authorities and other emergency response teams to coordinate a
              comprehensive and effective response to the earthquake disaster.
              Our team is committed to making a positive impact on the lives of
              those affected by the earthquake, and we will continue to work
              tirelessly until the last survivor is rescued and every need is
              met.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
