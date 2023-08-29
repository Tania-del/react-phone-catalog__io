export interface ProductCard {
  name: string;
  images: string[];
  colorsAvailable: string[];
  color: string;
  capacityAvailable: string[];
  priceRegular: number,
  priceDiscount: number,
  screen: string,
  resolution: string,
  processor: string,
  ram: string,
  camera: string,
  zoom: string,
  cell: string[],
  id: string,
  capacity: string,
  description: {
    title: string,
    text: string[],
  }[]
}
