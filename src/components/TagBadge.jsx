// Tag pill used inside cards with remove button
export default function TagBadge({ tag, onRemove }) {
  const styles = {
    Work: "bg-blue-500/10 text-blue-300 border border-blue-400/20",
    Personal: "bg-green-500/10 text-green-300 border border-green-400/20",
    Urgent: "bg-red-500/10 text-red-300 border border-red-400/20",
    Learning: "bg-yellow-500/10 text-yellow-300 border border-yellow-400/20",
    Default: "bg-gray-600/10 text-gray-300 border border-gray-500/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-medium ${styles[tag] || styles.Default}`}
    >
      <span>{tag}</span>
      {onRemove && (
        <button
          onClick={(e) => { e.stopPropagation(); onRemove(tag); }}
          className="ml-1 text-xs rounded-full px-[4px] py-[1px] hover:bg-white/5"
          aria-label={`Remove ${tag}`}
        >
          ×
        </button>
      )}
    </span>
  );
}
