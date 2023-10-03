import { ResponsiveImage } from "~/components/AssetsFetcher";
import type { Item } from "~/utilities/typeDefinitions";
import { CurrencySymbol } from "~/utilities/enum";
import { Link } from "@remix-run/react";

interface ItemCardProps {
    item: Item;
}
const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <Link className="flex flex-col items-center" to="/">
            <div className="flex flex-col justify-between">
                <ResponsiveImage publicId={item.imageId} imageClass="" />
                <div className="text-left flex flex-col justify-evenly py-4 min-h-[8rem] md:min-h-[9rem]">
                    <p className="font-poppins uppercase text-sm text-paragraph-grey">
                        {item.collectionType}
                    </p>
                    <h2 className="font-poppins font-medium text-subheading-black text-1xl md:text-2xl">
                        {item.name}
                    </h2>
                    <h2 className="font-poppins font-extralight text-primary-700 text-2xl md:text-3xl">
                        <span>{CurrencySymbol[item.currency]} </span>
                        {item.price}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default ItemCard;
