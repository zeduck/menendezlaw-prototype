'use client';

export default function Button({ 
  children, 
  onClick,
}: {
  children: React.ReactNode,
  onClick?: () => void,
}) {
  return (
    <button className="bg-primary text-primary-content py-5 px-2 md:px-5 md:py-5 m-auto text-xl lg:text-2xl flex-1 whitespace-nowrap animate-inContent" onClick={onClick}>
      { children }
    </button>
  );
}