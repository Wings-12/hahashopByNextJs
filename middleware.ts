import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

console.log('BASIC_AUTH_USER:', process.env.BASIC_AUTH_USER);
console.log('BASIC_AUTH_PASSWORD:', process.env.BASIC_AUTH_PASSWORD);

// 環境変数から認証情報を取得
const BASIC_AUTH_USER = process.env.BASIC_AUTH_USER;
const BASIC_AUTH_PASSWORD = process.env.BASIC_AUTH_PASSWORD;

export function middleware(request: NextRequest) {
  // 認証設定が不足している場合は警告を表示
  if (!BASIC_AUTH_USER || !BASIC_AUTH_PASSWORD) {
    console.warn('Basic認証の環境変数が設定されていません');
    return NextResponse.next();
  }

  // 認証ヘッダーの取得
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    // 認証ヘッダーがない場合は認証を要求
    return new NextResponse(null, {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  try {
    // Basic認証のデコード
    const [scheme, encoded] = authHeader.split(' ');

    if (!scheme || !encoded || scheme.toLowerCase() !== 'basic') {
      throw new Error('Invalid authentication format');
    }

    const decoded = atob(encoded);
    const [username, password] = decoded.split(':');

    // 認証情報の検証
    if (username === BASIC_AUTH_USER && password === BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }

    throw new Error('Invalid credentials');
  } catch {
    return new NextResponse(null, {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }
}

// middlewareを適用するパスを指定
export const config = {
  // とにかく全パスに掛けてみる
  matcher: ['/'],
};