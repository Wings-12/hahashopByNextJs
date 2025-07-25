import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MapPin, Calendar, MessageCircle, ShoppingBag, Clock, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SHOP_PHONE_NUMBER } from '@/lib/constants';

const newProducts = [
  {
    title: "エキセナ & 宿根サルビア",
    image: "/images/products/ekinaseaAndshukukonSarubia.jpg",
    price: "¥3,800"
  },
  {
    title: "アキレア",
    image: "/images/products/flowers/akirea.jpg",
    price: "¥12,800"
  },
  {
    title: "ペチュニア（ヴァンサンカン）",
    image: "/images/products/flowers/pechunia.jpg",
    price: "¥4,200"
  },
  {
    title: "ブルースター",
    image: "/images/products/flowers/bruusutaa.jpg",
    price: "¥4,200"
  },
  {
    title: "アンゲロニア",
    image: "/images/products/flowers/angeronia.jpg",
    price: "¥4,200"
  },
  {
    title: "アプテニア（斑入り）",
    image: "/images/products/flowers/aputenia_madarairi.jpg",
    price: "¥4,200"
  },
  {
    title: "アーティシャルフラワー１",
    image: "/images/products/flowers/artificial/artificialFlower1.jpg",
    price: "¥4,200"
  },
  {
    title: "アーティシャルフラワー２",
    image: "/images/products/flowers/artificial/artificialFlower2.jpg",
    price: "¥4,200"
  },
];

const recommendedProducts = [
  {
    title: "季節のドライフラワー",
    image: "https://images.unsplash.com/photo-1589244159943-460088ed5c1e",
    price: "¥2,800"
  },
  {
    title: "コットンブラウス",
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153",
    price: "¥9,800"
  },
  {
    title: "ハーブティーセット",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3",
    price: "¥3,200"
  },
  {
    title: "フラワーベース",
    image: "https://images.unsplash.com/photo-1578426720323-6d3b67133446",
    price: "¥5,600"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1558882224-dda166733046"
          alt="Hero image"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">花と雑貨の店</h1>
            <p className="text-xl mb-8">
              自然の美しさとファッションの魅力が出会う特別な場所。
              あなたの暮らしに彩りを添えるアイテムとワークショップをご用意しています。
            </p>
            <Button asChild size="lg">
              <Link href="/products">商品を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Products */}
      <section className="container px-10 md:px-20">
        <h2 className="text-3xl font-bold mb-8">新着商品</h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {newProducts.map((product) => (
                <CarouselItem key={product.title} className="md:basis-1/3 lg:basis-1/4">
                  <Card>
                    <CardContent className="p-0">
                      <div className="relative h-64">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{product.title}</h3>
                        <p className="text-muted-foreground">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <CarouselPrevious />
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="container px-10 md:px-20">
        <h2 className="text-3xl font-bold mb-8">おすすめ商品</h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {recommendedProducts.map((product) => (
                <CarouselItem key={product.title} className="md:basis-1/3 lg:basis-1/4">
                  <Card>
                    <CardContent className="p-0">
                      <div className="relative h-64">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">{product.title}</h3>
                        <p className="text-muted-foreground">{product.price}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <CarouselPrevious />
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="container">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/services/workshop/workingSpace.jpg"
            alt="ワークショップ"
            width={1200}
            height={400}
            className="object-cover w-full h-[400px]"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">ワークショップ</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                フラワーアレンジメントから洋服作りまで、
                様々なクリエイティブな体験をご用意しています。
              </p>
              <Button asChild size="lg" variant="outline" className="text-white border-white bg-black hover:bg-white hover:text-black">
                <Link href="/workshop">詳しく見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Information */}
      <section className="container">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-8">お店案内</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative h-[300px] mb-6">
                  <Image
                    src="/images/shopPlace.jpg"
                    alt="ワークスペース"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">住所</h3>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=茨城県水戸市堀町1857-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground underline hover:text-blue-600"
                    >
                      〒1310-0903<br/>
                      茨城県水戸市堀町1857-2
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">営業時間</h3>
                    <p className="text-muted-foreground">
                      11:00 - 18:00<br/>
                      定休日：火・水曜日<br/>
                      ※祝日は営業します。
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">お問い合わせ</h3>
                      <p className="text-muted-foreground">
                        TEL：<a href={`tel:${SHOP_PHONE_NUMBER.replace(/-/g, '')}`} className="underline hover:text-primary">{SHOP_PHONE_NUMBER}</a>
                      </p>
                  </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Google Mapを埋め込んでお店の場所を表示*/}

      {/* Testimonials */}
      {/* <section className="container">
        <h2 className="text-3xl font-bold mb-8">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "田中さゆり",
              comment: "フラワーアレンジメントのワークショップに参加しました。先生の丁寧な指導のおかげで、素敵な作品が作れました。",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
            },
            {
              name: "佐藤健一",
              comment: "妻への誕生日プレゼントで購入した花束が とても素敵で喜んでもらえました。スタッフの方の親切な対応にも感謝です。",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            }
          ].map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-muted-foreground">{testimonial.comment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="container">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
              <p className="mb-6 text-muted-foreground">
                商品やワークショップについて、お気軽にお問い合わせください。
              </p>
              <Button asChild size="lg">
                <Link href="/contact">お問い合わせする</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section> */}
    </div>
  );
}