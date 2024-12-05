import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const Transaction = [
    {
        invoice: "INV-2023001",
        createdAt: "2023-01-01",
        totalTransaction: "Rp. 1.000.000",
        status: "Done",
        paymentMethod: "Cash",
    },
    {
        invoice: "INV-2023123",
        createdAt: "2023-01-05",
        totalTransaction: "Rp. 500.000",
        status: "Pending",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV-2023187",
        createdAt: "2023-02-10",
        totalTransaction: "Rp. 750.000",
        status: "Done",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV-2023256",
        createdAt: "2023-03-15",
        totalTransaction: "Rp. 300.000",
        status: "Cancelled",
        paymentMethod: "E-Wallet",
    },
    {
        invoice: "INV-2023412",
        createdAt: "2023-04-20",
        totalTransaction: "Rp. 2.000.000",
        status: "Done",
        paymentMethod: "Cash",
    },
    {
        invoice: "INV-2023589",
        createdAt: "2023-05-25",
        totalTransaction: "Rp. 1.200.000",
        status: "Refunded",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV-2023675",
        createdAt: "2023-06-30",
        totalTransaction: "Rp. 800.000",
        status: "Pending",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV-2023744",
        createdAt: "2023-07-05",
        totalTransaction: "Rp. 600.000",
        status: "Done",
        paymentMethod: "E-Wallet",
    },
    {
        invoice: "INV-2023890",
        createdAt: "2023-08-10",
        totalTransaction: "Rp. 400.000",
        status: "Cancelled",
        paymentMethod: "Cash",
    },
    {
        invoice: "INV-2023999",
        createdAt: "2023-09-15",
        totalTransaction: "Rp. 3.000.000",
        status: "Done",
        paymentMethod: "Credit Card",
    },
];



export function TableTransaction() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total Transaction</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Detail</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Transaction.map((user) => (
                    <TableRow key={user.invoice}>
                        <TableCell className="font-medium">{user.invoice}</TableCell>
                        <TableCell>{user.createdAt}</TableCell>
                        <TableCell>{user.totalTransaction}</TableCell>
                        <TableCell>{user.status}</TableCell>
                        <TableCell>{user.paymentMethod}</TableCell>
                        <TableCell>Detail</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter> */}
        </Table>
    )
}
