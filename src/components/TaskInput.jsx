import { useState } from "react";
import TagSelector from "./TagSelector";

const AVAILABLE_TAGS = ["Personal", "Work", "Urgent", "Learning"];

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState("");
  const [selectedTags, setSelectedTags] = useState(["Personal"]);

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text.trim(), selectedTags.length ? selectedTags : ["Personal"]);
    setText("");
    setSelectedTags(["Personal"]);
  };

  return (
    <div className="w-full sm:w-5/6 mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task title..."
        className="flex-1 bg-gray-800 text-sm text-white p-3 rounded-md outline-none border border-gray-700"
      />

      <div className="flex items-center gap-2">
        <TagSelector
          available={AVAILABLE_TAGS}
          selected={selectedTags}
          onChange={setSelectedTags}
        />
        <select
          defaultValue="Pending"
          className="bg-gray-800 text-xs text-gray-200 rounded-md px-2 py-1 border border-gray-700"
          onChange={(e) => {}}
          aria-hidden
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          onClick={submit}
          className="bg-indigo-500 hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-semibold"
        >
          Add
        </button>
      </div>
    </div>
  );
}
