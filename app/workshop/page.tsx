import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const faqs = [
  {
    question: '予約のキャンセルは可能ですか？',
    answer: '開催日の3日前までであれば、全額返金にて承ります。それ以降は返金できかねますのでご了承ください。'
  },
  {
    question: '道具は持参する必要がありますか？',
    answer: '基本的な道具は全て当店でご用意いたします。エプロンのみご持参ください。'
  },
  {
    question: '初心者でも参加できますか？',
    answer: '経験は問いません。丁寧にご指導させていただきますので、安心してご参加ください。'
  },
  {
    question: '作品は持ち帰れますか？',
    answer: 'はい、ワークショップで作成した作品は全てお持ち帰りいただけます。'
  }
];

export default function WorkshopPage() {
  return (
    <div className="container py-10 space-y-16">
      {/* ワークショップ情報セクション */}
      <section>
        <h1 className="text-4xl font-bold mb-8">ワークショップ情報</h1>
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1464699908537-0954e50791ee"
                alt="ワークショップ"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg">
                アーティフィシャルフラワーや洋服の生地をご購入のお客様は、無料で作り方をお教えします。
              </p>
              <p className="text-lg">
                ワークスペースのご利用は1時間500円となります。
              </p>
              <p className="text-lg">
                草花の鉢をご購入のお客様向けに、寄せ植えやハンギング、リース作成のレッスンも無料で承ります。（材料費別途）
              </p>
              <Button className="w-full md:w-auto" size="lg" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">予約する</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* よくある質問セクション */}
      <section>
        <h2 className="text-3xl font-bold mb-6">よくある質問</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}