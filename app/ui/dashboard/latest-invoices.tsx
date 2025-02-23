import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import { fetchLatestInvoices } from "@/app/lib/data";
import { Typography, Container, Box } from "@mui/material";

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <Container className="flex w-full flex-col md:col-span-4">
      <h2 className={`${montserrat.className} mb-4 text-xl md:text-2xl text-[#D9D9D9]`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-[#232323] p-4">
        <div className="bg-[#343434] rounded-lg px-6">
          {latestInvoices.map((invoice, i) => (
            <div
              key={invoice.id}
              className={clsx(
                "flex flex-row items-center justify-between py-4",
                { "border-t border-[#444444]": i !== 0 }
              )}
            >
              <div className="flex items-center">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="min-w-0">
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                  >
                    {invoice.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#D9D9D9"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    {invoice.email}
                  </Typography>
                </div>
              </div>
              <Typography
                variant="body1"
                color="#D9D9D9"
                sx={{ fontFamily: montserrat.className, fontWeight: "medium" }}
              >
                {invoice.amount}
              </Typography>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-[#D9D9D9]" />
          <Typography variant="body2" color="#D9D9D9" sx={{ ml: 1 }}>
            Updated just now
          </Typography>
        </div>
      </div>
    </Container>
  );
}
