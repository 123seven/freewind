"use client";

import { useModal } from "@/components/modals/providers";

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

export default function Example() {
  const { openModal } = useModal();

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group" onClick={openModal}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7 shadow-xl hover:bg-gray-200">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="object-cover object-center group-hover:opacity-75 size-72"
                />
              </div>
              <h3 className="mt-4 text-sm ">{product.name}</h3>
              <p className="mt-1 text-lg font-medium ">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
