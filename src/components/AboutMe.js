import Button from "@/components/Button";

const AboutMeTexts = [
  "I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.",
  "Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.",
  "With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.",
  "Finally, some quick bits about me.",
];
const listTexts = [
  "B.E. in Computer Engineering",
  "Full time freelancer",
  "Avid learner",
];

const AboutMe = () => {
  return (
    <div className="bg-gray-50 p-4 pb-16">
      <Button buttonText="About me" />
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <img
            src="image2.jpeg"
            className="h-[360px] w-[280px] m-auto mt-16 lg:w-[400px] lg:h-[480px] lg:ml-8 object-cover"
          />
        </div>
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="font-sans font-semibold text-2xl mt-12 ml:text-3xl">
            Curious about me? Here you have it:
          </h1>
          {AboutMeTexts.map((AboutMeText, index) => {
            return (
              <p
                className="mt-4 text-gray-600 text-base font-light"
                key={index}
              >
                {AboutMeText}
              </p>
            );
          })}
          <div className="flex mt-4 flex-wrap justify-between lg:justify-normal">
            {listTexts.map((listText, index) => {
              return (
                <div className="flex gap-2 mt-2 " key={index}>
                  <p className="text-base">•</p>
                  <p className="lg:w-64 w-36  text-gray-600 font-light">
                    {listText}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-gray-600 text-base font-light">
            {
              " One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
