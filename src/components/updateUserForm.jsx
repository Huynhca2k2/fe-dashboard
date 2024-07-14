import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DropdownMenu,
  Flex,
  IconButton,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";
import {
  ExclamationTriangleIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  LockClosedIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import { updateUser, uploadImage } from "../api/configApi";

//cau hinh schema kiem tra dieu kien trong input
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format"),
  phoneNumber: yup.string().max(20, "Phone number is too long"),
  firstName: yup.string().max(255, "First name is too long"),
  lastName: yup.string().max(255, "Last name is too long"),
  role: yup.string().oneOf(["Admin", "Editor", "User"], "Invalid role"),
  image: yup.string().max(255, "image url is too long"),
  updatedAt: yup.date(),
});

const UpdateUserForm = ({ user, isRefesh, setIsRefesh }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { enqueueSnackbar } = useSnackbar();

  const [userItem, setUserItem] = useState(user);
  const [selectedRole, setSelectedRole] = useState(userItem.role);
  setValue("role", userItem.role);
  setValue("image", userItem.image);
  setValue("updatedAt", new Date().toISOString());
  const [valueNotChange, setValueNotChange] = useState(false);

  const [seePass, setSeePass] = useState(false);
  const [seePass2, setSeePass2] = useState(false);
  const [urlImage, setUrlImage] = useState(null);

  //set gia tri cua role cho form data
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setValue("role", role);
  };

  //update user
  const onSubmit = async (data) => {
    //set urlimage khi nguoi dung da upload hinh anh
    console.log("url image", urlImage);
    if (urlImage) {
      setValue("image", urlImage);
    }
    if (
      data.email === userItem.email &&
      data.role === userItem.role &&
      data.firstName === userItem.firstName &&
      data.lastName === userItem.lastName &&
      data.phoneNumber === userItem.phoneNumber &&
      data.image === userItem.image
    ) {
      enqueueSnackbar("Please edit at least one input cell!", {
        variant: "warning",
        autoHideDuration: 1000,
      });
      return;
    } else {
      try {
        console.log(data);
        const newUser = await updateUser(userItem._id, data);
        setUserItem(newUser);
        setIsRefesh(!isRefesh);
        enqueueSnackbar("Update user success!", {
          variant: "success",
          autoHideDuration: 1000,
        });
      } catch (error) {
        console.error("errr create user", error);
        enqueueSnackbar("Update user fail!", {
          variant: "error",
          autoHideDuration: 1000,
        });
      }
    }
  };

  const handleToggleSee = () => {
    setSeePass(!seePass);
  };
  const handleToggleSee2 = () => {
    setSeePass2(!seePass2);
  };

  //config upload image
  const fileInputRef = useRef(null);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      const pic = await uploadImage(file);
      setUrlImage(pic.image_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton color="amber" variant="soft" className="!cursor-pointer">
          <Pencil2Icon width="18" height="18" />
        </IconButton>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="1024px">
        <Dialog.Title>Update User</Dialog.Title>

        <Flex gap="3" className="sm:flex-row flex-col">
          <Box className="sm:w-8/12 w-full">
            <Flex gap="3" className="mt-4 ">
              <Box className="w-8/12">
                <label>
                  <Text as="span" size="2" mb="1" weight="bold">
                    Email <Text className="text-red-600">*</Text>
                    {errors.email && (
                      <Flex gap="2" className="items-center pb-1">
                        <ExclamationTriangleIcon
                          height="12px"
                          width="12px"
                          color="red"
                        />
                        <Text as="span" size="1" weight="medium" color="red">
                          {errors.email.message}
                        </Text>
                      </Flex>
                    )}
                  </Text>
                  <TextField.Root
                    size="3"
                    defaultValue={userItem.email}
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                </label>
              </Box>
              <Box className="w-4/12">
                <Text as="span" size="2" mb="1" weight="bold">
                  Role
                </Text>
                {errors.email && <Box width="20px" height="20px"></Box>}
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      size="3"
                      variant="soft"
                      color="gray"
                      className="!w-full !justify-between !cursor-pointer"
                    >
                      {selectedRole}
                      <DropdownMenu.TriggerIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content variant="soft" color="indigo" size="2">
                    <DropdownMenu.Item
                      onSelect={() => handleRoleSelect("Admin")}
                    >
                      Admin
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      onSelect={() => handleRoleSelect("User")}
                    >
                      User
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      onSelect={() => handleRoleSelect("Editor")}
                    >
                      Editor
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Box>
            </Flex>
            <Box className="mt-4">
              <label>
                <Text as="span" size="2" mb="1" weight="bold">
                  Phone number <Text className="text-red-600">*</Text>
                  {errors.phoneNumber && (
                    <Flex gap="2" className="items-center pb-1">
                      <ExclamationTriangleIcon
                        height="12px"
                        width="12px"
                        color="red"
                      />
                      <Text as="span" size="1" weight="medium" color="red">
                        {errors.phoneNumber.message}
                      </Text>
                    </Flex>
                  )}
                </Text>
                <TextField.Root
                  type="number"
                  size="3"
                  defaultValue={userItem.phoneNumber}
                  placeholder="Enter your phone number"
                  {...register("phoneNumber")}
                />
              </label>
            </Box>
            <Flex gap="3" className="mt-4">
              <Box className="w-6/12">
                <label>
                  <Text as="span" size="2" mb="1" weight="bold">
                    First Name <Text className="text-red-600">*</Text>
                    {errors.firstName && (
                      <Flex gap="2" className="items-center pb-1">
                        <ExclamationTriangleIcon
                          height="12px"
                          width="12px"
                          color="red"
                        />
                        <Text as="span" size="1" weight="medium" color="red">
                          {errors.firstName.message}
                        </Text>
                      </Flex>
                    )}
                  </Text>
                  <TextField.Root
                    size="3"
                    defaultValue={userItem.firstName}
                    placeholder="Enter your first name"
                    {...register("firstName")}
                  />
                </label>
              </Box>
              <Box className="w-6/12">
                <label>
                  <Text as="span" size="2" mb="1" weight="bold">
                    Last Name <Text className="text-red-600">*</Text>
                    {errors.lastName && (
                      <Flex gap="2" className="items-center pb-1">
                        <ExclamationTriangleIcon
                          height="12px"
                          width="12px"
                          color="red"
                        />
                        <Text as="span" size="1" weight="medium" color="red">
                          {errors.lastName.message}
                        </Text>
                      </Flex>
                    )}
                  </Text>
                  <TextField.Root
                    size="3"
                    defaultValue={userItem.lastName}
                    placeholder="Enter your last name"
                    {...register("lastName")}
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
                  type={seePass ? "text" : "password"}
                  placeholder="Enter your password"
                >
                  <TextField.Slot side="left" color="violet">
                    <LockClosedIcon height="16" width="16" />
                  </TextField.Slot>
                  <TextField.Slot side="right">
                    {seePass ? (
                      <EyeClosedIcon
                        height="16"
                        width="16"
                        className="!cursor-pointer"
                        onClick={handleToggleSee}
                      />
                    ) : (
                      <EyeOpenIcon
                        height="16"
                        width="16"
                        className="!cursor-pointer"
                        onClick={handleToggleSee}
                      />
                    )}
                  </TextField.Slot>
                </TextField.Root>

                <TextField.Root
                  size="3"
                  className="mt-4"
                  variant="classic"
                  type={seePass2 ? "text" : "password"}
                  placeholder="Enter your confirm password"
                >
                  <TextField.Slot side="left" color="violet">
                    <LockClosedIcon height="16" width="16" />
                  </TextField.Slot>
                  <TextField.Slot side="right">
                    {seePass2 ? (
                      <EyeClosedIcon
                        height="16"
                        width="16"
                        className="!cursor-pointer"
                        onClick={handleToggleSee2}
                      />
                    ) : (
                      <EyeOpenIcon
                        height="16"
                        width="16"
                        className="!cursor-pointer"
                        onClick={handleToggleSee2}
                      />
                    )}
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
            <Avatar
              size="8"
              src={urlImage ? urlImage : userItem.image}
              fallback={userItem.lastName}
            />
            <Button
              size="3"
              color="gray"
              variant="outline"
              highContrast
              onClick={handleChooseFile}
              className="!cursor-pointer"
            >
              Select Image
            </Button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
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
              onClick={handleSubmit(onSubmit)}
              disabled={valueNotChange}
            >
              Save Update
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default UpdateUserForm;
