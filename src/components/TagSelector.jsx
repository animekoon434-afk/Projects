import { useState, useRef, useEffect } from "react";

/*
  TagSelector: separate dropdown to pick multiple tags.
  Props:
   - available (array of strings)
   - selected (array)
   - onChange(newSelectedArray)
*/
export default function TagSelector({ available = [], selected = [], onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const toggle = (tag) => {
    if (selected.includes(tag)) onChange(selected.filter(t => t !== tag));
    else onChange([...selected, tag]);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="bg-gray-800 text-xs text-gray-200 px-3 py-1 rounded-md border border-gray-700"
      >
        Tags ⌄
      </button>

      {open && (
        <div className="absolute z-30 mt-2 right-0 w-44 bg-gray-800 border border-gray-700 rounded-md shadow-lg p-3">
          <div className="flex flex-col gap-2">
            {available.map((tag) => (
              <label key={tag} className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selected.includes(tag)}
                  onChange={() => toggle(tag)}
                  className="form-checkbox h-4 w-4 text-indigo-500 bg-gray-700 border-gray-600 rounded"
                />
                <span className="text-sm text-gray-200">{tag}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
