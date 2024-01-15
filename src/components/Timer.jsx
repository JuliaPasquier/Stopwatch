export default function Timer(props) {
  return (
    <div className=" m-[3rem] w-full h-[12%] flex justify-center items-center font-sans text-6xl text-white">
      <span className="digits">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
      </span>
      <span
        className="digits mili-sec text-red-800
"
      >
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
}
