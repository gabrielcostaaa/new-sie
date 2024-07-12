import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function ListUsers() {
    return (
        <div className="border rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Avatar</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>CPF</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>123.456.789-00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">Jane Appleseed</TableCell>
              <TableCell>987.654.321-00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">Sarah Michaels</TableCell>
              <TableCell>456.789.123-00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>DW</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">David Wilson</TableCell>
              <TableCell>789.123.456-00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>EG</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">Emily Garcia</TableCell>
              <TableCell>321.654.987-00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    )
}