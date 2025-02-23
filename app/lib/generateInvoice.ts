import { jsPDF } from "jspdf";
import { Invoice } from "./definitions";

export const generateInvoice = (invoiceData: Invoice) => {
  const formattedAmount = `$${(invoiceData.amount / 100).toFixed(2)}`;
  const formattedDate = new Date(invoiceData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const doc = new jsPDF();
  
  doc.setFont("courier", "bold");
  doc.setFontSize(20);
  doc.text("Payment Invoice", 105, 20, { align: "center" });

  doc.line(20, 25, 190, 25);

  doc.setFont("courier", "normal");
  doc.setFontSize(12);
  doc.text(`Invoice ID: ${invoiceData.id}`, 20, 40);
  doc.text(`Customer: ${invoiceData.name}`, 20, 50);

  doc.text(`Amount: ${formattedAmount}`, 20, 60);
  doc.text(`Status: ${invoiceData.status.toUpperCase()}`, 20, 70);
  doc.text(`${formattedDate}`, 190, 70, { align: "right" });

  doc.line(20, 75, 190, 75);

  doc.setFontSize(10);
  doc.text("Thank you for your cooperation!", 105, 90, { align: "center" });

  doc.save(`${invoiceData.id}.pdf`);
};
