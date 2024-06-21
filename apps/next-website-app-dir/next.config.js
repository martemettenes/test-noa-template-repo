/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
	transpilePackages: ["ui", "common"],
	experimental: {
		serverComponentsExternalPackages: ["node-fetch"],
	},
};

module.exports = nextConfig;
