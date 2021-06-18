import {
    BanIcon,
    InformationCircleIcon,
    ExclamationIcon,
} from "@heroicons/react/outline";
import React from "react";

interface PageDialougeProps {
    error?: any;
    warning?: any;
    info?: any;
    heading?: string;
    text: string;
}

export const PageDialouge: React.FC<PageDialougeProps> = ({
    error,
    warning,
    heading,
    text,
}) => {
    const headingText = heading
        ? heading
        : error
        ? "Error"
        : warning
        ? "Warning"
        : "Info";

    let colors: string = "text-blue-100 bg-blue-400 ring-blue-400 bg-opacity-20";
    if (error) colors = "text-red-900 bg-red-200 ring-red-500  bg-opacity-90";
    else if (warning)
        colors = "text-yellow-100 bg-yellow-400 ring-yellow-400 bg-opacity-20";

    return (
        <div className={`flex px-3 py-2 my-6 rounded ring-1 ${colors}`}>
            {error ? (
                <BanIcon className="w-6 h-6 mr-2" />
            ) : warning ? (
                <ExclamationIcon className="w-6 h-6 mr-2" />
            ) : (
                <InformationCircleIcon className="w-6 h-6 mr-2" />
            )}
            <div>
                <div className="flex items-center mb-1 font-semibold">{headingText}</div>
                <p>{text}</p>
            </div>
        </div>
    );
};
