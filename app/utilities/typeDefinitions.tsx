import type { ClothingCollection, Currency } from "~/utilities/enum";

export interface Item {
    id: string;
    imageId: string;
    collectionType: ClothingCollection;
    name: string;
    currency: Currency;
    price: number;
}
