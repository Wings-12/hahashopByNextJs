import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { SHOP_PHONE_NUMBER } from '@/lib/constants';
import React from 'react';

const faqs = [
  {
    question: '予約のキャンセルは可能ですか？',
    answer: ['いつでもキャンセル可能です。', 'キャンセル料も必要ありません。']
  },
  {
    question: '道具は持参する必要がありますか？',
    answer: ['基本的な道具は全て当店でご用意いたします。', 'ご自身でお持ちの道具があればご持参ください。']
  },
  {
    question: '初心者でも参加できますか？',
    answer: ['基本的に初心者対象で開催してます。', '安心してご参加ください。']
  },
  {
    question: '作品は持ち帰れますか？',
    answer: ['はい、ワークスペースで作成した作品は', 'お持ち帰りいただけます。', 'お持ち帰り用の入れ物をご持参ください。']
  }
];

export default function WorkshopPage() {
  return (
    <div className="flex flex-col items-center py-10 space-y-16">
      <div className="container mx-auto">
        {/* ワークスペース情報セクション */}
        <section>
          <h1 className="flex items-start justify-center text-4xl ext-4xl font-bold mb-8">ワークスペース</h1>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/services/workshop/workingSpace.jpg"
                  alt="ワークスペース"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-lg font-semibold">できること</h3>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-center inline-block">
                  <li>
                    生地をご購入のお客様には、<br />
                    &emsp;洋服の作り方をワークスペースで<br></br>お教えします。
                  </li>
                  <li>
                    アーティフィシャルフラワーを<br></br>ご購入のお客様には、<br />
                    &emsp;壁掛け・リースなどの作り方を<br></br>お教えします。
                  </li>
                </ol>
                <h3 className="text-lg font-semibold">ワークスペースの利用料金</h3>
                <p className="text-lg">
                  1時間500円となります。
                </p>
                {/* <h3 className="text-lg font-semibold">無料利用</h3>
                <p className="text-lg">
                  草花の鉢をご購入のお客様向けに、<br></br>寄せ植えやハンギング、<br></br>リース作成のレッスンも<br></br>無料で承ります。<br></br>（材料費別途）
                </p> */}
                {/* 利用可能な生地イメージ */}
                <Card className="bg-muted/50">
                  <CardContent className="flex flex-col items-center p-6 space-y-3">
                    <h3 className="font-semibold text-lg">利用可能な生地イメージ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Image src="/images/services/workshop/fabric/kiji1.jpg" alt="生地1" width={400} height={400} />
                      <Image src="/images/services/workshop/fabric/kiji2.jpg" alt="生地2" width={400} height={400} />
                    </div>
                    <h3 className="font-semibold text-lg">購入アーティフィシャルフラワー<br></br>イメージ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Image src="/images/products/flowers/artificial/purchasableArtificialFlower.jpg" alt="生地1" width={400} height={400} />
                    </div>
                  </CardContent>
                </Card>

                {/* 予約・お問い合わせボタン */}
                <Card className="bg-muted/50">
                  <CardContent className="flex flex-col items-center p-6 space-y-3">
                    <div className="bg-primary/10 rounded-full p-3 mb-2">
                      <Phone className="w-8 h-8 text-primary text-green-500" />
                    </div>
                    <h3 className="font-semibold text-lg">予約・お問い合わせ</h3>
                    <p className="text-muted-foreground text-center">
                      TEL：<a href={`tel:${SHOP_PHONE_NUMBER.replace(/-/g, '')}`} className="underline hover:text-primary">{SHOP_PHONE_NUMBER}</a>
                    </p>
                    <p className="text-muted-foreground text-center">
                      営業時間：10:00 - 18:00<br/>
                      定休日：火・水曜日
                    </p>
                    <Button size="lg" asChild>
                      <a href={`tel:${SHOP_PHONE_NUMBER.replace(/-/g, '')}`}>電話する</a>
                    </Button>
                    {/* 予約フォームがあればここにリンクボタン */}
                  </CardContent>
                </Card>

                {/* <Button className="w-full md:w-auto" size="lg" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">予約する</a>
                </Button> */}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* よくある質問セクション */}
        <section>
          <h2 className="flex items-start justify-center text-3xl font-bold mb-6 mt-6">よくある質問</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex flex-col items-center w-full max-w-xl mx-auto">
              <h3 className="text-lg font-semibold text-center">{faq.question}</h3>
              {Array.isArray(faq.answer) ? (
                <p className="text-base text-center mt-2">
                  {faq.answer.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== faq.answer.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              ) : (
                <p className="text-base text-center mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}