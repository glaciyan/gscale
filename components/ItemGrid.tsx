import { BuildItem } from "../data/items";
import { toId } from "../lib";
import Image from "next-native-image";

export default function ItemGrid({ items }: { items: BuildItem[] }) {
    return (
        <div className="flex flex-wrap my-3">
            {items
                .sort((a, b) => a.order - b.order)
                .map((item) => {
                    return (
                        <div className="flex flex-col items-center justify-center w-12 m-1" key={`${toId(item.name)}`}>
                            <div className="h-12 p-1 bg-gscale-dark-background-secondary">
                                <Image
                                    width="70"
                                    layout="native"
                                    src={`/images/materials/${toId(item.name)}.png`}
                                    alt={item.name}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="w-full text-center bg-gscale-dark-background-primary">{item.amount}</div>
                        </div>
                    );
                })}
        </div>
    );
}
