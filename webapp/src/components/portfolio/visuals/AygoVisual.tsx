export default function AygoVisual() {
  return (
    <div className="w-full aspect-[16/10] overflow-hidden">
      <img
        src="/aygo.jpg"
        alt="Toyota Aygo X"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
}
