import Image from "next-native-image";

export default function MiniItemCard({
    imageUrl,
    imageName,
    label,
}: {
    imageUrl: string;
    imageName: string;
    label: any;
}) {
    return (
        <div className="flex flex-col items-center justify-center w-12 m-1 overflow-hidden rounded shadow">
            <div className="w-12 h-12 p-1 bg-gscale-dark-background-secondary">
                <Image
                    width="70"
                    layout="native"
                    src={imageUrl}
                    alt={imageName}
                    className="object-contain w-full h-full"
                    title={imageName}
                />
            </div>
            <div className="w-full text-center bg-gscale-dark-background-primary">{label}</div>
        </div>
    );
}
