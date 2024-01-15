
export default function ControlButtons(props) {
  const StartButton = (
    <div className="btn font-sans w-[10vw] h-[5vh] rounded-lg mx-[6px] flex border border-red-600 justify-center items-center cursor-pointer text-white btn-one bg-red-600 btn-start"
         onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="flex">
      <div className="btn font-sans w-[10vw] h-[5vh] rounded-lg mx-[6px] flex border border-red-600 justify-center items-center cursor-pointer text-white btn-two " 
           onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn ont-sans w-[10vw] h-[5vh] rounded-lg mx-[6px] flex border border-red-600 justify-center items-center cursor-pointer text-white btn-one bg-red-600" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  
  return (
    <div className=" m-[3rem] w-full box-border flex items-center justify-center uppercase font-bold">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}