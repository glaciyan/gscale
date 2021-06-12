export function Star({ color }: { color?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 24 24`}
            className={`w-6 h-6 ${color ?? "text-gscale-dark-text-secondary"}`}
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="M12.705 4.552a.75.75 0 00-1.43-.003L9.68 9.522l-4.952-.011a.75.75 0 00-.463 1.34l4.098 3.203-1.38 5.015a.75.75 0 001.198.779l3.78-3.098 3.766 3.115a.75.75 0 001.203-.773l-1.357-5.021 4.112-3.184a.75.75 0 00-.457-1.343l-4.952-.011-1.571-4.98z"
            ></path>
        </svg>
    );
}
