// import Img from "react-optimized-image";
// import { Item } from "../data/items";
// import { toId } from "../lib";

// export default function MiniItemCard({ item, label }: { item: Item; label?: string }) {
//     return (
//         <div className="flex flex-col items-center justify-center w-12 m-1 overflow-hidden rounded shadow">
//             <div className="w-12 h-12 p-1 bg-gscale-dark-background-primary">
//                 <Img
//                     src={require(`../public/images/materials/${toId(item.name)}.png`)}
//                     alt={item.name}
//                     className="object-contain w-full h-full"
//                     title={item.name}
//                     draggable={false}
//                 />
//             </div>
//             {label ? (
//                 <div className="w-full text-center bg-gscale-dark-background-500">
//                     {label}
//                 </div>
//             ) : null}
//         </div>
//     );
// }

import Image from "next-native-image";
import { Item } from "../data/items";
import { ItemImage } from "./ItemImage";

export default function MiniItemCard({ item, label }: { item: Item; label?: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-12 m-1 overflow-hidden rounded shadow">
            <div className="w-12 h-12 p-1 bg-gscale-dark-background-primary">
                <ItemImage item={item} />
            </div>
            {label ? (
                <div className="w-full text-center bg-gscale-dark-background-500">
                    {label}
                </div>
            ) : null}
        </div>
    );
}
