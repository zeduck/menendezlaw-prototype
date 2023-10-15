export default function BackButton({ 
  children, 
  onClick,
}: {
  children: React.ReactNode,
  onClick?: () => void,
}) {
  return (
    <button className="bg-primary text-primary-content py-8 px-8 md:px-8 md:py-8 text-xl md:text-2xl flex-1 whitespace-nowrap animate-inContent" onClick={onClick}>
      { children }
    </button>
  );
}