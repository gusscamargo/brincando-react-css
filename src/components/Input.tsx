import React from 'react';

interface Props {
    name: string,
    value: string
    set: (value: string) => void
}

const Input: React.FC<Props> = ({name, value, set}) => {
  return (
    <>
        <span>{name}</span>
        <input type="range" max="250" value={value}
            onChange={
                e => set(e.target.value)
            }
        />
        <input type="text" value={value} onChange={e => set(e.target.value)} />
    </>
  );
}

export default Input;
