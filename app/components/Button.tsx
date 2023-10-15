'use client';

export default function Button({ 
  children, 
  onClick,
}: {
  children: React.ReactNode,
  onClick?: () => void,
}) {
  return (
    <button className="bg-primary text-primary-content py-8 px-2 md:px-8 md:py-8 m-auto text-xl md:text-2xl flex-1 whitespace-nowrap animate-inMap" onClick={onClick}>
      { children }
    </button>
  );
}