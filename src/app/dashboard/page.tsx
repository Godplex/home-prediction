export default function Dashboard() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-primary-100 to-secondary-100 text-foreground min-h-[calc(100vh-65px)] py-6">
      <div className="container max-w-7xl px-6 md:px-0 flex flex-col items-center">
        <iframe
          className="w-full aspect-video"
          title="reporte"
          src="https://app.powerbi.com/view?r=eyJrIjoiNGRhZGY3MDQtNGQ2Yi00ZmU2LTk5NjMtOWJlNWMxNTA3MzdiIiwidCI6ImQ1MTM4OGVmLTZhYjAtNDM2My05Zjk0LWQ1NjY0NGE0NTk3MCIsImMiOjR9"
        />
      </div>
    </div>
  );
}
