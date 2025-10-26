export default function GridOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6">
        <div className="grid grid-cols-3 h-full">
          <div className="border-r border-border/30"></div>
          <div className="border-r border-border/30"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
