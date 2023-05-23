 <Stack p={"xs"}>
            {_.keys(_.omit(targetStruktur, ["id"])).map((v, i) => (
                    <Box key={i}>
                      <TextInput
                        onChange={(val) => {
                          targetStruktur[v] = val.target.value;
                          setTargetStruktur({ ...targetStruktur });
                        }}
                        value={targetStruktur[v]}
                        label={_.upperCase(v)}
                      />
                    </Box>
                  ))}
                </Stack>
