import Image from "next/image";
import Link from "next/link";

const WhatsApp = () => {
    return (
        <div className="fixed right-4 bottom-12 z-50 cursor-pointer">
            <Link href="https://api.whatsapp.com/send?phone=8801861714318&text=Welcome!%20Feel%20free%20to%20contact%20me%20on%20WhatsApp." target="_blank" rel="noopener noreferrer">
            <Image src='/WhatsApp-Icon.webp' width={50} height={50} alt="whatsapp"/>
            </Link>
        </div>
    );
};

export default WhatsApp;