import {
  AlertDialog,
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DropdownMenu,
  Flex,
  IconButton,
  Separator,
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
  EyeClosedIcon,
  EyeOpenIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { useRef } from "react";
import picDefault from "../assets/images/picDefault2.jpg";

function Home() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container size="4" className="py-6">
      <Card className="!px-0">
        <Flex className="mt-4 !justify-between items-center px-4">
          <Text className="text-lg font-medium">Users</Text>
          <Flex className="gap-4">
            <Button color="gray" variant="soft" highContrast>
              Export to Excel
            </Button>

            <Dialog.Root>
              <Dialog.Trigger>
                <Button color="gray" variant="outline" highContrast>
                  Add New User
                </Button>
              </Dialog.Trigger>

              <Dialog.Content maxWidth="1024px">
                <Dialog.Title>Add User</Dialog.Title>

                <Flex gap="3">
                  <Box className="w-8/12">
                    <Flex gap="3" className="mt-4">
                      <Box className="w-6/12">
                        <label>
                          <Text as="span" size="2" mb="1" weight="bold">
                            Email <Text className="text-red-600">*</Text>
                          </Text>
                          <TextField.Root
                            defaultValue=""
                            placeholder="Enter your email"
                          />
                        </label>
                      </Box>
                      <Box className="w-6/12">
                        <Text as="span" size="2" mb="1" weight="bold">
                          Role
                        </Text>
                        <DropdownMenu.Root>
                          <DropdownMenu.Trigger>
                            <Button
                              variant="soft"
                              color="gray"
                              className="!w-full !justify-between"
                            >
                              Select
                              <DropdownMenu.TriggerIcon />
                            </Button>
                          </DropdownMenu.Trigger>
                          <DropdownMenu.Content variant="soft" color="indigo">
                            <DropdownMenu.Item>Admin</DropdownMenu.Item>
                            <DropdownMenu.Item>User</DropdownMenu.Item>
                            <DropdownMenu.Item>Editor</DropdownMenu.Item>
                          </DropdownMenu.Content>
                        </DropdownMenu.Root>
                      </Box>
                    </Flex>
                    <Box className="mt-4">
                      <label>
                        <Text as="span" size="2" mb="1" weight="bold">
                          Phone number <Text className="text-red-600">*</Text>
                        </Text>
                        <TextField.Root
                          defaultValue=""
                          placeholder="Enter your phone number"
                        />
                      </label>
                    </Box>
                    <Flex gap="3" className="mt-4">
                      <Box className="w-6/12">
                        <label>
                          <Text as="span" size="2" mb="1" weight="bold">
                            First Name <Text className="text-red-600">*</Text>
                          </Text>
                          <TextField.Root
                            defaultValue=""
                            placeholder="Enter your first name"
                          />
                        </label>
                      </Box>
                      <Box className="w-6/12">
                        <label>
                          <Text as="span" size="2" mb="1" weight="bold">
                            Last Name <Text className="text-red-600">*</Text>
                          </Text>
                          <TextField.Root
                            defaultValue=""
                            placeholder="Enter your last name"
                          />
                        </label>
                      </Box>
                    </Flex>
                    <Box className="mt-4">
                      <label>
                        <Text as="span" size="2" mb="1">
                          Password <Text className="text-red-600">*</Text>
                        </Text>
                        <TextField.Root
                          variant="classic"
                          type="password"
                          defaultValue=""
                          placeholder="Enter your password"
                        >
                          <TextField.Slot side="left" color="violet">
                            <LockClosedIcon height="16" width="16" />
                          </TextField.Slot>
                          <TextField.Slot side="right">
                            <EyeOpenIcon height="16" width="16" />
                          </TextField.Slot>
                        </TextField.Root>
                        <TextField.Root
                          className="mt-4"
                          variant="classic"
                          type="password"
                          defaultValue=""
                          placeholder="Enter your confirm password"
                        >
                          <TextField.Slot side="left" color="violet">
                            <LockClosedIcon height="16" width="16" />
                          </TextField.Slot>
                          <TextField.Slot side="right">
                            <EyeClosedIcon height="16" width="16" />
                          </TextField.Slot>
                        </TextField.Root>
                      </label>
                    </Box>
                  </Box>
                  <Separator orientation="vertical" className="!h-auto" />
                  <Flex
                    direction="column"
                    className="w-4/12 items-center"
                    gap="4"
                  >
                    <Text as="span" size="2" mb="1" weight="bold">
                      Profile Picture
                    </Text>
                    <Avatar size="8" src={picDefault} fallback="A" />
                    <Button
                      color="gray"
                      variant="outline"
                      highContrast
                      onClick={handleButtonClick}
                    >
                      Select Image
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      className="hidden"
                    />
                  </Flex>
                </Flex>

                <Flex gap="3" className="my-6" justify="start">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button color="gray" variant="solid" highContrast>
                      Add User
                    </Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
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
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <IconButton color="amber" variant="soft">
                        <Pencil2Icon width="18" height="18" />
                      </IconButton>
                    </Dialog.Trigger>

                    <Dialog.Content maxWidth="1024px">
                      <Dialog.Title>Edit User</Dialog.Title>

                      <Flex gap="3">
                        <Box className="w-8/12">
                          <Flex gap="3" className="mt-4">
                            <Box className="w-6/12">
                              <label>
                                <Text as="span" size="2" mb="1" weight="bold">
                                  Email <Text className="text-red-600">*</Text>
                                </Text>
                                <TextField.Root
                                  defaultValue=""
                                  placeholder="Enter your email"
                                />
                              </label>
                            </Box>
                            <Box className="w-6/12">
                              <Text as="span" size="2" mb="1" weight="bold">
                                Role
                              </Text>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button
                                    variant="soft"
                                    color="gray"
                                    className="!w-full !justify-between"
                                  >
                                    Select
                                    <DropdownMenu.TriggerIcon />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content
                                  variant="soft"
                                  color="indigo"
                                >
                                  <DropdownMenu.Item>Admin</DropdownMenu.Item>
                                  <DropdownMenu.Item>User</DropdownMenu.Item>
                                  <DropdownMenu.Item>Editor</DropdownMenu.Item>
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </Box>
                          </Flex>
                          <Box className="mt-4">
                            <label>
                              <Text as="span" size="2" mb="1" weight="bold">
                                Phone number{" "}
                                <Text className="text-red-600">*</Text>
                              </Text>
                              <TextField.Root
                                defaultValue=""
                                placeholder="Enter your phone number"
                              />
                            </label>
                          </Box>
                          <Flex gap="3" className="mt-4">
                            <Box className="w-6/12">
                              <label>
                                <Text as="span" size="2" mb="1" weight="bold">
                                  First Name{" "}
                                  <Text className="text-red-600">*</Text>
                                </Text>
                                <TextField.Root
                                  defaultValue=""
                                  placeholder="Enter your first name"
                                />
                              </label>
                            </Box>
                            <Box className="w-6/12">
                              <label>
                                <Text as="span" size="2" mb="1" weight="bold">
                                  Last Name{" "}
                                  <Text className="text-red-600">*</Text>
                                </Text>
                                <TextField.Root
                                  defaultValue=""
                                  placeholder="Enter your last name"
                                />
                              </label>
                            </Box>
                          </Flex>
                          <Box className="mt-4">
                            <label>
                              <Text as="span" size="2" mb="1">
                                Password <Text className="text-red-600">*</Text>
                              </Text>
                              <TextField.Root
                                variant="classic"
                                type="password"
                                defaultValue=""
                                placeholder="Enter your password"
                              >
                                <TextField.Slot side="left" color="violet">
                                  <LockClosedIcon height="16" width="16" />
                                </TextField.Slot>
                                <TextField.Slot side="right">
                                  <EyeOpenIcon height="16" width="16" />
                                </TextField.Slot>
                              </TextField.Root>
                              <TextField.Root
                                className="mt-4"
                                variant="classic"
                                type="password"
                                defaultValue=""
                                placeholder="Enter your confirm password"
                              >
                                <TextField.Slot side="left" color="violet">
                                  <LockClosedIcon height="16" width="16" />
                                </TextField.Slot>
                                <TextField.Slot side="right">
                                  <EyeClosedIcon height="16" width="16" />
                                </TextField.Slot>
                              </TextField.Root>
                            </label>
                          </Box>
                        </Box>
                        <Separator orientation="vertical" className="!h-auto" />
                        <Flex
                          direction="column"
                          className="w-4/12 items-center"
                          gap="4"
                        >
                          <Text as="span" size="2" mb="1" weight="bold">
                            Profile Picture
                          </Text>
                          <Avatar size="8" src={picDefault} fallback="A" />
                          <Button
                            color="gray"
                            variant="outline"
                            highContrast
                            onClick={handleButtonClick}
                          >
                            Select Image
                          </Button>
                          <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                          />
                        </Flex>
                      </Flex>

                      <Flex gap="3" className="my-6" justify="start">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button color="gray" variant="solid" highContrast>
                            Save Edit
                          </Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <IconButton color="crimson" variant="soft">
                        <Cross2Icon width="18" height="18" />
                      </IconButton>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content maxWidth="450px">
                      <AlertDialog.Title>Delete User 123</AlertDialog.Title>
                      <AlertDialog.Description size="2">
                        Are you sure? This application will no longer be
                        accessible and any existing sessions will be expired.
                      </AlertDialog.Description>

                      <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button variant="solid" color="red">
                            Yes, I agree
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
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
        <Flex className="my-6 !justify-end px-4">
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
