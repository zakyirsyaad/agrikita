import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const user = [
    {
        id: 1,
        name: "Seedings",
        status: "Done",
    },
    {
        id: 2,
        name: "Fertilization Level 1",
        status: "Done",
    },
    {
        id: 3,
        name: "Post Control",
        status: "Scheduled",
    },
]

export function TableHistory() {
    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>History</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {user.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.status}</TableCell>
                        <TableCell >Detail</TableCell>
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
