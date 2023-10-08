export default function Button({ 
  children, 
  onClick,
}: {
  children: React.ReactNode,
  onClick?: () => void,
}) {
  return (
    <button className="bg-primary text-primary-content p-8 m-4 text-xl md:text-2xl flex-1 whitespace-nowrap" onClick={onClick}>
      { children }
    </button>
  );
}