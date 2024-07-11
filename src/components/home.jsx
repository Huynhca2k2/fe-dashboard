import {
  Box,
  Button,
  Card,
  Container,
  DropdownMenu,
  Flex,
  IconButton,
  Table,
  Text,
  TextField,
} from "@radix-ui/themes";
import {
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cross1Icon,
  Cross2Icon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

function Home() {
  return (
    <Container size="4" className="py-6">
      <Card className="!px-0">
        <Flex className="mt-4 !justify-between items-center px-4">
          <Text className="text-lg font-medium">Users</Text>
          <Flex className="gap-4">
            <Button color="gray" variant="soft" highContrast>
              Export to Excel
            </Button>
            <Button color="gray" variant="outline" highContrast>
              Add New User
            </Button>
          </Flex>
        </Flex>
        <Flex gap="4" className="mt-6 px-4">
          <TextField.Root
            placeholder="Search name, email, phone…"
            className="w-[240px]"
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft" color="gray">
                Roles
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>Admin</DropdownMenu.Item>
              <DropdownMenu.Item>User</DropdownMenu.Item>
              <DropdownMenu.Item>Editor</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Button
            color="gray"
            variant="solid"
            highContrast
            className="!min-w-[80px]"
          >
            Search
          </Button>
        </Flex>
        <Table.Root className="mt-6">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phone Number</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Firstname</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Lastname</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>huynhca@example.com</Table.Cell>
              <Table.Cell>0813436664</Table.Cell>
              <Table.Cell>Cai Hoang</Table.Cell>
              <Table.Cell>Huynh</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell>
                <Flex gap="4">
                  <IconButton color="amber" variant="soft">
                    <Pencil2Icon width="18" height="18" />
                  </IconButton>
                  <IconButton color="crimson" variant="soft">
                    <Cross2Icon width="18" height="18" />
                  </IconButton>
                </Flex>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>huynhca@example.com</Table.Cell>
              <Table.Cell>0813436664</Table.Cell>
              <Table.Cell>Cai Hoang</Table.Cell>
              <Table.Cell>Huynh</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell>
                <Flex gap="4">
                  <IconButton color="amber" variant="soft">
                    <Pencil2Icon width="18" height="18" />
                  </IconButton>
                  <IconButton color="crimson" variant="soft">
                    <Cross2Icon width="18" height="18" />
                  </IconButton>
                </Flex>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>huynhca@example.com</Table.Cell>
              <Table.Cell>0813436664</Table.Cell>
              <Table.Cell>Cai Hoang</Table.Cell>
              <Table.Cell>Huynh</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell>
                <Flex gap="4">
                  <IconButton color="amber" variant="soft">
                    <Pencil2Icon width="18" height="18" />
                  </IconButton>
                  <IconButton color="crimson" variant="soft">
                    <Cross2Icon width="18" height="18" />
                  </IconButton>
                </Flex>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>huynhca@example.com</Table.Cell>
              <Table.Cell>0813436664</Table.Cell>
              <Table.Cell>Cai Hoang</Table.Cell>
              <Table.Cell>Huynh</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell>
                <Flex gap="4">
                  <IconButton color="amber" variant="soft">
                    <Pencil2Icon width="18" height="18" />
                  </IconButton>
                  <IconButton color="crimson" variant="soft">
                    <Cross2Icon width="18" height="18" />
                  </IconButton>
                </Flex>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>huynhca@example.com</Table.Cell>
              <Table.Cell>0813436664</Table.Cell>
              <Table.Cell>Cai Hoang</Table.Cell>
              <Table.Cell>Huynh</Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell>
                <Flex gap="4">
                  <IconButton color="amber" variant="soft">
                    <Pencil2Icon width="18" height="18" />
                  </IconButton>
                  <IconButton color="crimson" variant="soft">
                    <Cross2Icon width="18" height="18" />
                  </IconButton>
                </Flex>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
        <Flex className="mt-6 !justify-end px-4">
          <Flex className="items-center gap-6">
            <Text>Rows per Page</Text>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft" color="gray">
                  5
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>5</DropdownMenu.Item>
                <DropdownMenu.Item>10</DropdownMenu.Item>
                <DropdownMenu.Item>15</DropdownMenu.Item>
                <DropdownMenu.Item>20</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <Text>1 - 5 of 25</Text>
            <Flex gap="3">
              <IconButton color="gray" variant="soft">
                <DoubleArrowLeftIcon width="18" height="18" />
              </IconButton>
              <IconButton color="gray" variant="soft">
                <ChevronLeftIcon width="18" height="18" />
              </IconButton>
              <IconButton color="gray" variant="soft">
                <ChevronRightIcon width="18" height="18" />
              </IconButton>
              <IconButton color="gray" variant="soft">
                <DoubleArrowRightIcon width="18" height="18" />
              </IconButton>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
}

export default Home;
