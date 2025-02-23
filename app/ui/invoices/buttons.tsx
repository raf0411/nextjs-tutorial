import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteInvoice } from "@/app/lib/actions";
import { Button, IconButton } from "@mui/material";
import { deleteSelectedInvoices } from "@/app/lib/actions";

export function CreateInvoice() {
  return (
    <Button
      component={Link}
      href="/dashboard/invoices/create"
      variant="contained"
      color="primary"
      startIcon={<PlusIcon className="h-5" />}
      sx={{
        background: "green",
        height: 40,
        fontSize: "0.875rem",
        fontWeight: "bold",
        textTransform: "none",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        padding: "0 2rem",
        "&:hover": { backgroundColor: "lime" },
      }}
    >
      <span>Create Invoice</span>
    </Button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <IconButton
      component={Link}
      href={`/dashboard/invoices/${id}/edit`}
      sx={{
        borderRadius: "8px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        p: "6px",
        backgroundColor: "blue",
        "&:hover": { backgroundColor: "skyblue" },
      }}
    >
      <PencilIcon className="w-5" color="white" />
    </IconButton>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <IconButton
        type="submit"
        sx={{
          borderRadius: "8px",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          p: "6px",
          "&:hover": { backgroundColor: "indianred" },
          background: "red",
        }}
      >
        <TrashIcon className="w-5" color="white" />
      </IconButton>
    </form>
  );
}

export function DeleteSelectedInvoices({ selectedIds }: { selectedIds: string[] }) {
  const handleDelete = async () => {
    try {
      await deleteSelectedInvoices(selectedIds);
    } catch (error) {
      console.error("Error deleting selected invoices:", error);
    }
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleDelete}
      disabled={selectedIds.length === 0}
      sx={{
        background: "#710000",
        height: 40,
        fontSize: "0.875rem",
        fontWeight: "bold",
        textTransform: "none",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
        padding: "0 1.5rem",
        "&:hover": { backgroundColor: "indianred" },
      }}
    >
      Delete Selected
    </Button>
  );
}

