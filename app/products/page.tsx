import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: '草花の鉢 (ポット)',
    description: '季節の草花や観葉植物を美しい鉢植えで。',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115',
    href: '/products/pots'
  },
  {
    title: 'アーティフィシャルフラワー',
    description: '本物そっくりの高品質な造花で、永遠の美しさを。',
    image: 'https://images.unsplash.com/photo-1589244159943-460088ed5c1e',
    href: '/products/artificial-flowers'
  },
  {
    title: '生地',
    description: '上質な素材で、あなたの創作をサポート。',
    image: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5',
    href: '/products/fabric'
  },
  {
    title: '焼き菓子',
    description: '手作りの温かみが詰まった美味しい焼き菓子。',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
    href: '/products/sweets'
  },
  {
    title: 'お客様クラフト',
    description: 'お客様の手作り作品を展示販売。',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b',
    href: '/products/customer-craft'
  },
  {
    title: 'サポートクラフト',
    description: '創作活動をサポートする道具や材料。',
    image: 'https://images.unsplash.com/photo-1452802447250-470a88ac82bc',
    href: '/products/support-craft'
  }
];

export default function ProductsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">商品・サービス</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.title} className="overflow-hidden">
            <Link href={product.href}>
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}