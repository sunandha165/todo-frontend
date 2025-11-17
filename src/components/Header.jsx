export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-xs text-gray-400">Today</div>
        <div className="text-xl font-semibold">Hi, Mark Markov</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#edf2ff] flex items-center justify-center text-[#4B7BF5]">M</div>
      </div>
    </div>
  );
}
