import {
  AlertDialog,
  Avatar,
  Box,
  Button,
  Callout,
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
  CaretSortIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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

function Home() {
  const [users, setUsers] = useState([]);
  const [usersClone, setUsersClone] = useState([]);
  const [listUserNew, setListUserNew] = useState([]);
  const [itemStart, setItemStart] = useState(0);
  const [itemsEnd, setItemEnd] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRole, setSearchRole] = useState("");
  const [increaseFirst, setIncreaseFirst] = useState(true);
  const [increaseLast, setIncreaseLast] = useState(true);
  const [increaseRole, setIncreaseRole] = useState(true);
  const [rowQuantity, setRowQuantity] = useState(5);
  const [isClickSearch, setIsClickSearch] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getAllUser();
        setUsers(data);
        setUsersClone(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

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
    if (
      itemStart < usersClone.length - rowQuantity &&
      itemsEnd < usersClone.length
    ) {
      setItemStart(itemStart + rowQuantity);
      setItemEnd(itemsEnd + rowQuantity);
    }
  };
  const handlePrev = () => {
    if (itemStart > 0 && itemsEnd > rowQuantity) {
      setItemStart(itemStart - rowQuantity);

      //khi so itemsend dang o cuoi mang va so luong phan tu nho hon rowquantity
      const endIndex = usersClone.length % rowQuantity;

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
    setItemStart(0);
    setItemEnd(rowQuantity);
  };

  const handleNextMore = () => {
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
            <Button
              color="gray"
              variant="soft"
              highContrast
              className="!cursor-pointer"
            >
              Export to Excel
            </Button>

            <Dialog.Root>
              <Dialog.Trigger>
                <Button
                  color="gray"
                  variant="outline"
                  highContrast
                  className="!cursor-pointer"
                >
                  Add New User
                </Button>
              </Dialog.Trigger>

              <Dialog.Content maxWidth="1024px">
                <Dialog.Title>Add User</Dialog.Title>

                <Flex gap="3" className="sm:flex-row flex-col">
                  <Box className="sm:w-8/12 w-full">
                    <Flex gap="3" className="mt-4">
                      <Box className="w-8/12">
                        <label>
                          <Text as="span" size="2" mb="1" weight="bold">
                            Email <Text className="text-red-600">*</Text>
                          </Text>
                          <TextField.Root
                            size="3"
                            defaultValue=""
                            placeholder="Enter your email"
                          />
                        </label>
                      </Box>
                      <Box className="w-4/12">
                        <Text as="span" size="2" mb="1" weight="bold">
                          Role
                        </Text>
                        <DropdownMenu.Root>
                          <DropdownMenu.Trigger>
                            <Button
                              size="3"
                              variant="soft"
                              color="gray"
                              className="!w-full !justify-between !cursor-pointer"
                            >
                              Select
                              <DropdownMenu.TriggerIcon />
                            </Button>
                          </DropdownMenu.Trigger>
                          <DropdownMenu.Content
                            variant="soft"
                            color="indigo"
                            size="2"
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
                          Phone number <Text className="text-red-600">*</Text>
                        </Text>
                        <TextField.Root
                          type="number"
                          size="3"
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
                            size="3"
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
                            size="3"
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
                          size="3"
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
                          size="3"
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
                  <Separator
                    orientation="vertical"
                    className="!h-auto hidden sm:block"
                  />
                  <Flex
                    direction="column"
                    className="sm:w-4/12 w-full items-center"
                    gap="4"
                  >
                    <Text as="span" size="2" mb="1" weight="bold">
                      Profile Picture
                    </Text>
                    <Avatar size="8" src={picDefault} fallback="A" />
                    <Button
                      size="3"
                      color="gray"
                      variant="outline"
                      highContrast
                      onClick={handleButtonClick}
                      className="!cursor-pointer"
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

                <Flex gap="3" className="my-6" justify="end">
                  <Dialog.Close>
                    <Button
                      variant="soft"
                      color="gray"
                      size="3"
                      className="!cursor-pointer"
                    >
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button
                      color="gray"
                      variant="solid"
                      highContrast
                      size="3"
                      className="!cursor-pointer"
                    >
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
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {listUserNew.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phoneNumber}</Table.Cell>
                <Table.Cell>{user.firstName}</Table.Cell>
                <Table.Cell>{user.lastName}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <Flex gap="4">
                    <Dialog.Root>
                      <Dialog.Trigger>
                        <IconButton
                          color="amber"
                          variant="soft"
                          className="!cursor-pointer"
                        >
                          <Pencil2Icon width="18" height="18" />
                        </IconButton>
                      </Dialog.Trigger>

                      <Dialog.Content maxWidth="1024px">
                        <Dialog.Title>Edit User</Dialog.Title>

                        <Flex
                          gap="3"
                          className="flex-col sm:flex-row items-center"
                        >
                          <Box className="sm:w-8/12 w-full">
                            <Flex gap="3" className="mt-4">
                              <Box className="w-8/12">
                                <label>
                                  <Text as="span" size="2" mb="1" weight="bold">
                                    Email{" "}
                                    <Text className="text-red-600">*</Text>
                                  </Text>
                                  <TextField.Root
                                    size="3"
                                    defaultValue=""
                                    placeholder="Enter your email"
                                  />
                                </label>
                              </Box>
                              <Box className="w-4/12">
                                <Text as="span" size="2" mb="1" weight="bold">
                                  Role
                                </Text>
                                <DropdownMenu.Root>
                                  <DropdownMenu.Trigger>
                                    <Button
                                      size="3"
                                      variant="soft"
                                      color="gray"
                                      className="!w-full !justify-between !cursor-pointer"
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
                                    <DropdownMenu.Item>
                                      Editor
                                    </DropdownMenu.Item>
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
                                  size="3"
                                  type="number"
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
                                    size="3"
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
                                    size="3"
                                    defaultValue=""
                                    placeholder="Enter your last name"
                                  />
                                </label>
                              </Box>
                            </Flex>
                            <Box className="mt-4">
                              <label>
                                <Text as="span" size="2" mb="1">
                                  Password{" "}
                                  <Text className="text-red-600">*</Text>
                                </Text>
                                <TextField.Root
                                  size="3"
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
                                  size="3"
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
                          <Separator
                            orientation="vertical"
                            className="!h-auto sm:block hidden"
                          />
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
                              size="3"
                              color="gray"
                              variant="outline"
                              highContrast
                              onClick={handleButtonClick}
                              className="!w-max !cursor-pointer"
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
                            <Button
                              variant="soft"
                              color="gray"
                              size="3"
                              className="!cursor-pointer"
                            >
                              Cancel
                            </Button>
                          </Dialog.Close>
                          <Dialog.Close>
                            <Button
                              color="gray"
                              variant="solid"
                              highContrast
                              size="3"
                              className="!cursor-pointer"
                            >
                              Save Edit
                            </Button>
                          </Dialog.Close>
                        </Flex>
                      </Dialog.Content>
                    </Dialog.Root>

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
                          Delete User {user.firstName}
                        </AlertDialog.Title>
                        <AlertDialog.Description size="2">
                          Are you sure? This application will no longer be
                          accessible and any existing sessions will be expired.
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
                            >
                              Yes, I agree
                            </Button>
                          </AlertDialog.Action>
                        </Flex>
                      </AlertDialog.Content>
                    </AlertDialog.Root>
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
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
                {itemStart + 1 + " - "}
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
                className="!cursor-pointer"
              >
                <DoubleArrowLeftIcon width="18" height="18" />
              </IconButton>
              <IconButton
                color="gray"
                variant="soft"
                onClick={handlePrev}
                className="!cursor-pointer"
              >
                <ChevronLeftIcon width="18" height="18" />
              </IconButton>
              <IconButton
                color="gray"
                variant="soft"
                onClick={handleNext}
                className="!cursor-pointer"
              >
                <ChevronRightIcon width="18" height="18" />
              </IconButton>
              <IconButton
                color="gray"
                variant="soft"
                onClick={handleNextMore}
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
