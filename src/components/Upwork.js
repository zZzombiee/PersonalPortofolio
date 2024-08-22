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
  },
];

const Upwork = () => {
  return (
    <div>
      {listTexts.map((listText) => {
        return (
          <div className="m-4 p-8 rounded-xl bg-white shadow-md">
            <img src="UpworkIcon.svg" className="mb-4" />
            <p className="mb-4 font-normal text-base text-gray-700">
              {listText.date}
            </p>
            <p className="mb-4 font-semibold text-lg text-gray-900">
              {listText.title}
            </p>
            <ul className="font-normal text-base text-gray-600">
              <li>{listText.list1}</li>
              <li>{listText.list2}</li>
              <li>{listText.list3}</li>
              <li>{listText.list4}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Upwork;
