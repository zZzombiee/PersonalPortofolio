const listTexts = [
  {
    date: "Nov 2021 - Present",
    title: "Sr. Frontend Developer",
    list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    list2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    list3: "Sed quis justo ac magna.",
    list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    date: "Jul 2017 - Oct 2021",
    title: "Team Lead",
    list1: "Sed quis justo ac magna.",
    list2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    list3: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    date: "Dec 2015 - May 2017",
    title: "Full Stack Developer",
    list1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    list2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    list3: "Ut pretium arcu et massa semper, id fringilla leo semper.",
    list4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Upwork = () => {
  return (
    <div>
      {listTexts.map((listText, index) => {
        return (
          <div
            key={index}
            className="m-4 p-8 rounded-lg bg-white shadow-md lg:flex lg:justify-between lg:w-3/4 lg:m-auto lg:mb-12"
          >
            <div className="lg:flex lg:items-start lg:w-1/3">
              <img src="UpworkIcon.svg" className="mb-4" />
            </div>
            <div className="lg:order-1 lg:w-1/3 lg:flex lg:justify-end">
              <p className="mb-4 font-normal text-base text-gray-700 ">
                {listText.date}
              </p>
            </div>
            <div className="lg:w-6/12">
              <p className="mb-4 font-semibold text-lg text-gray-900">
                {listText.title}
              </p>
              <ul className="font-normal text-base text-gray-600">
                <div className="flex gap-2">
                  <p className="text-base pl-2">•</p>
                  <li>{listText.list1}</li>
                </div>
                <div className="flex gap-2">
                  <p className="text-base pl-2">•</p>
                  <li>{listText.list2}</li>
                </div>
                <div className="flex gap-2">
                  <p className="text-base pl-2">•</p>
                  <li>{listText.list3}</li>
                </div>
                <div className="flex gap-2">
                  <p className="text-base pl-2">•</p>
                  <li>{listText.list4}</li>
                </div>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Upwork;
