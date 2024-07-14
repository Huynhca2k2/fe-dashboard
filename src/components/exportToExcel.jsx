import { Button } from "@radix-ui/themes";
import React from "react";
import * as XLSX from "xlsx";

const ExportToExcel = ({ users }) => {
  const exportToExcelUser = () => {
    const fileName = "users.xlsx";
    const header = [
      "Image",
      "Email",
      "Phone Number",
      "First Name",
      "Last Name",
      "Role",
      "Created At",
      "Updated At",
    ];

    const data = users.map((user) => ({
      Image: user.image,
      Email: user.email,
      "Phone Number": user.phoneNumber,
      "First Name": user.firstName,
      "Last Name": user.lastName,
      Role: user.role,
      "Created At": user.createdAt.toLocaleString(),
      "Updated At": user.updatedAt.toLocaleString(),
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data, { header });

    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

    XLSX.writeFile(workbook, fileName);
  };

  return (
    <Button
      color="gray"
      variant="soft"
      highContrast
      className="!cursor-pointer"
      onClick={exportToExcelUser}
    >
      Export to Excel
    </Button>
  );
};

export default ExportToExcel;
