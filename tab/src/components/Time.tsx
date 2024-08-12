function Time() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  const calculateTimeSuffix = () => {
    if (hours >= 5 && hours < 12) {
      return 'morning';
    } else if (hours >= 12 && hours < 17) {
      return 'afternoon';
    } else if (hours >= 17 && hours < 21) {
      return 'evening';
    } else {
      return 'night';
    }
  };

  const timeSuffix = calculateTimeSuffix();

  return (
    <div className='flex flex-col gap-2 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 fixed'>
      <h3 className='text-white text-[148px] font-["Inter Tight"]'>
        {formattedHours}:{formattedMinutes}
      </h3>
      <p className='text-white text-3xl text-center font-medium'>
        Good {timeSuffix}
      </p>
    </div>
  );
}

export { Time };
