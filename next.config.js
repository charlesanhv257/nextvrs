/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{
				hostname: "*",
			},
		],
	},
	experimental: {
		typedRoutes: false,
	},
	// don't use docker
	output: "standalone"
	// used in the Dockerfile
	// output: 
	// process.env.NEXT_OUTPUT === "standalone"
	// 	? "standalone"
	// 	: process.env.NEXT_OUTPUT === "export"
	// 	  ? "export"
	// 	  : undefined,
};

export default config;
