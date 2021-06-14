import { Character } from "../data/characters";
import { TalentLevelListBox } from "./TalentLevelListBox";

export function TalentLevelSelector(props: {
    label: string;
    start: any;
    setStart: (value: number) => void;
    goal: any;
    setGoal: (value: number) => void;
    icon: JSX.Element;
    character: Character;
}) {
    return (
        <div>
            <h3 className="buildlevellabel">{props.label}</h3>
            <div className="relative flex">
                <TalentLevelListBox first value={props.start} onChange={props.setStart} />
                {/* bg-gradient-to-r from-genshin-dark-element-hydro to-genshin-dark-element-cryo */}
                <div
                    className={`flex items-center px-2 bg-genshin-dark-element-${props.character.element} border-l-2 border-r-2 bg-opacity-40 border-gscale-dark-background-ternary`}
                >
                    {props.icon}
                </div>
                <TalentLevelListBox last value={props.goal} onChange={props.setGoal} />
            </div>
        </div>
    );
}
