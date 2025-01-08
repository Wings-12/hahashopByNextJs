'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, Scissors, Flower2, PencilRuler } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const workshopExamples = [
  {
    title: "フラワーアレンジメント作品",
    description: "季節の花々を使った、オリジナルのアレンジメント",
    image: "https://images.unsplash.com/photo-1464699908537-0954e50791ee"
  },
  {
    title: "ハンドメイドワンピース",
    description: "自分サイズにぴったりの、春向けワンピース",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea"
  },
  {
    title: "多肉植物の寄せ植え",
    description: "個性的な組み合わせの、癒しの寄せ植え",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115"
  }
];

const workshopInfo = {
  address: "東京都渋谷区XX-XX-XX",
  hours: "10:00 - 19:00（水曜定休）",
  phone: "03-XXXX-XXXX"
};

const prices = [
  {
    category: "ワークスペース利用料",
    price: "500円/1時間",
    notes: "道具の使用料込み"
  },
  {
    category: "材料費",
    price: "実費",
    notes: "店内で購入した材料のみ使用可能"
  },
  {
    category: "指導料",
    price: "無料",
    notes: "店内で購入した商品の作り方指導"
  }
];

export default function CustomerCraftPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b"
          alt="Craft workshop"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">お客様クラフト</h1>
            <p className="text-xl">
              お好きな材料を選んで、あなただけの作品を作りませんか？
              快適なワークスペースと充実した道具をご用意しています。
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Flower2 className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">フラワーアレンジメント</h3>
              <p className="text-muted-foreground">
                季節の花々やドライフラワーを使って、
                世界でひとつだけのアレンジメントを。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Scissors className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">洋服作り</h3>
              <p className="text-muted-foreground">
                上質な生地から、あなたサイズの
                お気に入りの一着を。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <PencilRuler className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">専門スタッフのサポート</h3>
              <p className="text-muted-foreground">
                経験豊富なスタッフが、
                作品作りをていねいにサポート。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Example Works */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">作品例</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {workshopExamples.map((example) => (
              <CarouselItem key={example.title} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-72">
                      <Image
                        src={example.image}
                        alt={example.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                      <p className="text-muted-foreground">{example.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Usage Guide */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">ご利用案内</h2>
        <Tabs defaultValue="flow" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="flow">ご利用の流れ</TabsTrigger>
            <TabsTrigger value="price">料金案内</TabsTrigger>
            <TabsTrigger value="facility">設備・道具</TabsTrigger>
          </TabsList>
          <TabsContent value="flow">
            <Card>
              <CardContent className="p-6">
                <ol className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">1</span>
                    <span>店内で使用する材料をお選びください</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">2</span>
                    <span>受付でワークスペースの利用をお申し込みください</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">3</span>
                    <span>必要な道具をお貸出しいたします</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">4</span>
                    <span>分からないことがあれば、スタッフにお気軽にご相談ください</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="price">
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>項目</TableHead>
                      <TableHead>料金</TableHead>
                      <TableHead>備考</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prices.map((item) => (
                      <TableRow key={item.category}>
                        <TableCell className="font-medium">{item.category}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell>{item.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facility">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">フラワーアレンジメント用具</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>花バサミ</li>
                      <li>ワイヤー</li>
                      <li>フローラルテープ</li>
                      <li>花器</li>
                      <li>剣山</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">裁縫用具</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>ミシン</li>
                      <li>アイロン</li>
                      <li>裁縫道具セット</li>
                      <li>定規</li>
                      <li>型紙</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Workshop Information */}
      <section className="container">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8">ワークスペース案内</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">住所</h3>
                    <p className="text-muted-foreground">{workshopInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">営業時間</h3>
                    <p className="text-muted-foreground">{workshopInfo.hours}</p>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <Link href="/contact">ご予約・お問い合わせ</Link>
                </Button>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1520367445093-50dc08a59d9d"
                  alt="ワークスペース"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}