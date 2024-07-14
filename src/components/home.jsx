import {
  AlertDialog,
  Avatar,
  Badge,
  Box,
  Button,
  Callout,
  Card,
  Code,
  Container,
  DataList,
  Dialog,
  DropdownMenu,
  Flex,
  IconButton,
  Link,
  Progress,
  Separator,
  Skeleton,
  Spinner,
  Table,
  Text,
  TextField,
  Tooltip,
} from "@radix-ui/themes";
import {
  BookmarkIcon,
  CaretSortIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  Cross1Icon,
  Cross2Icon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  InfoCircledIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import picDefault from "../assets/images/picDefault2.jpg";
import {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} from "../api/configApi";

import CreateUserForm from "./createUserForm";
import UpdateUserForm from "./updateUserForm";
import { useSnackbar } from "notistack";
import ExportToExcel from "./exportToExcel";

function Home() {
  const [users, setUsers] = useState([]);
  const [usersClone, setUsersClone] = useState([]);
  const [listUserNew, setListUserNew] = useState([]);
  const [itemStart, setItemStart] = useState(0);
  const [itemsEnd, setItemEnd] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [valueProcess, setValueProcess] = useState(0);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const [increaseFirst, setIncreaseFirst] = useState(true);
  const [increaseLast, setIncreaseLast] = useState(true);
  const [increaseRole, setIncreaseRole] = useState(true);
  const [rowQuantity, setRowQuantity] = useState(5);
  const [isClickSearch, setIsClickSearch] = useState(false);
  const [isRefesh, setIsRefesh] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getAllUser();
        setUsers(data);
        setUsersClone(data);
      } catch (error) {
        setError(error);
      } finally {
        setValueProcess(100);
        setIsLoading(false);
      }
    };

    getUsers();
  }, [isRefesh]);

  //cat mang tuy vao so luong hang
  const handleSliceUser = () => {
    //neu truong hop do dai mang be hon gioi han itemend cong them
    let limitEnd = usersClone.length < itemsEnd ? usersClone.length : itemsEnd;
    setListUserNew(usersClone.slice(itemStart, limitEnd));
  };

  useEffect(() => {
    handleSliceUser();
  }, [itemStart, itemsEnd, usersClone]);

  //search nhieu dieu kien
  const handleChangeSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setUsersClone(users);
    }
  };

  const handleSelect = (role) => {
    setSearchRole(role);
  };

  const handleSearch = () => {
    setIsClickSearch(true);
    const filteredUsers = users.filter((user) => {
      // kiem tra dieu kien phone, first name, last
      const matchSearchTerm =
        user.phoneNumber.includes(searchTerm) ||
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());

      //kiem tra role neu de trong la lay het hoac co role cu the
      const matchSearchRole = searchRole === "" || user.role === searchRole;

      return matchSearchTerm && matchSearchRole;
    });

    setUsersClone(filteredUsers);
    setItemStart(0);
    setItemEnd(rowQuantity);
  };

  //sort theo firstname, lastname, role
  const handleSortByFirst = () => {
    setIncreaseFirst(!increaseFirst);
    let sortedUsers;
    //sap xep tang
    if (increaseFirst) {
      sortedUsers = [...usersClone].sort((a, b) => {
        const nameA = a.firstName.toLowerCase();
        const nameB = b.firstName.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      //sap xep giam
      sortedUsers = [...usersClone].sort((a, b) => {
        const nameA = a.firstName.toLowerCase();
        const nameB = b.firstName.toLowerCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }

    setUsersClone(sortedUsers);
  };

  const handleSortByLast = () => {
    setIncreaseLast(!increaseLast);
    let sortedUsers;
    //sap xep tang
    if (increaseLast) {
      sortedUsers = [...usersClone].sort((a, b) => {
        const nameA = a?.lastName?.toLowerCase();
        const nameB = b?.lastName?.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      //sap xep giam
      sortedUsers = [...usersClone].sort((a, b) => {
        const nameA = a?.lastName?.toLowerCase();
        const nameB = b?.lastName?.toLowerCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }

    setUsersClone(sortedUsers);
  };

  const handleSortByRole = () => {
    setIncreaseRole(!increaseRole);
    let sortedUsers;
    //sap xep tang
    if (increaseRole) {
      sortedUsers = [...usersClone].sort((a, b) => {
        const nameA = a.role.toLowerCase();
        const nameB = b.role.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      //sap xep giam
      sortedUsers = [...usersClone].sort((a, b) => {
        const nameA = a.role.toLowerCase();
        const nameB = b.role.toLowerCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }

    setUsersClone(sortedUsers);
  };

  //navigation bar
  //row of page
  const handleRowOfPage = (numberRow) => {
    switch (numberRow) {
      case "10":
        setRowQuantity(10);
        setItemStart(0);
        setItemEnd(10);
        break;
      case "15":
        setRowQuantity(15);
        setItemStart(0);
        setItemEnd(15);
        break;
      case "20":
        setRowQuantity(20);
        setItemStart(0);
        setItemEnd(20);
        break;
      default:
        setRowQuantity(5);
        setItemStart(0);
        setItemEnd(5);
    }
  };

  //next, next more, prev, prev more
  const handleNext = () => {
    //neu la phan tu cuoi thi disable nut di
    //itemsEnd === usersClone.length ? setItemEnd(true) : setIsEnd(false);

    if (
      itemStart < usersClone.length - rowQuantity &&
      itemsEnd < usersClone.length
    ) {
      setItemStart(itemStart + rowQuantity);
      setItemEnd(itemsEnd + rowQuantity);
    }
  };
  const handlePrev = () => {
    //neu la phan tu dau thi disable nut di
    //itemStart === 0 ? setItemStart(true) : setIsStart(false);

    if (itemStart > 0 && itemsEnd > rowQuantity) {
      setItemStart(itemStart - rowQuantity);

      //khi so itemsend dang o cuoi mang va so luong phan tu nho hon rowquantity

      const endIndex = itemsEnd % rowQuantity;

      if (endIndex > 0 && endIndex < rowQuantity) {
        if (itemsEnd > usersClone.length) {
          setItemEnd(usersClone.length - endIndex);
        } else {
          setItemEnd(itemsEnd - endIndex);
        }
      } else {
        setItemEnd(itemsEnd - rowQuantity);
      }
    }
  };

  const handlePrevMore = () => {
    //neu la phan tu dau thi disable nut di
    //itemStart === 0 ? setItemStart(true) : setIsStart(false);

    setItemStart(0);
    setItemEnd(rowQuantity);
  };

  const handleNextMore = () => {
    //neu la phan tu cuoi thi disable nut di
    //itemsEnd === usersClone.length ? setItemEnd(true) : setIsEnd(false);

    const totalUser = usersClone.length;
    //tim vi tri dau tien cua nhung phan tu cuoi mang
    const startIndex = (totalUser % rowQuantity) - 1;

    if (startIndex < 0 && startIndex < rowQuantity) {
      setItemStart(totalUser - rowQuantity);
      setItemEnd(totalUser);
    } else {
      setItemStart(totalUser - startIndex - 1);
      setItemEnd(totalUser);
    }
  };

  //delete user
  const handleDeleteUser = async (idUser) => {
    try {
      const result = await deleteUser(idUser);
      //load lai list user
      setIsRefesh(!isRefesh);
      enqueueSnackbar("Delete user success!", {
        variant: "success",
        autoHideDuration: 1000,
      });
      //su ly khi xoa het tat ca phan tu trong mang nhin thay
      if (itemStart === itemsEnd - 1) {
        setItemEnd(usersClone.length);
        const limitStart = usersClone.length - rowQuantity - 1;
        if (limitStart < 0) {
          setItemStart(-1);
        } else {
          setItemStart(usersClone.length - rowQuantity - 1);
        }
      }
    } catch (error) {
      console.error("error: ", error);
      enqueueSnackbar("Delete user fail!", {
        variant: "success",
        autoHideDuration: 1000,
      });
    }
  };

  //config upload image
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Container size="4" className="py-6">
      <Card className="!px-0 !mx-2">
        <Flex className="mt-4 !justify-between items-center px-4">
          <Text className="text-lg font-medium">Users</Text>
          <Flex className="gap-4">
            <ExportToExcel users={users} />

            <CreateUserForm
              users={users}
              setUsers={setUsers}
              usersClone={usersClone}
              setUsersClone={setUsersClone}
            />
          </Flex>
        </Flex>
        <Flex gap="4" className="mt-6 px-4">
          <TextField.Root
            size="3"
            placeholder="Search name, email, phone…"
            className="sm:!w-[340px] !w-full"
            onChange={handleChangeSearch}
          >
            <TextField.Slot>
              <MagnifyingGlassIcon height="24" width="24" />
            </TextField.Slot>
          </TextField.Root>
          <Box className="!hidden sm:!block">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="soft"
                  color="gray"
                  size="3"
                  className="!cursor-pointer"
                >
                  {searchRole === "" ? "Roles" : searchRole}
                  <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size="2">
                <DropdownMenu.Item onSelect={() => handleSelect("")}>
                  All Role
                </DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => handleSelect("Admin")}>
                  Admin
                </DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => handleSelect("User")}>
                  User
                </DropdownMenu.Item>
                <DropdownMenu.Item onSelect={() => handleSelect("Editor")}>
                  Editor
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Box>

          <Button
            size="3"
            color="gray"
            variant="solid"
            highContrast
            className="!min-w-[80px] !cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </Button>
        </Flex>
        <Flex className="sm:!hidden mt-4 px-4">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft" color="gray" size="3">
                {searchRole === "" ? "Roles" : searchRole}
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="2">
              <DropdownMenu.Item onSelect={() => handleSelect("")}>
                All Role
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleSelect("Admin")}>
                Admin
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleSelect("User")}>
                User
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleSelect("Editor")}>
                Editor
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
        <Table.Root className="mt-6">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Phone Number</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Flex className="items-center">
                  <Text>Firstname</Text>
                  <Box className="p-1 hover:bg-slate-100 rounded-sm cursor-pointer">
                    <CaretSortIcon onClick={handleSortByFirst} />
                  </Box>
                </Flex>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Flex className="items-center">
                  <Text>Lastname</Text>
                  <Box className="p-1 hover:bg-slate-100 rounded-sm cursor-pointer">
                    <CaretSortIcon onClick={handleSortByLast} />
                  </Box>
                </Flex>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                <Flex className="items-center">
                  <Text>Role</Text>
                  <Box className="p-1 hover:bg-slate-100 rounded-sm cursor-pointer">
                    <CaretSortIcon onClick={handleSortByRole} />
                  </Box>
                </Flex>
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className="text-center">
                Action
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {listUserNew.map((user) => (
              <Table.Row key={user._id}>
                <Tooltip content={user._id}>
                  <Table.Cell className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-[2em]">
                    <Skeleton loading={isLoading}>{user._id}</Skeleton>
                  </Table.Cell>
                </Tooltip>
                <Table.Cell>
                  <Skeleton loading={isLoading}>{user.email}</Skeleton>
                </Table.Cell>
                <Table.Cell>
                  <Skeleton loading={isLoading}>{user.phoneNumber}</Skeleton>
                </Table.Cell>
                <Table.Cell>
                  <Skeleton loading={isLoading}>{user.firstName}</Skeleton>
                </Table.Cell>
                <Table.Cell>
                  <Skeleton loading={isLoading}>{user.lastName}</Skeleton>
                </Table.Cell>
                <Table.Cell>
                  <Skeleton loading={isLoading}>{user.role}</Skeleton>
                </Table.Cell>
                <Table.Cell>
                  <Skeleton loading={isLoading}>
                    <Flex gap="4" className="!justify-center">
                      <Dialog.Root>
                        <Dialog.Trigger>
                          <IconButton
                            color="indigo"
                            variant="soft"
                            className="!cursor-pointer"
                          >
                            <EyeOpenIcon width="18" height="18" />
                          </IconButton>
                        </Dialog.Trigger>

                        <Dialog.Content>
                          <Dialog.Title className="text-center">
                            Infomation User
                          </Dialog.Title>
                          <Flex gap="2" className="my-4 !flex-col sm:!flex-row">
                            <Box className="sm:w-4/12 w-full !flex !justify-center sm:items-center">
                              <Link
                                href={user.image ? user.image : "#"}
                                target={user.image ? "_blank" : ""}
                              >
                                <Avatar
                                  size="8"
                                  src={user.image ? user.image : picDefault}
                                  fallback="A"
                                />
                              </Link>
                            </Box>
                            <DataList.Root className="sm:w-8/12 w-full mt-2">
                              <DataList.Item>
                                <DataList.Label minWidth="88px">
                                  ID
                                </DataList.Label>
                                <DataList.Value>
                                  <Flex align="center" gap="2">
                                    <Code variant="ghost">{user._id}</Code>
                                    <IconButton
                                      size="1"
                                      aria-label="Copy value"
                                      color="gray"
                                      variant="ghost"
                                    >
                                      <CopyIcon />
                                    </IconButton>
                                  </Flex>
                                </DataList.Value>
                              </DataList.Item>
                              <DataList.Item>
                                <DataList.Label minWidth="88px">
                                  Phone Number
                                </DataList.Label>
                                <DataList.Value>
                                  {user.phoneNumber}
                                </DataList.Value>
                              </DataList.Item>
                              <DataList.Item>
                                <DataList.Label minWidth="88px">
                                  Email
                                </DataList.Label>
                                <DataList.Value>
                                  <Link href={`mailto:${user.email}`}>
                                    {user.email}
                                  </Link>
                                </DataList.Value>
                              </DataList.Item>
                              <DataList.Item>
                                <DataList.Label minWidth="88px">
                                  First Name
                                </DataList.Label>
                                <DataList.Value>
                                  {user.firstName}
                                </DataList.Value>
                              </DataList.Item>
                              <DataList.Item>
                                <DataList.Label minWidth="88px">
                                  Last Name
                                </DataList.Label>
                                <DataList.Value>{user.lastName}</DataList.Value>
                              </DataList.Item>
                              <DataList.Item align="center">
                                <DataList.Label minWidth="88px">
                                  Role
                                </DataList.Label>
                                <DataList.Value>
                                  <Badge
                                    color="jade"
                                    variant="soft"
                                    radius="full"
                                  >
                                    {user.role}
                                  </Badge>
                                </DataList.Value>
                              </DataList.Item>
                            </DataList.Root>
                          </Flex>
                        </Dialog.Content>
                      </Dialog.Root>

                      <UpdateUserForm
                        user={user}
                        isRefesh={isRefesh}
                        setIsRefesh={setIsRefesh}
                      />

                      <AlertDialog.Root>
                        <AlertDialog.Trigger>
                          <IconButton
                            color="crimson"
                            variant="soft"
                            className="!cursor-pointer"
                          >
                            <Cross2Icon width="18" height="18" />
                          </IconButton>
                        </AlertDialog.Trigger>
                        <AlertDialog.Content maxWidth="450px">
                          <AlertDialog.Title>
                            Delete User {user.lastName}
                          </AlertDialog.Title>
                          <AlertDialog.Description size="2">
                            Are you sure? This application will no longer be
                            accessible and any existing sessions will be
                            expired.
                          </AlertDialog.Description>

                          <Flex gap="3" mt="4" justify="end">
                            <AlertDialog.Cancel>
                              <Button
                                variant="soft"
                                color="gray"
                                size="3"
                                className="!cursor-pointer"
                              >
                                Cancel
                              </Button>
                            </AlertDialog.Cancel>
                            <AlertDialog.Action>
                              <Button
                                variant="solid"
                                color="red"
                                size="3"
                                className="!cursor-pointer"
                                onClick={() => handleDeleteUser(user._id)}
                              >
                                Yes, I agree
                              </Button>
                            </AlertDialog.Action>
                          </Flex>
                        </AlertDialog.Content>
                      </AlertDialog.Root>
                    </Flex>
                  </Skeleton>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        {isLoading && (
          <Box className="!flex !justify-center p-3">
            <Spinner size="3" />
          </Box>
        )}

        {usersClone.length === 0 && isClickSearch && (
          <Flex className="w-full !justify-center">
            <Callout.Root color="gray" className="mt-2 sm:w-[50%] w-full">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                No results found matching "{searchTerm}"{" "}
                {searchRole === "" ? "" : "and role: " + searchRole}
              </Callout.Text>
            </Callout.Root>
          </Flex>
        )}

        <Flex className="my-6 sm:!justify-end !justify-center  px-4">
          <Flex className="items-center gap-6 flex-col sm:flex-row">
            <Flex className="!justify-between items-center gap-4">
              <Text>Rows per Page</Text>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button
                    variant="soft"
                    color="gray"
                    className="!cursor-pointer"
                  >
                    {rowQuantity}
                    <DropdownMenu.TriggerIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onSelect={() => handleRowOfPage("5")}>
                    5
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => handleRowOfPage("10")}>
                    10
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => handleRowOfPage("15")}>
                    15
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => handleRowOfPage("20")}>
                    20
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <Text>
                {usersClone.length > 0 ? itemStart + 1 : itemStart}
                {" - "}
                <Text>
                  {itemsEnd > usersClone.length ? usersClone.length : itemsEnd}
                </Text>
                <Text>{" of " + usersClone.length}</Text>
              </Text>
            </Flex>

            <Flex gap="3">
              <IconButton
                color="gray"
                variant="soft"
                onClick={handlePrevMore}
                disabled={isStart}
                className="!cursor-pointer"
              >
                <DoubleArrowLeftIcon width="18" height="18" />
              </IconButton>
              <IconButton
                color="gray"
                variant="soft"
                onClick={handlePrev}
                disabled={isStart}
                className="!cursor-pointer"
              >
                <ChevronLeftIcon width="18" height="18" />
              </IconButton>
              <IconButton
                color="gray"
                variant="soft"
                onClick={handleNext}
                disabled={isEnd}
                className="!cursor-pointer"
              >
                <ChevronRightIcon width="18" height="18" />
              </IconButton>
              <IconButton
                color="gray"
                variant="soft"
                onClick={handleNextMore}
                disabled={isEnd}
                className="!cursor-pointer"
              >
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
