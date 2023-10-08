export default function Button({ 
  children, 
}: {
  children: React.ReactNode,
}) {
  return (
    <button className="bg-primary text-primary-content p-8 m-4 text-xl md:text-2xl flex-1">
      { children }
    </button>
  );
}