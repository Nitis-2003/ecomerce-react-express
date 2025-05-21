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
import { Link as RouterLink } from "react-router";

function Register() {
  return (
    <>
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
                  <Input />
                </Field.Root>
                <Field.Root>
                  <Field.Label>อีเมล</Field.Label>
                  <Input type="email" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>รหัสผ่าน</Field.Label>
                  <Input type="password" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>ยืนยันรหัสผ่าน</Field.Label>
                  <Input type="password" />
                </Field.Root>
              </Stack>
            </Card.Body>
            {/* <Card.Footer justifyContent="flex-end"> */}
            <Card.Footer>
              <Flex direction={"column"} gap={2} w={"full"} align="stretch">
                <Button colorPalette={"blue"}>สมัครสมาชิก</Button>
                <Button as={RouterLink} to="/login" variant="outline">เข้าสู่ระบบ</Button>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </Flex>
      </Container>
    </>
  );
}

export default Register;
