import {
  Badge,
  Card,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/Index";

export default function TestePage() {
  return (
    <div className="p-10">
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell header>Nome</TableCell>

              <TableCell header>Plano</TableCell>

              <TableCell header>Status</TableCell>
            </TableRow>
          </TableHeader>

          <tbody>
            <TableRow>
              <TableCell>João</TableCell>

              <TableCell>Premium</TableCell>

              <TableCell>
                <Badge>Ativo</Badge>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Maria</TableCell>

              <TableCell>Básico</TableCell>

              <TableCell>
                <Badge color="yellow">Pendente</Badge>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
