import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { montserrat } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchInvoicesPages } from "@/app/lib/data";
import FilterDropdown from "@/app/ui/invoices/filter";
import OrderDropdown from "@/app/ui/invoices/order";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    sortBy?: string;
    order?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const sortBy = searchParams?.sortBy || "date";
  const orderBy = searchParams?.order || "asc";
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${montserrat.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <FilterDropdown />
        <OrderDropdown />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage + sortBy} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} sortBy={sortBy} order={orderBy} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
