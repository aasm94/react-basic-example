export default function Header({ title, description}) {
  return (
    <div className="p-5 bg-primary text-white text-center">
        <h1>{title}</h1>
        <p>{description}</p> 
    </div>
  );
}