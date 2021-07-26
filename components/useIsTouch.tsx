import { useEffect, useState } from "react";

export function useIsTouch() {
    const [isTouch, setisTouch] = useState(false);

    useEffect(() => {
        setisTouch(
            (() => {
                try {
                    document.createEvent("TouchEvent");
                    return true;
                } catch {
                    return false;
                }
            })()
        );
    });

    return isTouch;
}
