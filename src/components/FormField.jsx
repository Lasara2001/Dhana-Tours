// Shared input style, so every field looks the same
export const inputClass =
    'w-full rounded-lg border border-white/15 bg-navy px-3 py-2.5 text-sm text-white placeholder-white/40 [color-scheme:dark] focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'

// A label + input + error message block
function FormField({ label, htmlFor, error, children }) {
    return (
        <div>
            <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-white/80">
                {label}
            </label>
            {children}
            {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
        </div>
    )
}
// A tick box with a label next to it
export function CheckboxField({ id, name, label, checked, onChange }) {
    return (
        <label
            htmlFor={id}
            className="flex cursor-pointer items-center gap-3 text-sm text-white/90"
        >
            <input
                id={id}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="h-5 w-5 cursor-pointer rounded accent-gold"
            />
            {label}
        </label>
    )
}


export default FormField