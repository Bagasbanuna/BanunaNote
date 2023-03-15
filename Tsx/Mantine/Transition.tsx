const [seletctedPage, setSeletedPage] = useState<string>("1");
const [opened, setOpened] = useState<boolean>(false);


<ActionIcon
          pos={"fixed"}
          bottom={{ base: 20, lg: 20, md: 110, sm: 20 }}
          ml={{ base: 20, lg: 30 }}
          onClick={() => setOpened(true)}
          size={50}
          sx={{
            borderRadius: 100,
            // visibility: !opened ? "visible" : "hidden",
            transform: !opened ? "scale(1)" : "scale(0)",
            transition: "ease 0.2s",
            zIndex: 99,

            // borderWidth: 3
          }}
        >
          <RiArrowUpCircleFill size={50} color={"#1270B0"} />
        </ActionIcon>

        <Transition mounted={opened} transition={"fade"}>
          {(styles) => (
            <Paper
              bg={"rgba(255, 255, 255, 0.7)"}
              w={110}
              h={510}
              pos={"fixed"}
              bottom={"25%"}
              // p={"xs"}
              mx={"md"}
              sx={{
                borderRadius: 70,
                zIndex: 100,
                borderColor: "#1270B0",
                borderWidth: 3,
                transform: opened ? "scale(1)" : "scale(0)",
                transition: "ease 0.2s"
              }}
              withBorder
            >
              <Stack align="center" spacing="xl" pt={30}>
                <Group position="center">
                  {listHalaman.map((v) => (
                    <Box key={v.id}>
                      <Center>
                        <ThemeIcon
                          size={40}
                          radius={"xl"}
                          // bg={v.id == seletctedPage ? "white" : "gray.3"}
                          gradient={{ from: "#552FC3", to: "#1270B0" }}
                          variant={"gradient"}
                          // sx={{
                          //   borderColor: '#552FC3',
                          //   borderWidth: 3,
                          //   color: "#552FC3",

                          // }}
                          onClick={() => {
                            setSeletedPage(v.id);
                          }}
                        >
                          {v.icon}
                        </ThemeIcon>
                      </Center>

                      <Center>
                        <Text
                          size={15}
                          sx={{ textAlign: "center" }}
                          c={"#552FC3"}
                          fw={"300"}
                        >
                          {v.title}
                        </Text>
                      </Center>
                    </Box>
                  ))}
                  <ActionIcon
                    onClick={() => setOpened(false)}
                    size={50}
                    sx={{
                      borderRadius: 100,
                      

                    }}
                    color={"orange"}
                  >
                    <RiArrowDownCircleLine size={50} color={"#1270B0"} />
                  </ActionIcon>
                </Group>
              </Stack>
            </Paper>
          )}
        </Transition>
