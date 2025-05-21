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
import { useEffect } from "react";
import { Link as RouterLink } from "react-router";
import { toast, ToastContainer } from "react-toastify";

function Login() {

  useEffect(() => {
    const registerStatus = localStorage.getItem("register");
    if (registerStatus === "success") {
      toast.success("สมัครสมาชิกสำเร็จ", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
      });
      localStorage.removeItem("register");
    }
  }, []);

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
                  เข้าสู่ระบบ
                </Text>
              </Center>
            </Card.Header>
            <Card.Body>
              <Stack gap="4" w="full">
                <Field.Root>
                  <Field.Label>ชื่อผู้ใช้</Field.Label>
                  <Input />
                </Field.Root>
                <Field.Root>
                  <Field.Label>รหัสผ่าน</Field.Label>
                  <Input type="password" />
                </Field.Root>
              </Stack>
            </Card.Body>
            <Card.Footer>
              <Flex direction={"column"} gap={2} w={"full"} align="stretch">
                <Button colorPalette={"blue"}>เข้าสู่ระบบ</Button>
                <Button as={RouterLink} to="/register" variant="outline">
                  สมัครสมาชิก
                </Button>
                <Flex justify={"center"}>
                  <Text
                    color={"blue"}
                    as={RouterLink}
                    to="/forgetpassword"
                    textStyle={"sm"}
                    textDecoration={"underline"}
                    _hover={{ color: "blue.600" }}
                    marginTop={"5px"}
                  >
                    ลืมรหัสผ่านใช่หรือไม่?
                  </Text>
                </Flex>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </Flex>
      </Container>
    </>
  );
}

export default Login;
