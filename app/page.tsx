import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Calendar, MessageCircle, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const newProducts = [
  {
    title: "春の花束セット",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94",
    price: "¥3,800"
  },
  {
    title: "リネンワンピース",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    price: "¥12,800"
  },
  {
    title: "手作りクッキーセット",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
    price: "¥2,400"
  },
  {
    title: "多肉植物の寄せ植え",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115",
    price: "¥4,200"
  }
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
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1558882224-dda166733046"
          alt="Hero image"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">花と服の調和を楽しむ空間</h1>
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
            src="https://images.unsplash.com/photo-1464699908537-0954e50791ee"
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
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                <Link href="/workshop">詳しく見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
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
      </section>

      {/* Contact Section */}
      <section className="container">
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
      </section>
    </div>
  );
}