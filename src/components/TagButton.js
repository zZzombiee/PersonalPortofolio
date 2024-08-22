const TagButton = (props) => {
  const { buttonText } = props;
  return (
    <div>
      <button className="bg-gray-200 rounded-xl text-sm pr-5 pl-5 pt-1 pb-1 border-0 text-gray-600 font-medium">
        {buttonText}
      </button>
    </div>
  );
};

export default TagButton;
