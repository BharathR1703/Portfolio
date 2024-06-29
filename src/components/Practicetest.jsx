import React from 'react'

const Practice = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis";
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    const words = text.split(' ');
    const initialColors = words.map(() => getRandomColor());
    setColors(initialColors);

    const intervalId = setInterval(() => {
      setColors(words.map(() => getRandomColor()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [text]);
  return (
    <div className="border-b border-neutral-800 pb-24">
      <div className='mx-9 justify-center'>
        {text.split(' ').map((word, index) => (
          <span
            key={index}
            className='my-10 text-center text-4xl'
            style={{ color: colors[index] }}
          >
            {word}{" "}
          </span>
        ))}
      </div>

    </div>
  );
}

export default Practice