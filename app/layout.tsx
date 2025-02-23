import "@/app/ui/global.css";
import { poppins } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black text-[#D9D9D9]`}>{children}</body>
    </html>
  );
}
