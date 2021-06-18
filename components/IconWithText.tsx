import React from "react";

interface IconWithTextProps {
    icon: JSX.Element;
}

export const IconWithText: React.FC<IconWithTextProps> = ({ icon, children }) => {
    return (
        <div className="flex items-center">
            {icon}
            <div className="ml-1">{children}</div>
        </div>
    );
};
