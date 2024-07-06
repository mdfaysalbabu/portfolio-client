import Image from "next/image";
import Link from "next/link";

const WhatsApp = () => {
    return (
        <div className="fixed right-4 bottom-12 z-50 cursor-pointer transition-transform transform hover:scale-110 animate-pulse">
            <Link href="https://api.whatsapp.com/send?phone=8801797657407&text=Welcome!%20Feel%20free%20to%20contact%20me%20on%20WhatsApp." target="_blank" rel="noopener noreferrer" legacyBehavior>
                <a className="flex items-center justify-center bg-green-500 rounded-full p-2 shadow-lg hover:bg-green-600">
                    <Image src='/WhatsApp-Icon.webp' width={50} height={50} alt="WhatsApp" className="rounded-full" />
                </a>
            </Link>
        </div>
    );
};

export default WhatsApp;
