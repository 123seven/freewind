"use client";
import Image from "next/image";
import { useModal } from "@/components/modals/providers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "牧高笛露营椅",
    href: "#",
    price: "5¥/天",
    imageSrc: "/_static/images/1.jpg",
    imageAlt: "牧高笛露营椅",
  },
  {
    id: 2,
    name: "探险者月亮椅",
    href: "#",
    price: "6¥/天",
    imageSrc: "/_static/images/2.jpg",
    imageAlt: "探险者月亮椅",
  },
  {
    id: 3,
    name: "牧高笛露营椅x2",
    href: "#",
    price: "8¥/天",
    imageSrc: "/_static/images/3.jpg",
    imageAlt: "牧高笛露营椅x2",
  },
  {
    id: 4,
    name: "牧高笛冷山2双人帐篷",
    href: "#",
    price: "30¥/天",
    imageSrc: "/_static/images/4.jpg",
    imageAlt: "牧高笛冷山2双人帐篷",
  },
  {
    id: 5,
    name: "京东京造露营车",
    href: "#",
    price: "30¥/天",
    imageSrc: "/_static/images/5.jpg",
    imageAlt: "京东京造露营车",
  },
  {
    id: 6,
    name: "1.2米卷蛋桌",
    href: "#",
    price: "15¥/天",
    imageSrc: "/_static/images/6.jpg",
    imageAlt: "1.2米卷蛋桌",
  },
  {
    id: 7,
    name: "露营灯",
    href: "#",
    price: "3¥/天",
    imageSrc: "/_static/images/7.jpg",
    imageAlt: "露营灯",
  },
  {
    id: 7,
    name: "骆驼黑胶天幕",
    href: "#",
    price: "10¥/天",
    imageSrc: "/_static/images/8.jpg",
    imageAlt: "骆驼黑胶天幕",
  },
  // More products...
];

<div className=""></div>;

export default function Example() {
  const { openModal } = useModal();

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
        {products.map((product) => (
          <Card key={product.id} className="group" onClick={openModal}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground font-bold">
                {product.price}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 pt-0">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7 shadow-xl hover:bg-gray-200">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="object-cover object-center group-hover:opacity-75"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
