import { Breadcrumbs, Link, Typography } from "@mui/material";
import { montserrat } from "@/app/ui/fonts";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function CustomBreadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="breadcrumb" className={montserrat.className}>
      <Breadcrumbs
        separator=" / "
        sx={{
          fontSize: { xs: "1.25rem", md: "1.5rem" },
          mb: 3,
          "& .MuiBreadcrumbs-separator": {
            color: "#D9D9D9", // Set separator color
          },
        }}
      >
        {breadcrumbs.map((breadcrumb) =>
          breadcrumb.active ? (
            <Typography
              key={breadcrumb.href}
              color="#D9D9D9"
              sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}
            >
              {breadcrumb.label}
            </Typography>
          ) : (
            <Link
              key={breadcrumb.href}
              href={breadcrumb.href}
              color="#D9D9D9"
              sx={{
                textDecoration: "none",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              {breadcrumb.label}
            </Link>
          )
        )}
      </Breadcrumbs>
    </nav>
  );
}
