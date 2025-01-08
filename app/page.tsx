import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MessageCircle, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">新着商品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
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
            }
          ].map((product) => (
            <Card key={product.title}>
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
          ))}
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">オンラインショップ</h3>
              <p className="text-muted-foreground mb-4">
                厳選された花々や手作りの服飾品を
                オンラインでお買い求めいただけます
              </p>
              <Button variant="outline" asChild>
                <Link href="/products">ショップを見る</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">ワークショップ</h3>
              <p className="text-muted-foreground mb-4">
                フラワーアレンジメントや
                ハンドメイドの楽しさを体験できます
              </p>
              <Button variant="outline" asChild>
                <Link href="/workshop">予約する</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
              <p className="text-muted-foreground mb-4">
                商品やワークショップについて
                お気軽にお問い合わせください
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">問い合わせる</Link>
              </Button>
            </CardContent>
          </Card>
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
    </div>
  );
}