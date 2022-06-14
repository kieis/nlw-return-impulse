import { CircleNotch } from "phosphor-react";

export function Loading () {
    return (
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <CircleNotch width="bold" className="w-4 h-4 animate-spin"/>
        </div>
    );
};