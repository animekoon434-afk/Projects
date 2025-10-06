export default function Header() {
  return (
    <header className="w-full flex flex-col items-center gap-1 pb-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-400">📝 My To-Do Dashboard</h1>
      <p className="text-sm text-gray-400">Compact cards • tags inside each card • multi-tag selector</p>
    </header>
  );
}
