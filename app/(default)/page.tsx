"use client"
import Image from "next/image"
import { useModal } from "@/components/modals/providers"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const campProducts = [
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
    price: "15¥/天",
    imageSrc: "/_static/images/5.jpg",
    imageAlt: "京东京造露营车",
  },
  {
    id: 6,
    name: "1.2米卷蛋桌",
    href: "#",
    price: "10¥/天",
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
]
const photographyProducts = [
  {
    id: 101,
    name: "Sony A7M4相机",
    href: "#",
    price: "249¥/天(需要押金)",
    imageSrc: "/_static/images/101.jpg",
    imageAlt: "Sony A7M4相机",
  },
  {
    id: 102,
    name: "神牛 ML100Bi常亮灯",
    href: "#",
    price: "50¥/天",
    imageSrc: "/_static/images/102.jpg",
    imageAlt: "神牛 ML100Bi常亮灯",
  },
  {
    id: 103,
    name: "神牛V1索尼版闪光灯",
    href: "#",
    price: "60¥/天",
    imageSrc: "/_static/images/103.jpg",
    imageAlt: "神牛V1索尼版闪光灯",
  },
  {
    id: 104,
    name: "神牛V860三代索尼版闪光灯",
    href: "#",
    price: "40¥/天",
    imageSrc: "/_static/images/104.jpg",
    imageAlt: "神牛V860三代索尼版闪光灯",
  },
  {
    id: 105,
    name: "神牛V850三代索尼版闪光灯",
    href: "#",
    price: "35¥/天",
    imageSrc: "/_static/images/105.jpg",
    imageAlt: "神牛V850三代索尼版闪光灯",
  },
  {
    id: 106,
    name: "神牛TT520闪光灯",
    href: "#",
    price: "15¥/天",
    imageSrc: "/_static/images/106.jpg",
    imageAlt: "神牛TT520闪光灯",
  },

  {
    id: 107,
    name: "NiceFoto耐思90cm深抛柔光罩",
    href: "#",
    price: "30¥/天",
    imageSrc: "/_static/images/107.jpg",
    imageAlt: "NiceFoto耐思90cm深抛",
  },
  {
    id: 107,
    name: "神牛8080柔光罩",
    href: "#",
    price: "25¥/天",
    imageSrc: "/_static/images/108.jpg",
    imageAlt: "神牛8080柔光罩",
  },
  {
    id: 109,
    name: "神牛S2卡盘 x2",
    href: "#",
    price: "15¥/天",
    imageSrc: "/_static/images/109.jpg",
    imageAlt: "神牛S2卡盘",
  },
  {
    id: 110,
    name: "神牛X3-S索尼触屏引闪器",
    href: "#",
    price: "20¥/天",
    imageSrc: "/_static/images/110.jpg",
    imageAlt: "神牛X3-S索尼触屏引闪器",
  },
  {
    id: 111,
    name: "腾龙28-75mm F/2.8 Di III VXD G2镜头",
    href: "#",
    price: "100¥/天",
    imageSrc: "/_static/images/111.jpg",
    imageAlt: "腾龙28-75mm F/2.8 Di III VXD G2镜头",
  },
  {
    id: 112,
    name: "唯卓仕85mm F1.8 STM镜头",
    href: "#",
    price: "80¥/天",
    imageSrc: "/_static/images/112.jpg",
    imageAlt: "唯卓仕85mm F1.8 STM镜头",
  },
  // More products...
]
const ridingProducts = [
  {
    id: 201,
    name: "GoPro 运动相机",
    href: "#",
    price: "30¥/天",
    imageSrc: "/_static/images/201.jpg",
    imageAlt: "GoPro 运动相机",
  }
]


export default function Example() {
  const { openModal } = useModal()

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <Tabs defaultValue="camp" className="space-y-3">
        <TabsList>
          <TabsTrigger value="camp">露营装备</TabsTrigger>
          <TabsTrigger value="photography">摄影装备</TabsTrigger>
          <TabsTrigger value="riding">骑行装备</TabsTrigger>
        </TabsList>

        <TabsContent value="camp" className="space-y-4 mt-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {campProducts.map((product) => (
              <Card key={product.id} className="group" onClick={openModal}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-bold">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7 shadow-xl hover:bg-gray-200 flex items-center justify-center">
                    <Image
                      width={280}
                      height={280}
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="photography" className="space-y-4">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {photographyProducts.map((product) => (
              <Card key={product.id} className="group" onClick={openModal}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-bold">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7 shadow-xl hover:bg-gray-200 flex items-center justify-center">
                    <Image
                      width={280}
                      height={280}
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="riding" className="space-y-4">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            {ridingProducts.map((product) => (
              <Card key={product.id} className="group" onClick={openModal}>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-bold">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7 shadow-xl hover:bg-gray-200 flex items-center justify-center">
                    <Image
                      width={280}
                      height={280}
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
