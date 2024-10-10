import React from "react";
import { TaggedContentCard } from "react-ui-cards";

const Project = () => {
  return (
    <>
      <h1 className="text-3xl font-extrabold px-[1.4em] font-robotoCondensed md:relative md:top-2 lg:relative lg:top-2">
        Projects
      </h1>

      <div className="main-div flex flex-wrap justify-around gap-[1px] relative right-8 sm:gap-3 ">
        {/* Card 1 */}
        <div
          className="card text-white p-2  rounded-lg "
          style={{ width: "220px", height: "350px", paddingBottom: "23rem" }}
        >
          <TaggedContentCard
            style={{ backgroundColor: "black", color: "white", height: "100%" }}
            thumbnail="https://example.com/image1.jpg" // Replace with actual image URL
            title={<span className="text-[#64fcd8]">Project Name 1</span>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos ea sed error distinctio labore nobis quam id vel repellendus fuga explicabo facilis nulla alias deserunt placeat."
            tags={[
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://github.com/project1">GitHub</a>
              </button>,
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://example.com/live1">LiveLink</a>
              </button>
            ]}
          />
        </div>

        {/* Card 2 */}
        <div
          className="card text-white p-2  rounded-lg"
          style={{ width: "220px", height: "350px", paddingBottom: "23rem" }}
        >
          <TaggedContentCard
            style={{ backgroundColor: "black", color: "white", height: "100%" }}
            thumbnail="https://example.com/image2.jpg" // Replace with actual image URL
            title={<span className="text-[#64fcd9]">Project Name 2</span>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos ea sed error distinctio labore nobis quam id vel repellendus fuga explicabo facilis nulla alias deserunt placeat."
            tags={[
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://github.com/project2">GitHub</a>
              </button>,
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://example.com/live2">LiveLink</a>
              </button>
            ]}
          />
        </div>

        {/* Card 3 */}
        <div
          className="card text-white p-2 rounded-lg "
          style={{ width: "220px", height: "350px", paddingBottom: "23rem" }}
        >
          <TaggedContentCard
            style={{ backgroundColor: "black", color: "white", height: "100%" }}
            thumbnail="https://example.com/image3.jpg" // Replace with actual image URL
            title={<span className="text-[#64fcd9]">Project Name 3</span>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos ea sed error distinctio labore nobis quam id vel repellendus fuga explicabo facilis nulla alias deserunt placeat."
            tags={[
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://github.com/project3">GitHub</a>
              </button>,
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://example.com/live3">LiveLink</a>
              </button>
            ]}
          />
        </div>

        {/* Card 4 */}
        <div
          className="card text-white p-2 rounded-lg   "
          style={{ width: "220px", height: "350px", paddingBottom: "23rem" }}
        >
          <TaggedContentCard
            style={{ backgroundColor: "black", color: "white", height: "100%" }}
            thumbnail="https://example.com/image4.jpg" // Replace with actual image URL
            title={<span className="text-[#64fcd9]">Project Name 4</span>}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos ea sed error distinctio labore nobis quam id vel repellendus fuga explicabo facilis nulla alias deserunt placeat."
            tags={[
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://github.com/project4">GitHub</a>
              </button>,
              <button className="bg-[#64fcd9] text-black px-3 py-1 rounded-md hover:font-semibold">
                <a href="https://example.com/live4">LiveLink</a>
              </button>
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Project;
