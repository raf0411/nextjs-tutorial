import Image from "next/image";
import { UpdateInvoice, DeleteInvoice } from "@/app/ui/invoices/buttons";
import InvoiceStatus from "@/app/ui/invoices/status";
import { formatDateToLocal, formatCurrency } from "@/app/lib/utils";
import { fetchFilteredInvoices, fetchFilteredByStatusInvoices } from "@/app/lib/data";
import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export default async function InvoicesTable({
  query,
  status,
  currentPage,
  sortBy, 
  order,
}: {
  query?: string;
  status?: string;
  currentPage: number;
  sortBy?: string;
  order?: string;
}) {
  const invoices = await fetchFilteredInvoices(query || "", currentPage, sortBy, order);

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ overflowX: "auto", bgcolor: "#272727", borderRadius: 2 }}>
        <TableContainer
          component={Paper}
          sx={{ display: { background: "#232323", xs: "none", md: "block" } }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ borderBottom: "2px solid #444444" }}>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold" color="#D9D9D9">
                    Customer
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold" color="#D9D9D9">
                    Email
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold" color="#D9D9D9">
                    Amount
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold" color="#D9D9D9">
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold" color="#D9D9D9">
                    Status
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" fontWeight="bold" color="#D9D9D9">
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices?.map((invoice) => (
                <TableRow key={invoice.id} sx={{ borderBottom: "2px solid #444444" }}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <Typography variant="body1" sx={{ ml: 1 }} color="#D9D9D9">
                        {invoice.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="#D9D9D9">
                      {invoice.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" color="#D9D9D9">
                      {formatCurrency(invoice.amount)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="#D9D9D9">
                      {formatDateToLocal(invoice.date)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <InvoiceStatus status={invoice.status} />
                  </TableCell>
                  <TableCell align="right">
                    <Box display="flex" justifyContent="end" gap={1}>
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
