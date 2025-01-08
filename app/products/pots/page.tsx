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
import { MapPin, Clock, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featuredPots = [
  {
    title: "季節の寄せ植えセット",
    description: "春の草花を美しく組み合わせた寄せ植えです。玄関やベランダを華やかに彩ります。",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
    price: "¥4,800"
  },
  {
    title: "多肉植物の寄せ植え",
    description: "個性的な多肉植物を組み合わせた、手間いらずの寄せ植えです。",
    image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672",
    price: "¥3,800"
  },
  {
    title: "ハーブガーデンセット",
    description: "キッチンでも育てやすい、人気のハーブを組み合わせました。",
    image: "https://images.unsplash.com/photo-1466781783364-36c955e42a7f",
    price: "¥4,200"
  }
];

const shopInfo = {
  address: "東京都渋谷区XX-XX-XX",
  hours: "10:00 - 19:00（水曜定休）",
  phone: "03-XXXX-XXXX"
};

export default function PotsPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b"
          alt="Plants in pots"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">草花の鉢 (ポット)</h1>
            <p className="text-xl">
              季節の草花や観葉植物を、あなたの暮らしに合わせた鉢植えでご提案。
              プロのスタッフが丁寧にアドバイスいたします。
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">おすすめの商品</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredPots.map((pot) => (
              <CarouselItem key={pot.title} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-72">
                      <Image
                        src={pot.image}
                        alt={pot.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{pot.title}</h3>
                      <p className="text-muted-foreground mb-4">{pot.description}</p>
                      <p className="text-lg font-semibold">{pot.price}</p>
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

      {/* Features */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">専門スタッフによる相談</h3>
              <p className="text-muted-foreground">
                お客様のご要望や育てる環境に合わせて、最適な植物と鉢をご提案いたします。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">無料の植え替えサービス</h3>
              <p className="text-muted-foreground">
                ご購入時に、その場で植え替えを承ります。土や肥料もご相談ください。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">アフターケアの充実</h3>
              <p className="text-muted-foreground">
                育て方の疑問や困りごとがございましたら、いつでもご相談ください。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Shop Information */}
      <section className="container">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8">店舗案内</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">住所</h3>
                    <p className="text-muted-foreground">{shopInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">営業時間</h3>
                    <p className="text-muted-foreground">{shopInfo.hours}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">電話番号</h3>
                    <p className="text-muted-foreground">{shopInfo.phone}</p>
                  </div>
                </div>
                <Button size="lg" asChild>
                  <Link href="/contact">お問い合わせ・ご予約</Link>
                </Button>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1555955924-a8c17aa846b2"
                  alt="店舗外観"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Care Guide */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">お手入れガイド</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ポイント</TableHead>
              <TableHead>詳細</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">水やり</TableCell>
              <TableCell>土の表面が乾いたら、たっぷりと与えます。季節や環境により調整が必要です。</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">日光</TableCell>
              <TableCell>明るい場所で管理しましょう。直射日光は避けた方が良い植物もあります。</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">肥料</TableCell>
              <TableCell>生育期（春～秋）は月1回程度、緩効性肥料を与えましょう。</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">植え替え</TableCell>
              <TableCell>1～2年に1回、春か秋に行います。根詰まりしたら早めに植え替えましょう。</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}