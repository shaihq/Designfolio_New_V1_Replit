export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4" data-testid="text-dashboard-title">
          Dashboard
        </h1>
        <p className="text-lg text-foreground/60" data-testid="text-dashboard-description">
          Your dashboard content will appear here
        </p>
      </div>
    </div>
  );
}
