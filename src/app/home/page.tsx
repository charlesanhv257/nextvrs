import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export default function HomePage() {
    return (
        <>
            <div className="flex h-full flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Welcome to Saleor Storefront</h1>
                <p className="text-lg font-medium">
                    This is a fully functional e-commerce storefront built with Saleor as a backend.
                </p>
                <div className="mt-16">
                    <LinkWithChannel href="/">
                        <button>Explore Collection</button>
                    </LinkWithChannel>
                </div>
            </div>
        </>
    );
}
