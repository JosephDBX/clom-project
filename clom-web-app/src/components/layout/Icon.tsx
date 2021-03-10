import React from "react";

interface IconProps {
    className: string;
    mdi: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ className, mdi }) => {
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d={mdi} />
    </svg>
}

export default Icon;