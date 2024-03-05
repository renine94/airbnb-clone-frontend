/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // next 12.3.0 이전 버전 사용시 아래처럼 설정해야 한다.
        // domains: ['localhost', 'picsum.photos'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**'
            },
        ]
    }
};

export default nextConfig;
