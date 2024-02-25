/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR에서 styledComponent 작동
  compiler: { styledComponents: true },
  // Axios의 Proxy 설정
  async rewrites(){
    return[
      {
        // axios에서의 요청 URL패턴
        source: "/api/:slug*",
        // 백엔드 URL 패턴
        destination: "http://localhost:3001/:slug*",
      }
    ]
  }
}

module.exports = nextConfig
