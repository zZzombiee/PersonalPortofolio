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
      {listTexts.map((listText) => {
        return (
          <div className="m-4 p-8 rounded-xl bg-white shadow-md xl:flex xl:justify-between xl:w-3/4 xl:m-auto xl:mb-12">
            <div className="xl:flex xl:items-start xl:w-1/3">
              <img src="UpworkIcon.svg" className="mb-4" />
            </div>
            <div className="xl:order-1 xl:w-1/3 xl:flex xl:justify-end">
              <p className="mb-4 font-normal text-base text-gray-700 ">
                {listText.date}
              </p>
            </div>
            <div className="xl:w-6/12">
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
