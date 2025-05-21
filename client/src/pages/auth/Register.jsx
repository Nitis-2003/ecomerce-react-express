import {
  Button,
  Card,
  Center,
  Container,
  Field,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (
      username === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("กรุณากรอกข้อมูลให้ครบ", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      if (!isEmailValid) {
        toast.error("รูปแบบอีเมลไม่ถูกต้อง", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
      }

      if (password === confirmPassword && isEmailValid) {
        let userData = {
          username: username,
          password: password,
          email: email,
        };

        axios
          .post("http://localhost:3000/api/user/register", userData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            if (response['data'].message === "User created") {
              localStorage.setItem('register','success')
              navigate("/login");
            }
          })
          .catch((error) => {
            console.error("Error creating user:", error);
            toast.error("ไม่สามารถสมัครสมาชิกได้", {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
            });
          });
      }
      if (password !== confirmPassword) {
        toast.error("รหัสผ่านไม่ตรงกัน", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Container maxW={"100vw"} height={"100vh"} p={0}>
        <Flex
          align="center"
          justify="center"
          height="100%"
          bgGradient="to-r"
          gradientFrom="blue.400"
          gradientTo="blue.100"
        >
          <Card.Root maxW="sm" w={"100%"}>
            <Card.Header>
              <Center>
                <Text fontSize={"3xl"} fontWeight={"600"}>
                  สมัครสมาชิก
                </Text>
              </Center>
            </Card.Header>
            <Card.Body>
              <Stack gap="4" w="full">
                <Field.Root>
                  <Field.Label>ชื่อผู้ใช้</Field.Label>
                  <Input
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="off"
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>อีเมล</Field.Label>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>รหัสผ่าน</Field.Label>
                  <Input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Field.Root>
                <Field.Root>
                  <Field.Label>ยืนยันรหัสผ่าน</Field.Label>
                  <Input
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Field.Root>
              </Stack>
            </Card.Body>
            {/* <Card.Footer justifyContent="flex-end"> */}
            <Card.Footer>
              <Flex direction={"column"} gap={2} w={"full"} align="stretch">
                <Button colorPalette={"blue"} onClick={handleSubmit}>
                  สมัครสมาชิก
                </Button>
                <Button as={RouterLink} to="/login" variant="outline">
                  เข้าสู่ระบบ
                </Button>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </Flex>
      </Container>
    </>
  );
}

export default Register;
